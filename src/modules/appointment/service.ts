import { MedusaService } from "@medusajs/framework/utils"
import { Appointment } from "./models/appointment"
import { Service } from "./models/service"
import { ServiceCategory } from "./models/service-category"

class AppointmentService extends MedusaService({
  Appointment,
  Service,
  ServiceCategory,
}) {}

export default AppointmentService
