<template>
  <h4 id="author">Moseev Evgeny</h4>
  <form action="#">
    <input type="text" name="Title" id="Title" placeholder="Title" />
    <button
      @click.stop.prevent="create"
    >Создать</button>
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
  methods : {
    async create (e) {
      const form = e.target.form;
      const title = form.elements.Title.value;
      if (title) {
        const res = await mongo.create({
          index: this.frames.length + 1,
          title: title,
          votes: 0,
        }).catch((err) => console.warn(err));
        this.frames.push(res);
      } else {
        form.elements.Title.focus();
      }
    }
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
table { 
  margin: 30px auto;
}
</style>
