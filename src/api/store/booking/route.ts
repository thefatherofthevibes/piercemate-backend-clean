import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPOINTMENT_MODULE } from "../../../modules/appointment/index.js"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const appointmentModuleService = req.scope.resolve(APPOINTMENT_MODULE) as any
  const filters = req.query || {}
  
  const [appointments, count] = await appointmentModuleService.listAndCountAppointments(
    filters,
    { order: { created_at: "DESC" } }
  )

  res.json({
    carts: appointments,
    count,
  })
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const appointmentModuleService = req.scope.resolve(APPOINTMENT_MODULE) as any
  const data = req.body as any

  try {
    const appointmentData = {
      start_time: data.date && data.time 
        ? new Date(`${data.date}T${data.time}:00`)
        : new Date(),
      customer_id: data.customer_id || "guest",
      service_product_id: data.variant_id || "default",
      jewelry_variant_id: data.jewelry_variant_id || null,
      piercer_id: data.piercer_id || null,
      sales_channel_id: data.sales_channel_id || "default",
      status: "pending",
      metadata: {
        booking_date: data.date,
        booking_time: data.time,
        customer_name: data.customer_name,
        duration: data.duration || "30",
        piercing_type: data.metadata?.piercing_type || data.piercing_type,
        price: parseInt(data.metadata?.price || data.price || "0"),
        customer_phone: data.phone || data.metadata?.customer_phone,
        type: data.metadata?.type || "online_booking",
        email: data.email,
        cart_id: data.cart_id,
      }
    }

    const appointment = await appointmentModuleService.createAppointments(appointmentData)

    res.json({
      appointment,
      cart_id: appointment.id,
    })
  } catch (error) {
    console.error("Booking error:", error)
    res.status(500).json({ 
      message: "Failed to create booking",
      error: error instanceof Error ? error.message : String(error)
    })
  }
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const appointmentModuleService = req.scope.resolve(APPOINTMENT_MODULE) as any
  const { id } = req.body as any

  try {
    await appointmentModuleService.deleteAppointments(id)
    res.json({ success: true })
  } catch (error) {
    console.error("Delete error:", error)
    res.status(500).json({ 
      message: "Failed to delete booking",
      error: error instanceof Error ? error.message : String(error)
    })
  }
}
