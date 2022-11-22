<template>
  <div class="container">
    <div>
      <input
        type="number"
        v-model.number="id"
        @keyup="getAllData"
        placeholder="filtrar por id"
      />
    </div>
    <div>
      <input
      type="number"
      v-model.number="rating"
      @keyup="getDataByRating"
      placeholder="filtrar por rating"
    />
    {{rating}}
    </div>
    <div class="home">
      <span v-if="title != null">
        <div class="card">
          <div class="title">
            {{ data.title }}
          </div>
          <div class="descri">
            {{ data.description }}
          </div>
        </div>
      </span>
      <span v-else class="grid_card">
        <div
          class="card"
          v-for="({ title, description }, index) in data"
          :key="index"
        >
          <div class="title">
            {{ title }}
          </div>
          <div class="descri">
            {{ description }}
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { isObject } from "@vue/shared";
import eventServices from "../services/eventServices.js";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      data: null,
      id: null,
      //seeCard: false,
      title: null,
      description: null,
      rating: null,
      counter: null
    };
  },
  created() {
    eventServices.getEvent().then((response) => (this.data = response.data));
  },
  methods: {
    getAllData() {
      eventServices.getEvents(this.id).then((response) => {
        if (response.data) {
          if (isObject(response.data)) {
            this.data = response.data;
            this.title = response.data.title;
            this.description = response.data.description;
            //this.seeCard = true;
          }
          this.data = response.data;
        }
        console.log(this.data);
      });
    },
    getDataByRating(){
      if(this.rating){
        eventServices.getEvent().then((response)=>{
        this.data = response.data.filter(x => x.rating.rate > this.rating) 
      })
      }else{
        this.getAllData()
      }
    }
  }
};
</script> 

<style scoped>

.container{
  padding: 0 200px;
}
.grid_card {
  display: grid;
  grid-template-columns: auto auto auto;
}
.card {
  padding: 50px;
  margin-top: 20px;
  border: 1px solid #000;
  width: 200px;
}

.card .title {
  border: 1px solid #000;
  margin: 10px;
}
</style>
