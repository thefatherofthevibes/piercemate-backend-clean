import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils"

export const POST = async (req: any, res: any) => {
  const body = req.body as any
  const store_name = body.store_name

  if (!store_name) {
    return res.status(400).json({ message: "Store name is required" })
  }

  try {
    const salesChannelService = req.scope.resolve(Modules.SALES_CHANNEL)
    const apiKeyService = req.scope.resolve(Modules.API_KEY)
    const remoteLink = req.scope.resolve(ContainerRegistrationKeys.REMOTE_LINK)

    const salesChannel = await salesChannelService.createSalesChannels({
      name: store_name,
      description: "Automated channel for " + store_name,
    })

    const apiKey = await apiKeyService.createApiKeys({
      title: store_name + " Client Key",
      type: "publishable",
      created_by: "system_automator",
    })

    await remoteLink.create({
      [Modules.API_KEY]: {
        publishable_key_id: apiKey.id,
      },
      [Modules.SALES_CHANNEL]: {
        sales_channel_id: salesChannel.id,
      },
    })

    res.json({
      message: "Partner registered successfully",
      data: {
        sales_channel_id: salesChannel.id,
        sales_channel_name: salesChannel.name,
        publishable_api_key: apiKey.token,
      },
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Registration failed" })
  }
}
