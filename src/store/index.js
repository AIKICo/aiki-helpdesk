import Vue from "vue";
import Vuex from "vuex";
import isMobile from "mobile-device-detect";
import WorkOrder from "./modules/WorkOrder";
import Menu from "./modules/Menu";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeName:"indigo",
    IsMobile: isMobile.isMobileOnly,
    accessToken: localStorage.getItem("access_token") || "",
    currentUser: {},
    cartablContextMenu: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    WorkOrderService: WorkOrder,
    MenuService: Menu
  },
  getters: {}
});
