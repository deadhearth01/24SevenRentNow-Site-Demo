# 🔐 Security Notice

## Important: Environment Variables

This project uses sensitive credentials for WATI WhatsApp API integration. **Never commit these to version control!**

### Protected Files

The following files contain sensitive information and are **excluded from git**:

- `.env.local` - Contains actual API credentials (gitignored)
- `.env` - Any environment files with real credentials (gitignored)

### What's Safe to Commit

✅ `.env.example` - Template with placeholder values  
✅ Documentation files - Now sanitized (no real credentials)  
✅ Source code - Uses environment variables, not hardcoded values  

### Credentials Sanitized

All documentation files have been cleaned of:
- ❌ Real WATI Auth Tokens (JWT)
- ❌ Tenant IDs
- ❌ Channel Numbers
- ❌ Test phone numbers
- ❌ Email addresses

### For Deployment

When deploying to production (Vercel, etc.), add environment variables through the hosting dashboard:

```
WATI_API_URL=https://live-mt-server.wati.io/YOUR_TENANT_ID/api/v1/sendTemplateMessage
WATI_AUTH_TOKEN=your_actual_wati_auth_token
WATI_CHANNEL_NUMBER=your_channel_number
WATI_TEMPLATE_NAME=before_booking
NEXT_PUBLIC_BUSINESS_PHONE=+1234567890
```

### .gitignore Configuration

The `.gitignore` file properly excludes:

```gitignore
# Local env files
.env*.local
.env
```

### If Credentials Were Exposed

If you accidentally committed credentials:

1. **Rotate the credentials immediately** in WATI dashboard
2. Generate new API tokens
3. Update `.env.local` with new credentials
4. **DO NOT** push the fix - the old credentials are in git history
5. Consider using tools like `git-filter-repo` to clean history
6. Or create a new repository from current state

### Best Practices

✅ Always use `.env.local` for local development  
✅ Use hosting dashboard for production environment variables  
✅ Never commit `.env` files  
✅ Keep `.gitignore` up to date  
✅ Use placeholder values in documentation  
✅ Rotate credentials if exposed  

### Verification

Before pushing to GitHub, always verify:

```bash
# Check what's being committed
git status

# Ensure .env.local is not tracked
git ls-files | grep env.local
# Should return nothing

# Check for sensitive data in staged files
git diff --cached
```

## ✅ Current Status

This repository has been sanitized:
- All real credentials removed from documentation
- .env.local properly gitignored
- .env.example contains only placeholders
- All commits after this point are safe to push publicly

---

**Last Security Audit**: October 5, 2025  
**Status**: ✅ Clean - Safe for public repository
