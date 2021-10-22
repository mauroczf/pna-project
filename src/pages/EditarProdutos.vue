<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
       <div class="row">
         <div class="col-3">
          <q-btn @click="getProduto()" label="Buscar" type="search" color="primary"/>
         </div>
         <div class="col-9">
        <q-input
        class="full-width"
        filled
        dense
        v-model="id"
        label="id"
        lazy-rules
      />
      </div>
      </div>
      <q-input
        filled
        v-model="produto.nome_produto"
        label="Nome"
        lazy-rules
      />
      <q-input
        filled
        v-model="produto.desc"
        label="Descrição"
        lazy-rules
      />
      <div>
        <q-btn @click="updateProd()" label="Enviar" type="submit" color="primary"/>
        <q-btn @click="onReset()" label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </div>
  </div>
</template>
...
<script>
import axios from "axios";

export default {
  data () {
    return {
      produto: {
        nome_produto: "",
        desc: "",
      },
      id: "",
    }
  },

  methods:{
    getProduto(){
      axios
      .get(`http://127.0.0.1:8000/api/v1/produtos/${this.id}`)
      .then((res) => {
        this.mensagemListado()
        this.produto = res.data.produto
        console.log(res.data.produto)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    updateProd () {
      axios
      .put(`http://127.0.0.1:8000/api/v1/produtos/${this.id}`, {
        nome_produto: this.produto.nome_produto,
        desc: this.produto.desc,
      })
      .then((res) => {
        this.mensagem()
      })
      .catch((error) => {
        console.log(error);
      })
      },
    onReset () {
      this.nome_produto = null
      this.desc = null
      },
    mensagem () {
       this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Produto Atualizado!'
        })
    },
    mensagemListado () {
       this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Produto listado com sucesso!'
        })
    }
    },
  };
</script>

<style>
</style>
