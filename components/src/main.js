import {createApp} from 'vue'
import App from './App.vue'
// import Greeting from "@/components/Greeting";

const vm = createApp(App)

// Add Greeting as a global component. This is not good for optimization.
// vm.component("Greeting", Greeting)

vm.mount('#app')
