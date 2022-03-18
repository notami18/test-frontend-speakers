<template>
    <section class="container">
        <div class="cards">
            <form class="form-control">
                <h2>Register</h2>
                <label for="name">Name</label>
                <input
                    class="demo-text"
                    placeholder="User"
                    required
                    name="register[name]"
                    type="text"
                />

                <label class="custom-mt" for="username">UserName</label>
                <input
                    class="demo-text"
                    placeholder="UserName"
                    required
                    name="register[username]"
                    type="text"
                />

                <label class="custom-mt" for="email">Email</label>
                <input
                    class="demo-text"
                    placeholder="Mail"
                    required
                    name="register[email]"
                    type="email"
                />

                <label class="custom-mt" for="password">Password</label>
                <input
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
    name: "register"
}
</script>

<style lang="scss" scoped>
@import "../assets/style/form.scss";
</style>