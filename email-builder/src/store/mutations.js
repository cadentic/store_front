// https://vuex.vuejs.org/en/mutations.html

export default {
  SET_SECTIONS(state, data) {
    state.sections = data;
  },
  SET_COLORS(state, data) {
    state.colors = data;
  }
}
