"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_category_1 = require("./service-category");
exports.Service = utils_1.model.define("service", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
    duration: utils_1.model.number(),
    price: utils_1.model.number().nullable(),
    type: utils_1.model.text().default("piercing"),
    category: utils_1.model.belongsTo(() => service_category_1.ServiceCategory, {
        mappedBy: "services",
        nullable: true
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FwcG9pbnRtZW50L21vZGVscy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFpRDtBQUNqRCx5REFBb0Q7QUFFdkMsUUFBQSxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7SUFDN0MsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbEIsUUFBUSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDeEIsS0FBSyxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDaEMsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3RDLFFBQVEsRUFBRSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGtDQUFlLEVBQUU7UUFDL0MsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0NBQ0gsQ0FBQyxDQUFBIn0=