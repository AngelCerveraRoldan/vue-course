<template>
  <p>The user is {{ age }} years old</p>
  <button type="button" @click="onClickAge">Birthday</button>
</template>

<script>
export default {
  name: "User",
  props: {
    "age": {
      type: Number, // Could also be an array of types
      required: true,
      validator(value) {
        return (value > 0 && value < 130)
      },
    }
  },
  emits: ["age-change"],
  computed: {
    ageDoubled() {
      return this.age * 2
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3)
    },
  }
}
</script>
