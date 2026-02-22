"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const appointment_1 = require("./models/appointment");
const service_1 = require("./models/service");
const service_category_1 = require("./models/service-category");
class AppointmentService extends (0, utils_1.MedusaService)({
    Appointment: appointment_1.Appointment,
    Service: service_1.Service,
    ServiceCategory: service_category_1.ServiceCategory,
}) {
}
exports.default = AppointmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FwcG9pbnRtZW50L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBeUQ7QUFDekQsc0RBQWtEO0FBQ2xELDhDQUEwQztBQUMxQyxnRUFBMkQ7QUFFM0QsTUFBTSxrQkFBbUIsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDN0MsV0FBVyxFQUFYLHlCQUFXO0lBQ1gsT0FBTyxFQUFQLGlCQUFPO0lBQ1AsZUFBZSxFQUFmLGtDQUFlO0NBQ2hCLENBQUM7Q0FBRztBQUVMLGtCQUFlLGtCQUFrQixDQUFBIn0=