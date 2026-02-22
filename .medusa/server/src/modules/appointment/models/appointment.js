"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Appointment = utils_1.model.define("appointment", {
    id: utils_1.model.id().primaryKey(),
    start_time: utils_1.model.dateTime(),
    customer_id: utils_1.model.text(),
    service_product_id: utils_1.model.text(),
    jewelry_variant_id: utils_1.model.text().nullable(),
    piercer_id: utils_1.model.text().nullable(),
    sales_channel_id: utils_1.model.text().index(),
    status: utils_1.model.enum([
        "pending",
        "confirmed",
        "completed",
        "canceled"
    ]).default("pending"),
    metadata: utils_1.model.json().nullable(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hcHBvaW50bWVudC9tb2RlbHMvYXBwb2ludG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBRXBDLFFBQUEsV0FBVyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO0lBQ3JELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLFVBQVUsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0lBQzVCLFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ3pCLGtCQUFrQixFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDaEMsa0JBQWtCLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUMzQyxVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxnQkFBZ0IsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQ3RDLE1BQU0sRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7S0FDWCxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNyQixRQUFRLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNsQyxDQUFDLENBQUEifQ==