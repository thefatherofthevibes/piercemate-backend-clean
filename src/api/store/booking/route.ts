export const GET = async (req: any, res: any) => {
  try {
    console.log("[BOOKING] GET request received")
    const appointmentModuleService = req.scope.resolve("appointment")
    console.log("[BOOKING] Appointment service resolved")
    
    const filters = req.query || {}
    const [appointments, count] = await appointmentModuleService.listAndCountAppointments(
      filters,
      { order: { created_at: "DESC" } }
    )

    res.json({
      carts: appointments,
      count,
    })
  } catch (error) {
    console.error("[BOOKING] Error:", error)
    res.status(500).json({ error: error.message })
  }
}

export const POST = async (req: any, res: any) => {
  const appointmentModuleService = req.scope.resolve("appointment")
  const data = req.body

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

export const DELETE = async (req: any, res: any) => {
  const appointmentModuleService = req.scope.resolve("appointment")
  const { id } = req.body

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
