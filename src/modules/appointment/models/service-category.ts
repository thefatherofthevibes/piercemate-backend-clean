import { model } from "@medusajs/framework/utils"
import { Service } from "./service"

export const ServiceCategory = model.define("service_category", {
  id: model.id().primaryKey(),
  name: model.text(),
  handle: model.text().unique(),
  description: model.text().nullable(),
  services: model.hasMany(() => Service, {
    mappedBy: "category",
  }),
})
