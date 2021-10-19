<template>
<div class="row">
  <div class="q-pa-md items-start q-gutter-md"  v-for="(item, index) in item" :key="index">
    <q-card class="my-card">
      <img :src="item.photo">
      <q-card-section>
        <div class="text-h6">{{item.titulo}}</div>
        <div class="text-subtitle2">{{item.desc}}</div>
      </q-card-section>
    </q-card>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 450px
  flex-direction: row
</style>
