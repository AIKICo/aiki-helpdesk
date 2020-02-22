import Axios from "axios";

const Login = {
  state: {},
  mutations: {},
  actions: {
    async login(context, payload) {
      var response = await Axios.post("users/authenticate", {
        username: payload.userName,
        password: payload.passwd
      });
      return response;
    }
  },
  getters: {}
};

export default Login;
