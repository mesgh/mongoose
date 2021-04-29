<template>
    <td>{{ frame.index }}</td>
    <td>{{ frame.title }}</td>
    <td>{{ frame.votes }}</td>
    <td>
      <button
        @click.stop.prevent="voteUp"
      >
        👍
      </button>
    </td>
    <td>
      <button
        @click.stop.prevent="voteDown"
      >
        👎
      </button>
    </td>
    <td>
      <button
        @click.stop.prevent="remove"
      >
        ❌
      </button>
    </td>
</template>

<script>

export default {
  name: 'Frame',
  props: {
    frame: Array
  },
  methods: {
    async remove () {
      if (confirm(`Вы уверены, что хотите удалить ${this.frame.title} из списка?`)) {
        this.$emit('remove', this.frame.index);
      }
    },
    async voteUp () {
      this.$emit('vote', {index: this.frame.index, votes: this.frame.votes + 1});
    },
    async voteDown () {
      this.$emit('vote', {index: this.frame.index, votes: this.frame.votes - 1});
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
  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
</style>
