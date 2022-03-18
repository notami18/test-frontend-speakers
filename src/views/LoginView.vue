<template>
    <section class="container">
        <div class="cards">
            <form class="form-control">
                <h2>Login</h2>
                <label for="username">User Name</label>
                <input placeholder="User" required name="login[username]" type="text" />

                <label class="custom-mt" for="password">Password</label>
                <input
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
export default {
    name: 'Login',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
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