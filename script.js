const RootComponent = {
    data() {
        return {
            name: "",
            nameValidity: "",
            surname: "",
            surnameValidity: "",
            birth: "",
            tel: "",
            telValidity: "",
            email: "",
            emailValidaty: "",
            pseudo: "",
            password: "",
            customerDate: "",
        }
    },
    computed: {
        pseudoValidity() {
            return this.pseudo.length >= 8 && this.pseudo.length <= 16;
        },
        passwordValidity() {
            return this.password.length >= 8;
        },
        birthValidity() {
            const currentDate = new Date();
            let customerDate = new Date(this.birth);
            customerDate = new Date(customerDate.getFullYear() + 18, customerDate.getMonth(), customerDate.getDay())
            return currentDate >= customerDate;
        }
    }
};

Vue.createApp(RootComponent).mount("#root");