Vue.createApp({
  data() {
    // Dados reativos do aplicativo
    return {
      newItemText: '',
      newPriorityItem: false,
      list: [],
    };
  },
  // Método para salvar um novo item na lista
  methods: {
    saveNewItem() {
      if (this.newItemText.length) {
        let newItem = {
          id: new Date().getTime(),
          text: this.newItemText,
          important: this.newPriorityItem,
          done: false,
        };
        this.list.push(newItem);
        this.newItemText = '';
        this.newPriorityItem = false;
      }
    },
  },
}).mount('#app');
