"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    try {
        const userModuleService = req.scope.resolve(utils_1.Modules.USER);
        const existingUsers = await userModuleService.listUsers({
            email: "admin@piercemate.com"
        });
        if (existingUsers.length > 0) {
            return res.json({
                success: true,
                message: "Admin user already exists",
                user: { email: existingUsers[0].email, id: existingUsers[0].id }
            });
        }
        const admin = await userModuleService.createUsers({
            email: "admin@piercemate.com",
            first_name: "Admin",
            last_name: "Piercemate",
        });
        res.json({
            success: true,
            message: "Admin user created successfully",
            user: { email: admin.email, id: admin.id }
        });
    }
    catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3NldHVwLWFkbWluL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFtRDtBQUU1QyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxFQUFFO0lBQy9DLElBQUksQ0FBQztRQUNILE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXpELE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQ3RELEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDZCxPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsMkJBQTJCO2dCQUNwQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTthQUNqRSxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7WUFDaEQsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixVQUFVLEVBQUUsT0FBTztZQUNuQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUE7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1AsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsaUNBQWlDO1lBQzFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1NBQzNDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRSxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzlELENBQUMsQ0FBQTtJQUNKLENBQUM7QUFDSCxDQUFDLENBQUE7QUFsQ1ksUUFBQSxJQUFJLFFBa0NoQiJ9