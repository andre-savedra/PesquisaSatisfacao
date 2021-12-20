<template>
  <div class="body">
    <div class="head">
      <form id="content_search" class="d-flex">
        <input
          id="search"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <h1 class="title">Turmas</h1>
    </div>
    <div class="cards" v-for="(turma, index) in this.turmas" :key="index">
      <div class="card">
        <div class="card-body">
          <p class="card-title">
            Turma: <b>{{ turma["name"] }}</b>
          </p>
          <p class="card-text">
            Total de alunos: <b>{{ turma["alunos"] }}</b>
          </p>
          <router-link :to="{name: 'feedbacks', params: {idTurma: turma['id']}}" class="btn">Feedbacks</router-link>
          <router-link :to="{name: 'dashboards', params: {idTurma: turma['id']}}" class="btn">Dashboard</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      turmas: [],
    };
  },
  methods: {
    getTurmas: async function () {
      await this.$axios
        .get("http://127.0.0.1:8000/api/v1/Turma/")
        .then((dados) => {
          dados.data.forEach(async (element) => {
            await this.turmas.push({
              id: element.id,
              name: element.nome,
              alunos: element.totalAlunos,
            });
          });
        });
    },
  },
  created() {
    this.getTurmas();
  },
};
</script>
<style lang="scss">
.body {
  padding: 60px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .head{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    h1{
      text-align: right;
    }
  }
}
</style>
