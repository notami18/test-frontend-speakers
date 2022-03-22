import axios from "@/config/api";

export default async(id) => {
    return axios
        .get(`/todos?userId=${id}`)
        .then((response) => {
            debugger
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