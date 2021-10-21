<template>
<div class="row">
  <div class="q-pa-md items-start q-gutter-md"  v-for="(livros, index) in livros" :key="index">
    <q-card-actions align="right">
      </q-card-actions>
    <q-card class="my-card">
      <img src="https://www.guia55.com.br/wp-content/uploads/2019/10/48670720_m.jpg">
      <q-card-section>
        <div class="text-h6">{{livros.titulo}}</div>
        <div class="text-subtitle2">{{livros.autor}}</div>
        <div class="text-subtitle3">{{livros.desc}}</div>
        <div class="text-subtitle3">{{livros.id}}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="delete" class="deletar" @click="deletar(livros.id)"/>
        <q-btn flat round color="dark-grey" icon="edit" />
        <!-- <q-btn flat round color="primary" icon="share" /> -->
      </q-card-actions>
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
    deletar(id) {
      axios
      .delete(`http://127.0.0.1:8000/api/v1/livros/${id}`)
      .then((res) => {
        this.getLivros()
      })
      .catch((error) => {
        console.log(error);
      })
      alert("Item apagado com sucesso, atualize sua página")
    },
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
