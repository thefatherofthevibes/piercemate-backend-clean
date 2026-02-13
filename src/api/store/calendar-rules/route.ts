import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa/http"
import { Modules } from "@medusajs/utils"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const tenantId = req.query.tenant_id as string
  
  if (!tenantId) {
    return res.json({ shifts: [] })
  }

  try {
    const salesChannelService = req.scope.resolve(Modules.SALES_CHANNEL)
    const channels = await salesChannelService.listSalesChannels({}, { take: 100 })

    const channel = channels.find(sc => 
      (sc.metadata && sc.metadata.subdomain === tenantId) || 
      sc.name.toLowerCase().replace(/\s+/g, '') === tenantId.toLowerCase()
    )

    if (!channel) {
      return res.json({ shifts: [] })
    }

    let shifts = []
    
    if (channel.metadata?.calendarRules) {
      try {
        const rawRules = channel.metadata.calendarRules
        shifts = typeof rawRules === 'string' ? JSON.parse(rawRules) : rawRules
      } catch (e) {
        shifts = []
      }
    }

    return res.json({ shifts })

  } catch (error) {
    console.error("Calendar rules error:", error)
    return res.status(500).json({ 
      message: "Internal Server Error", 
      error: error instanceof Error ? error.message : String(error) 
    })
  }
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const tenantId = req.query.tenant_id as string
  const body = req.body as any
  const shifts = body.shifts

  if (!tenantId) {
    return res.status(400).json({ message: "Missing tenant_id" })
  }

  try {
    const salesChannelService = req.scope.resolve(Modules.SALES_CHANNEL)
    const channels = await salesChannelService.listSalesChannels({}, { take: 100 })

    const channel = channels.find(sc => 
      (sc.metadata && sc.metadata.subdomain === tenantId) || 
      sc.name.toLowerCase().replace(/\s+/g, '') === tenantId.toLowerCase()
    )

    if (!channel) {
      return res.status(404).json({ message: "Tenant not found" })
    }

    await salesChannelService.updateSalesChannels(channel.id, {
      metadata: {
        ...channel.metadata,
        calendarRules: shifts
      }
    })

    return res.json({ success: true, shifts })

  } catch (error) {
    console.error("Calendar rules update error:", error)
    return res.status(500).json({ 
      message: "Internal Server Error", 
      error: error instanceof Error ? error.message : String(error) 
    })
  }
}
