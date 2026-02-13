# Railway Can't See New Repository

## Quick Fix:

### Option 1: Grant Access from GitHub (Recommended)

1. Go to https://github.com/settings/installations
2. Find **"Railway"** in the list
3. Click **"Configure"**
4. Scroll down to **"Repository access"**
5. Either:
   - Select **"All repositories"** (easiest), OR
   - Select **"Only select repositories"** and add `piercemate-backend-clean`
6. Click **"Save"**
7. Go back to Railway and refresh

### Option 2: Grant Access from Railway

1. In Railway's "GitHub Repository" dialog (where you are now)
2. Click **"Configure GitHub App"** (the gear icon ⚙️ at the top)
3. This will take you to GitHub's authorization page
4. Grant access to `piercemate-backend-clean`
5. Come back to Railway and refresh

### Option 3: Use Railway CLI (Alternative)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to new project
cd C:\Users\soosg\piercemate-backend-clean
railway init

# Deploy
railway up
```

---

**After granting access, the repo should appear in the list!**
