class Store {
  state = {
    sections: []
  }

  mutations = {
    SET_SECTIONS(state, data) {
      state.sections = data;
    }
  }

  commit(mutationName, data) {
    console.log("Commit: "+mutationName+" -> "+JSON.stringify(data));
    this.mutations[mutationName](data);
    console.log("Commit Ended for: "+mutationName);
  }
};

export default new Store();
