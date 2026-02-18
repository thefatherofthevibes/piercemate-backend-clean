import { Modules } from "@medusajs/framework/utils"

export const POST = async (req: any, res: any) => {
  try {
    const userModuleService = req.scope.resolve(Modules.USER)
    
    const existingUsers = await userModuleService.listUsers({
      email: "admin@piercemate.com"
    })

    if (existingUsers.length > 0) {
      return res.json({ 
        success: true, 
        message: "Admin user already exists",
        user: { email: existingUsers[0].email, id: existingUsers[0].id }
      })
    }

    const admin = await userModuleService.createUsers({
      email: "admin@piercemate.com",
      first_name: "Admin",
      last_name: "Piercemate",
    })

    res.json({ 
      success: true, 
      message: "Admin user created successfully",
      user: { email: admin.email, id: admin.id }
    })
  } catch (error) {
    console.error("Error creating admin:", error)
    res.status(500).json({ 
      success: false,
      error: error instanceof Error ? error.message : String(error) 
    })
  }
}

export const AUTHENTICATE = false
