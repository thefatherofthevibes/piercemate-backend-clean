"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const body = req.body;
    const store_name = body.store_name;
    if (!store_name) {
        return res.status(400).json({ message: "Store name is required" });
    }
    try {
        const salesChannelService = req.scope.resolve(utils_1.Modules.SALES_CHANNEL);
        const apiKeyService = req.scope.resolve(utils_1.Modules.API_KEY);
        const remoteLink = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
        const salesChannel = await salesChannelService.createSalesChannels({
            name: store_name,
            description: "Automated channel for " + store_name,
        });
        const apiKey = await apiKeyService.createApiKeys({
            title: store_name + " Client Key",
            type: "publishable",
            created_by: "system_automator",
        });
        await remoteLink.create({
            [utils_1.Modules.API_KEY]: {
                publishable_key_id: apiKey.id,
            },
            [utils_1.Modules.SALES_CHANNEL]: {
                sales_channel_id: salesChannel.id,
            },
        });
        res.json({
            message: "Partner registered successfully",
            data: {
                sales_channel_id: salesChannel.id,
                sales_channel_name: salesChannel.name,
                publishable_api_key: apiKey.token,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed" });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BhcnRuZXItcmVnaXN0ZXIvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQThFO0FBRXZFLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEVBQUU7SUFDL0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQVcsQ0FBQTtJQUM1QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBRWxDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDcEUsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRTNFLE1BQU0sWUFBWSxHQUFHLE1BQU0sbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7WUFDakUsSUFBSSxFQUFFLFVBQVU7WUFDaEIsV0FBVyxFQUFFLHdCQUF3QixHQUFHLFVBQVU7U0FDbkQsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsYUFBYSxDQUFDO1lBQy9DLEtBQUssRUFBRSxVQUFVLEdBQUcsYUFBYTtZQUNqQyxJQUFJLEVBQUUsYUFBYTtZQUNuQixVQUFVLEVBQUUsa0JBQWtCO1NBQy9CLENBQUMsQ0FBQTtRQUVGLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUN0QixDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakIsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDOUI7WUFDRCxDQUFDLGVBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkIsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLEVBQUU7YUFDbEM7U0FDRixDQUFDLENBQUE7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ1AsT0FBTyxFQUFFLGlDQUFpQztZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsS0FBSzthQUNsQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQztBQUNILENBQUMsQ0FBQTtBQTlDWSxRQUFBLElBQUksUUE4Q2hCIn0=