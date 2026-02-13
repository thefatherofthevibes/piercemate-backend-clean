import AppointmentService from "./service"
import { Module } from "@medusajs/framework/utils"

export const APPOINTMENT_MODULE = "appointment"

export default Module(APPOINTMENT_MODULE, {
  service: AppointmentService,
})
