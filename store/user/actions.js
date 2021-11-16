export default {
    getUser(context) {
        return this.$axios.$get("users")
            .then((response) => {
                context.commit('STORE', response);
                console.log(response);
                return response;
            });
    }
}