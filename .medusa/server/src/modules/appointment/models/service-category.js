"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategory = void 0;
const utils_1 = require("@medusajs/framework/utils");
const service_1 = require("./service");
exports.ServiceCategory = utils_1.model.define("service_category", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
    handle: utils_1.model.text().unique(),
    description: utils_1.model.text().nullable(),
    services: utils_1.model.hasMany(() => service_1.Service, {
        mappedBy: "category",
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1jYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FwcG9pbnRtZW50L21vZGVscy9zZXJ2aWNlLWNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFpRDtBQUNqRCx1Q0FBbUM7QUFFdEIsUUFBQSxlQUFlLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtJQUM5RCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNsQixNQUFNLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtJQUM3QixXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNwQyxRQUFRLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFO1FBQ3JDLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7Q0FDSCxDQUFDLENBQUEifQ==