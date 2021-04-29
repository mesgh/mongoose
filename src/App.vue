<template>
  <h4 id="author">Moseev Evgeny</h4>
  <form action="#">
    <input type="number" name="" id="" placeholder="" />
    <input type="text" name="" id="" />
    <input type="number" name="" id="" />
    <button></button>
  </form>
  <table>
    <tr>
      <td>ID</td>
      <td>Title</td>
      <td>Votes</td>
      <td></td>
    </tr>
    <tr v-for="(frame, index) in frames" :key="index">
      <Frame :frame="frame" />
    </tr>
  </table>
</template>

<script>
import Frame from "./components/frame.vue";
import { mongo } from "./api";

export default {
  name: "App",
  components: {
    Frame,
  },
  data() {
    return {
      frames: [],
    };
  },
  async mounted() {
    const res = await mongo.read().catch((err) => console.warn(err));
    this.frames = res.data || [];
    console.log(this.frames);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
