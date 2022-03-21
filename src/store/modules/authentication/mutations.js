import * as mutationTypes from "../../mutation-types";

export default {
    [mutationTypes.LOG_IN_MUTATION](state, _data) {
        let { data, authenticated } = state;
        data = _data;
        authenticated = true;

        state.authenticated = authenticated;
        state.data = data;

        localStorage.email = _data.email;
        localStorage.userName = _data.username;
    },

    [mutationTypes.LOG_IN_MUTATION_FAILED](state, _data) {
        let { message } = state;
        message = _data;
        authenticated = null;

        state.authenticated = authenticated;
        state.message = message;

        localStorage.removeItem("email");
        localStorage.removeItem("userName");
    },
};