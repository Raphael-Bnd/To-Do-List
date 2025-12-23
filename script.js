Vue.createApp({
  data() {
    return {
      newItemText: '',
      newPriorityItem: false,
      list: [],
    };
  },
  methods: {
    saveNewItem() {
      let newItem = {
        text: this.newItemText,
        important: this.newPriorityItem,
        done: false,
      };
      this.list.push(newItem);
      this.newItemText = '';
      this.newPriorityItem = false;
    },
  },
}).mount('#app');
