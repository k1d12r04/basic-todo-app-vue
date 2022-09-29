const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredGoal: "",
      tasksIsVisible: true,
      toggleBtnText: "Hide",
    };
  },
  methods: {
    addGoal() {
      this.tasks.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    toggleVisible() {
      this.tasksIsVisible = !this.tasksIsVisible;
      this.toggleBtnText = this.tasksIsVisible ? "Hide" : "Show";
    },
    removeGoal(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#assignment");
