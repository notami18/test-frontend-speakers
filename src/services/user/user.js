import axios from "@/config/api";

export default async() => {
    return axios
        .get("/users")
        .then((response) => {
            if (response) {
                return response;
            } else {
                return { data: { message: "Ha ocurrido un error" } };
            }
        })
        .catch((error) => {
            console.log(error);
        });
};