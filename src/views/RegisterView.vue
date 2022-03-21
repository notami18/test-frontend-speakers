<template>
    <section class="container">
        <div class="cards">
            <form @submit.prevent="save(userRegister)" class="form-control">
                <h2>Register</h2>
                <label for="name">Name</label>
                <input
                    v-model="userRegister.name"
                    class="demo-text"
                    placeholder="User"
                    required
                    name="register[name]"
                    type="text"
                />

                <label class="custom-mt" for="username">UserName</label>
                <input
                    v-model="userRegister.username"
                    class="demo-text"
                    placeholder="UserName"
                    required
                    name="register[username]"
                    type="text"
                />

                <label class="custom-mt" for="email">Email</label>
                <input
                    v-model="userRegister.email"
                    class="demo-text"
                    placeholder="Mail"
                    required
                    name="register[email]"
                    type="email"
                />

                <label class="custom-mt" for="password">Password</label>
                <input
                    v-model="userRegister.password"
                    class="password"
                    placeholder="Password"
                    required
                    name="register[password]"
                    type="password"
                />
                <div class="input-groups">
                    <div class="input-group">
                        <input type="submit" value="Save" />
                        &nbsp;
                        &nbsp;
                        <router-link to="/login">Back Login</router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            userRegister: {
                name: null,
                username: null,
                email: null,
                password: null
            },
            dataUser: []
        }
    },
    methods: {
        async save(register) {
            this.dataUser.push(register)

            const message = await this.createUserLocal(this.dataUser);
            alert(message)
            this.$router.push({
                path: '/login'
            })
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/form.scss";
</style>