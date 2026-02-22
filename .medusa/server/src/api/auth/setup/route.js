"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = exports.POST = void 0;
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
exports.AUTHENTICATE = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2F1dGgvc2V0dXAvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW1EO0FBRTVDLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUU7SUFDL0MsSUFBSSxDQUFDO1FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFekQsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDdEQsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUE7UUFFRixJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2FBQ2pFLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztZQUNoRCxLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLFVBQVUsRUFBRSxPQUFPO1lBQ25CLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDUCxPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7U0FDM0MsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDOUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztBQUNILENBQUMsQ0FBQTtBQWxDWSxRQUFBLElBQUksUUFrQ2hCO0FBRVksUUFBQSxZQUFZLEdBQUcsS0FBSyxDQUFBIn0=