<template>
<div class="row">
  <div class="q-pa-md items-start q-gutter-md"  v-for="(produtos, index) in produtos" :key="index">
    <q-card class="my-card">
      <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg">
      <q-card-section>
        <div class="text-h6">{{produtos.titulo}}</div>
        <div class="text-subtitle2">{{produtos.desc}}</div>
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
      produtos: [],
      item: [
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "free",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          titulo: "Titulo 1",
        },
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "paid",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          titulo: "Titulo 2",
        },
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "free",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          titulo: "Titulo 3",
        },
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "free",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          titulo: "Titulo 4",
        },
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "paid",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          titulo: "Titulo 5",
        },
        {
          photo: "https://placeimg.com/500/300/nature?t=" + Math.random(),
          type: "free",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          titulo: "Titulo 6",
        },
      ],
    }
  },

  methods:{
    getProdutos() {
      axios
      .get("http://127.0.0.1:8000/api/v1/produtos")
      .then((res) => {
        this.produtos = res.data;
        console.log(res.data)
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
