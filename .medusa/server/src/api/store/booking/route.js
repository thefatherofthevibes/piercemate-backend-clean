"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const GET = async (req, res) => {
    try {
        console.log("[BOOKING] GET request received");
        const appointmentModuleService = req.scope.resolve("appointment");
        console.log("[BOOKING] Appointment service resolved");
        const filters = req.query || {};
        const [appointments, count] = await appointmentModuleService.listAndCountAppointments(filters, { order: { created_at: "DESC" } });
        res.json({
            carts: appointments,
            count,
        });
    }
    catch (error) {
        console.error("[BOOKING] Error:", error);
        res.status(500).json({ error: error.message });
    }
};
exports.GET = GET;
const POST = async (req, res) => {
    const appointmentModuleService = req.scope.resolve("appointment");
    const data = req.body;
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
        };
        const appointment = await appointmentModuleService.createAppointments(appointmentData);
        res.json({
            appointment,
            cart_id: appointment.id,
        });
    }
    catch (error) {
        console.error("Booking error:", error);
        res.status(500).json({
            message: "Failed to create booking",
            error: error instanceof Error ? error.message : String(error)
        });
    }
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const appointmentModuleService = req.scope.resolve("appointment");
    const { id } = req.body;
    try {
        await appointmentModuleService.deleteAppointments(id);
        res.json({ success: true });
    }
    catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({
            message: "Failed to delete booking",
            error: error instanceof Error ? error.message : String(error)
        });
    }
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2Jvb2tpbmcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtJQUM5QyxJQUFJLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDN0MsTUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7UUFFckQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUE7UUFDL0IsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLHdCQUF3QixDQUFDLHdCQUF3QixDQUNuRixPQUFPLEVBQ1AsRUFBRSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDbEMsQ0FBQTtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDUCxLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLO1NBQ04sQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2hELENBQUM7QUFDSCxDQUFDLENBQUE7QUFwQlksUUFBQSxHQUFHLE9Bb0JmO0FBRU0sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUs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