<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You are not old enough to view this message</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "Hello World!",
    }
  }
}
</script>

<style scoped lang="scss">
$mainColor: red;

p {
  color: $mainColor;
}
</style>