# Environment Variables Setup

## Quick Copy-Paste List

Go to your NEW Railway service → **Variables** tab → Click **"New Variable"**

### 1. Database (Reference)
**Variable**: `DATABASE_URL`
**Type**: Click "Add Reference" → Select your **Postgres** service → Choose `DATABASE_URL`

### 2. Redis (Reference)
**Variable**: `REDIS_URL`
**Type**: Click "Add Reference" → Select your **Redis-XBCU** service → Choose `REDIS_URL`

### 3. Secrets (Raw Variables)
Add these as **"New Variable"** (type them in):

```
JWT_SECRET=supersecret-change-this-in-production
COOKIE_SECRET=supersecret-change-this-in-production
NODE_ENV=production
MEDUSA_ADMIN_EMAIL=admin@piercemate.com
MEDUSA_ADMIN_PASSWORD=Klaviatura2025
```

### 4. Backend URL
**FIRST**: Generate a domain
- Go to **Settings** tab → **Networking** section
- Click **"Generate Domain"**
- Copy the URL (e.g., `https://piercemate-backend-clean-production.up.railway.app`)

**THEN**: Add variable
- Back to **Variables** tab
- Add: `MEDUSA_BACKEND_URL=<paste your Railway URL here>`

---

## Complete List (for reference)

```bash
DATABASE_URL=${{Postgres.DATABASE_URL}}         # Reference
REDIS_URL=${{Redis-XBCU.REDIS_URL}}            # Reference
JWT_SECRET=supersecret-change-this              # Raw
COOKIE_SECRET=supersecret-change-this           # Raw
NODE_ENV=production                             # Raw
MEDUSA_ADMIN_EMAIL=admin@piercemate.com        # Raw
MEDUSA_ADMIN_PASSWORD=Klaviatura2025           # Raw
MEDUSA_BACKEND_URL=https://your-url.railway.app # Raw (add after generating domain)
```

---

After adding all variables, Railway will **auto-redeploy**. Watch the logs!
