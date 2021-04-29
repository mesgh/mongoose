<template>
    <td>{{ frame.index }}</td>
    <td>{{ frame.title }}</td>
    <td>{{ frame.votes }}</td>
    <td>
      <button
        @click.stop.prevent="del"
      >
        ❌
      </button>
    </td>
</template>

<script>
import { mongo } from "./../api";

export default {
  name: 'Frame',
  props: {
    frame: Array
  },
  methods: {
    del () {
      if (confirm(`Вы уверены, что хотите удалить ${this.frame.title} из списка?`)) {
        mongo.del(this.frame);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    padding: 5px;
    border: 1px solid black;
  }
</style>
