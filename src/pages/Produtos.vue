<template>
<div class="row">
  <div class="q-pa-md items-start q-gutter-md"  v-for="(produtos, index) in produtos" :key="index">
    <q-card-actions align="right">
      </q-card-actions>
    <q-card class="my-card">
      <!-- <img src="https://www.guia55.com.br/wp-content/uploads/2019/10/48670720_m.jpg"> -->
      <q-card-section>
        <div class="text-h6">{{produtos.nome_produto}}</div>
        <div class="text-subtitle3">{{produtos.desc}}</div>
        <div class="text-subtitle3">{{produtos.id}}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="delete" class="deletar" @click="deletar(produtos.id)"/>
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
      produtos: [],
    }
  },

  methods:{
    deletar(id) {
      axios
      .delete(`http://127.0.0.1:8000/api/v1/produtos/${id}`)
      .then((res) => {
        this.getProdutos()
      })
      .catch((error) => {
        console.log(error);
      })
      alert("Item apagado com sucesso, atualize sua página")
    },
    getProdutos() {
      axios
      .get("http://127.0.0.1:8000/api/v1/produtos")
      .then((res) => {
        this.produtos = res.data.produto;
        console.log(res.data.produto)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getProdutos()
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px
  flex-direction: row
</style>
