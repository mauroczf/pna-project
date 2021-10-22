<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-input
        filled
        v-model="titulo"
        label="Título"
        lazy-rules
      />
      <q-input
        filled
        v-model="autor"
        label="Autor"
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
      titulo: null,
      autor: null,
      desc: null,
    }
  },

  methods:{

    onSubmit () {
      axios
      .post(`http://127.0.0.1:8000/api/v1/livros`, {
        titulo: this.titulo,
        autor: this.autor,
        desc: this.desc
      })
      .then((res) => {
        this.mensagem()
        this.titulo = ""
        this.autor = ""
        this.desc = ""
        this.$router.push("/livros");
      })
      .catch((error) => {
        console.log(error);
      })
      },
    onReset () {
      this.titulo = null
      this.autor = null
      this.desc = null
      },
    mensagem () {
       this.$q.notify({
          color: 'green-6',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Livro Cadastrado!'
        })
    }
    },
  };
</script>
...
<style>

</style>
