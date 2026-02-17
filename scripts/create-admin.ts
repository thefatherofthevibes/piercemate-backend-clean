import { Modules } from "@medusajs/framework/utils"
import { MedusaApp } from "@medusajs/framework"

async function createAdminUser() {
  const { runApp } = await MedusaApp({
    name: "medusa",
    loader: "full",
  })

  const app = await runApp()

  try {
    const userModuleService = app.modules[Modules.USER]

    const existingUsers = await userModuleService.listUsers({
      email: "admin@piercemate.com"
    })

    if (existingUsers.length > 0) {
      console.log("✅ Admin user already exists!")
      process.exit(0)
    }

    const admin = await userModuleService.createUsers({
      email: "admin@piercemate.com",
      first_name: "Admin",
      last_name: "Piercemate",
    })

    console.log("✅ Admin user created!")
    console.log("Email:", admin.email)
    console.log("ID:", admin.id)

  } catch (error) {
    console.error("❌ Error:", error)
    process.exit(1)
  }

  process.exit(0)
}

createAdminUser()
