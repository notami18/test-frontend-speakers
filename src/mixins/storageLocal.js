export default {
    methods: {
        createUserLocal(data) {
            localStorage.setItem("user_register", JSON.stringify(data));
            return "Registro Guardado exitosamente"
        },
    },
};