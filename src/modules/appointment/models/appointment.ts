import { model } from "@medusajs/framework/utils"

export const Appointment = model.define("appointment", {
  id: model.id().primaryKey(),
  start_time: model.dateTime(),
  customer_id: model.text(),
  service_product_id: model.text(),
  jewelry_variant_id: model.text().nullable(),
  piercer_id: model.text().nullable(),
  sales_channel_id: model.text().index(),
  status: model.enum([
    "pending",
    "confirmed",
    "completed",
    "canceled"
  ]).default("pending"),
  metadata: model.json().nullable(),
})
