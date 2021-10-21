<template>
<div class="row">
  <div class="q-pa-md items-start q-gutter-md"  v-for="(livros, index) in livros" :key="index">
    <q-card class="my-card">
      <img src="https://www.guia55.com.br/wp-content/uploads/2019/10/48670720_m.jpg">
      <q-card-section>
        <div class="text-h6">{{livros.titulo}}</div>
        <div class="text-subtitle2">{{livros.autor}}</div>
        <div class="text-subtitle3">{{livros.desc}}</div>
      </q-card-section>
    </q-card>
  </div>
</div>
</template>
...
<script>

import axios from "axios";

export default {
  data () {
    return {
      livros: [],
    }
  },

  methods:{
    getLivros() {
      axios
      .get("http://127.0.0.1:8000/api/v1/livros")
      .then((res) => {
        this.livros = res.data.livro;
        console.log(res.data.livro)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getLivros()
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px
  flex-direction: row
</style>
