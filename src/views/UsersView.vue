<template>
  <div class="users">
    <table v-for="({ id, email, name, phone }, index) in data" :key="index">
      <thead>
        <tr>
          <td>{{ id }}</td>
          <td>{{ email }}</td>
          <td>{{ name.firstname }}</td>
          <td>{{ phone }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersView",
  data() {
    return {
      data: null,
    };
  },
  created() {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
      });
  },
};
</script>

<style scoped>
.users{
  padding: 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

table th,
table td {
    padding: 12px 15px;
}

table tbody tr {
  border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

</style>
