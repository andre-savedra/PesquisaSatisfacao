<template>
  <div>
    <h1>Formulario</h1>
    <Dropdown
      class="drop"
      v-model="selectedTurma"
      :options="turmas"
      optionLabel="name"
      placeholder="Selecione uma turma aqui"
    />
  </div>
</template>

<script>
export default {
  name: "formulario",
  layout: "default",
  turmas: ["TURMA1", "TURMA2", "TURMA3"],
  selectedTurma: []
};
</script>

<style>
</style>