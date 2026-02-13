const { loadEnv, defineConfig } = require('@medusajs/framework/utils')

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: "http://localhost:8000,https://piercemate.hu,https://www.piercemate.hu",
      adminCors: "http://localhost:7000,https://backstage.piercemate.com",
      authCors: "http://localhost:7000,https://backstage.piercemate.com",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: true,
  },
})
