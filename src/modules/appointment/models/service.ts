import { model } from "@medusajs/framework/utils"
import { ServiceCategory } from "./service-category"

export const Service = model.define("service", {
  id: model.id().primaryKey(),
  name: model.text(),
  duration: model.number(),
  price: model.number().nullable(),
  type: model.text().default("piercing"),
  category: model.belongsTo(() => ServiceCategory, {
    mappedBy: "services",
    nullable: true
  }),
})
