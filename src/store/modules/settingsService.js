const settingsService = {
  namespaced: true,
  state: {
    controlPanelItems: [
      {
        name: "GeneralSettings",
        label:"تنظیمات عمومی",
        path: "/SettingsControlPanel",
        icon: "",
        items: [
          { name: "Operating Hours",label:"ساعات کاری", path: "/OperationHoursList", image: "OperationHours.png" },
          { name: "SLA Policies",label:"قرارداد سطح سرویس", path: "/SLASettings", image: "SLA.png" },
          { name: "Members",label:"کاربران", path: "/Members", image: "UsersManagement.png" },
          { name: "company",label:"مشتریان", path: "/CustomerList", image: "settings-customer.png" },
          { name: "Groups",label:"گروه ها", path: "/Groups", image: "Groups.png" }
        ]
      },
      {
        name: "TicketSettings",
        label:"تنظیمات درخواست کار",
        path: "/SettingsControlPanel",
        icon: "",
        items: [
          { name: "Ticket Status",label:"وضعیت های درخواست", path: "/AppConstants/473b359f-30a7-4963-a671-6f618b277e48", image: "" },
          { name: "Tags",label:"برچسب ها", path: "/AppConstants/e215f24f-4d28-46e7-b75d-26a19feb656a", image: "" },
          { name: "Category",label:"دسته بندی", path: "/AppConstants/0a8b50c5-762e-47ea-b60d-4ed9d0a71f50", image: "" },
          { name: "OperandType",label:"اقدام صورت گرفته", path: "/AppConstants/416e2a28-cfc4-49f9-9bf1-6ef0451a5b7a", image: "" },
          { name: "OrganizeChartAttribute",label:"اطلاعات تکمیلی کاربران", path: "/AppConstants/416e2a28-cfc4-49f9-9bf1-6ef0451a5b7b", image: "" },
          { name: "OrganizeChart",label:"چارت سازمانی", path: "/OrganizeCharts/" + localStorage.getItem('companyid'), image: "" },
        ]
      },
      {
        name: "AssetSettings",
        label:"تنظیمات اموال",
        path: "/SettingsControlPanel",
        icon: "",
        items: [
          { name: "AssetsTypes",label:"معرفی انواع اموال", path: "/AppConstants/416e2a28-cfc4-49f9-9bf1-6ef0451a5b7e", image: "" },
          { name: "AssetsLocation",label:"موقعیتهای اموال", path: "/AppConstants/416e2a28-cfc4-49f9-9bf1-6ef0451a5b7f", image: "" },
          { name: "AssetsAdditionalInfo",label:"اطلاعات تکمیلی اموال", path: "/AppConstants/416e2a28-cfc4-49f9-9bf1-6ef0451a5b7D", image: "" },
        ]
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
};
export default settingsService;
