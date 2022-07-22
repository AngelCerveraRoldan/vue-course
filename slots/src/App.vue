<template>
  {{ title }}
  <app-form>
    <template v-slot:help>
      <p>This is some help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from "@/components/Form";

export default {
  name: 'App',
  components: {
    AppForm
  },
  data() {
    return {
      title: "Title"
    }
  }
}
</script>

