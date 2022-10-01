<template>
  <p>{{ $store.getters.count }}</p>
  <button @click="updateCounter">Update counter</button>
</template>

<script>
export default {
  name: 'App',
  components: {},

  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    updateCounter() {},
  },
};
</script>
