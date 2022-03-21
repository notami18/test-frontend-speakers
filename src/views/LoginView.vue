<template>
    <section class="container">
        <div class="cards">
            <form @submit.prevent="loginUser(user)" class="form-control">
                <h2>Login</h2>
                <label for="username">User Name</label>
                <input
                    v-model="user.username"
                    placeholder="User"
                    required
                    name="login[username]"
                    type="text"
                />

                <label class="custom-mt" for="password">Password</label>
                <input
                    v-model="user.password"
                    class="password"
                    placeholder="Password"
                    required
                    name="login[password]"
                    type="password"
                />
                <div class="input-groups">
                    <div class="input-group">
                        <input type="submit" value="Login" />
                        &nbsp;
                        &nbsp;
                        <button
                            @click="register()"
                        >Register</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
// import * as routeTypes from "../../enum/route-types";
import * as actionTypes from "../store/action-types";
export default {
    name: 'Login',
    data() {
        return {
            user: {
                username: null,
                password: null
            }
        }
    },
    created() {
        if (!localStorage.user_register) {
            localStorage.user_register = []
        }

    },
    mounted() {

    },
    computed: {
        ...mapState([
            "authentication"
        ])
    },
    methods: {
        ...mapActions({
            login: actionTypes.LOG_IN
        }),

        async loginUser(user) {
            if (localStorage.user_register) {
                await this.login(user);
                if (this.authentication.authenticated) {
                    this.$router.push({
                        path: '/'
                    })
                }
            } else {
                alert("No hemos encontrado su registro \n Por favor registrese")
            }
        },

        register() {
            this.$router.push({
                path: '/register'
            })
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/form.scss";
</style>