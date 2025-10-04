# Deployment Guide to Vercel

## Quick Deployment Steps

### 1. Push to GitHub

```bash
cd /Users/jagadeeshpotupureddy/Downloads/vscode/evanriosprojects/24-carSevenClone

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - 24Seven Car Rental Clone with WhatsApp integration"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/24seven-car-rental.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables (see below)
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
```

### 3. Configure Environment Variables in Vercel

Go to your project settings in Vercel Dashboard:
1. Click on your project
2. Go to "Settings" > "Environment Variables"
3. Add the following variables:

#### For WhatsApp Business API (Meta):
- **Name:** `WHATSAPP_API_URL`
  - **Value:** `https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages`
  
- **Name:** `WHATSAPP_ACCESS_TOKEN`
  - **Value:** Your permanent access token from Meta

#### For Twilio WhatsApp:
- **Name:** `TWILIO_ACCOUNT_SID`
  - **Value:** Your Twilio Account SID
  
- **Name:** `TWILIO_AUTH_TOKEN`
  - **Value:** Your Twilio Auth Token
  
- **Name:** `TWILIO_WHATSAPP_NUMBER`
  - **Value:** `whatsapp:+14155238886` (or your Twilio number)

#### Optional:
- **Name:** `NEXT_PUBLIC_SITE_URL`
  - **Value:** Your deployed URL (e.g., `https://your-site.vercel.app`)

### 4. Redeploy (if needed)

After adding environment variables, trigger a new deployment:
- Go to "Deployments" tab
- Click "Redeploy" on the latest deployment

---

## Testing Your Deployment

1. Visit your deployed URL: `https://your-project.vercel.app`
2. Navigate to the booking page: `/booking`
3. Fill in the form with:
   - Your name
   - Your email
   - Your WhatsApp phone number (in E.164 format: +1234567890)
   - Select a car
   - Choose pickup/return dates
4. Submit the booking
5. Check your WhatsApp for the confirmation message!

---

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel
2. Click "Settings" > "Domains"
3. Add your domain
4. Update your DNS records as instructed
5. Wait for DNS propagation (can take up to 48 hours)

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

### WhatsApp Not Working
- Verify environment variables are set correctly
- Check function logs in Vercel dashboard
- Test phone number format (must be E.164)
- For Meta: Ensure phone number is added as test number
- For Twilio: Ensure recipient has joined sandbox

### 404 Errors
- Clear Vercel cache and redeploy
- Check that all pages are in the correct directories
- Verify routes in browser console

---

## Monitoring

Vercel provides:
- Real-time logs
- Performance analytics
- Error tracking

Access these in your project dashboard.

---

## Production Checklist

Before going live:

- [ ] WhatsApp API configured and tested
- [ ] All environment variables set in Vercel
- [ ] Custom domain configured (if using)
- [ ] Test booking flow end-to-end
- [ ] Check mobile responsiveness
- [ ] Review security (rate limiting, validation)
- [ ] Set up monitoring/alerts
- [ ] Update contact information
- [ ] Test on different devices/browsers

---

## Scaling Considerations

For high traffic:
- Vercel auto-scales
- Consider upgrading Vercel plan if needed
- Monitor WhatsApp API usage and costs
- Consider adding rate limiting
- Set up CDN for static assets

---

## Support

- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- WhatsApp Setup: See `WHATSAPP_SETUP.md`

---

## Your Deployed Site

Once deployed, your site will be live at:
- **Production:** `https://your-project.vercel.app`
- **Preview:** Automatic preview for each PR
- **Development:** `http://localhost:3000`

Share your booking link and start receiving bookings with automatic WhatsApp confirmations! 🚗✨
