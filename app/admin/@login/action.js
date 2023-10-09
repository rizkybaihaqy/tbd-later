"use server";

import { Shop } from "@/repositories/shop.js";
import { cookies } from "next/headers.js";
import { redirect } from "next/navigation.js";

/**
 * @param {FormData} formData
 */
export async function login(_, formData) {
  const shop = await Shop.get("shop");

  if (formData.get("password") === shop.password) {
    cookies().set("auth", true);
    redirect("/admin");
  } else {
    return { message: "Wrong password" };
  }
}
