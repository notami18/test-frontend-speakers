import * as actionTypes from "../../action-types";
import * as mutationTypes from "../../mutation-types";

export default {
    async [actionTypes.LOG_IN]({ commit }, user) {
        var _user = JSON.parse(localStorage.getItem("user_register"));

        const data = _user.filter(
            (x) => x.username === user.username && x.password === user.password
        )[0];

        if (data) {
            commit(mutationTypes.LOG_IN_MUTATION, data);
        } else {
            commit(mutationTypes.LOG_IN_MUTATION_FAILED, data);
        }
    },
};