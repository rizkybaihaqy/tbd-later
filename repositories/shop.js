import { Deta } from "@/lib/deta/index.js";

export const Shop = Deta({
  name: "shops",
  property: {
    key: "",
    name: "",
    password: "",
    logo: "",
  },
});
