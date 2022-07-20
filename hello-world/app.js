// vm stands for view model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "Angel",
            lastName: "Cervera",
            age: 20,
            isPurple: false,
            selectedColor: ""
        };
    },
    methods: {
        increment() {
            this.age++
        },

        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },

        changeColor() { this.isPurple = !this.isPurple }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },

        colorClasses() {
            return {
                purple: this.isPurple
            }
        }
    }
}).mount("#app")

setTimeout(() => {
    vm.firstName = "Pilar"
}, 2000)


