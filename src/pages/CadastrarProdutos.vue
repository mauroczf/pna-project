<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-input
        filled
        v-model="nome_produto"
        label="Nome"
        lazy-rules
      />
      <q-input
        filled
        v-model="desc"
        label="Descrição"
        lazy-rules
      />
      <div>
        <q-btn @click="onSubmit()" label="Enviar" type="submit" color="primary"/>
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
      nome_produto: null,
      desc: null,
    }
  },

  methods:{

    onSubmit () {
      axios
      .post(`http://127.0.0.1:8000/api/v1/produtos`, {
        nome_produto: this.nome_produto,
        desc: this.desc
      })
      .then((res) => {
        this.mensagem()
        this.nome_produto = ""
        this.desc = ""
        this.$router.push("/produtos");
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
          message: 'Produto Cadastrado!'
        })
    }
    },
  };
</script>

<style>
</style>
