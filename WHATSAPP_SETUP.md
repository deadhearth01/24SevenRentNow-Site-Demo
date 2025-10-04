# 24Seven Car Rental - WhatsApp Configuration Guide

## WhatsApp Integration Setup

You have two options for WhatsApp integration:

### Option 1: WhatsApp Business API (Meta) - RECOMMENDED for Production

#### Step 1: Create Meta Developer Account
1. Go to https://developers.facebook.com/
2. Click "Get Started" and create an account
3. Create a new app

#### Step 2: Set Up WhatsApp Business API
1. In your app dashboard, add "WhatsApp" product
2. Go to "WhatsApp" > "Getting Started"
3. Note your "Phone Number ID"
4. Generate a Permanent Access Token

#### Step 3: Configure Environment Variables
Add to your `.env.local`:
```env
WHATSAPP_API_URL=https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages
WHATSAPP_ACCESS_TOKEN=your_permanent_access_token
```

#### Step 4: Test Numbers (Development)
1. In WhatsApp dashboard, go to "API Setup"
2. Add test phone numbers
3. Test numbers will receive messages without verification

#### Step 5: Production (Requires Business Verification)
1. Complete Meta Business Verification
2. Get WhatsApp Business Account approved
3. You can then send to any WhatsApp number

---

### Option 2: Twilio WhatsApp API - EASIER for Testing

#### Step 1: Create Twilio Account
1. Sign up at https://www.twilio.com/try-twilio
2. Verify your email and phone number
3. Get your Account SID and Auth Token from dashboard

#### Step 2: Enable WhatsApp Sandbox
1. In Twilio Console, go to "Messaging" > "Try it out" > "Send a WhatsApp message"
2. Follow instructions to join the sandbox with your phone
3. Send "join [your-sandbox-name]" to the Twilio WhatsApp number

#### Step 3: Configure Environment Variables
Add to your `.env.local`:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

#### Step 4: Test
- Any phone number that has joined your sandbox can receive messages
- For production, you need to apply for Twilio WhatsApp approval

---

## Quick Start (Demo Mode)

If you don't configure any WhatsApp API, the app will run in **demo mode**:
- Bookings will be processed normally
- WhatsApp messages will be logged to the console
- Perfect for testing the UI and flow

---

## Phone Number Format

Always use E.164 format for phone numbers:
```
✅ +14155551234
✅ +442071234567
❌ (415) 555-1234
❌ 415-555-1234
```

---

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Environment variables to add in Vercel:
- `WHATSAPP_API_URL` (if using Meta)
- `WHATSAPP_ACCESS_TOKEN` (if using Meta)
- OR `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_NUMBER` (if using Twilio)

---

## Testing Your Integration

### Test Booking Flow:
1. Go to `/booking` page
2. Fill in all details
3. Use your phone number (that's registered for testing)
4. Submit the booking
5. Check your WhatsApp for confirmation message

### Message Format:
```
🚗 24Seven Car Rental - Booking Confirmation

Dear [Name],

Your car rental booking has been confirmed! Here are your booking details:

*Booking Details:*
📍 Pick-up Location: [Location]
📅 Pick-up Date: [Date & Time]
📍 Return Location: [Location]
📅 Return Date: [Date & Time]
🚙 Vehicle: [Car Type]
💰 Total Price: $[Amount]

*Important Information:*
✅ Please arrive 15 minutes before your scheduled pick-up time
✅ Bring a valid driver's license and credit card
✅ Full insurance coverage is required

For any questions or changes to your booking, please call us at:
📞 (833) 324-7368

Thank you for choosing 24Seven Rent A Car!
```

---

## Troubleshooting

### Meta WhatsApp Issues:
- **Error: Invalid phone number** → Ensure number is in E.164 format
- **Error: Recipient not registered** → Add number to test numbers in Meta dashboard
- **Error: Invalid token** → Generate new permanent access token

### Twilio Issues:
- **Error: Not authorized** → Check Account SID and Auth Token
- **Error: Recipient not joined sandbox** → Have recipient send "join [sandbox-name]" first
- **Error: Invalid phone format** → Use format: `whatsapp:+14155551234`

### General Issues:
- Check console logs for detailed error messages
- Verify environment variables are set correctly
- Test with demo mode first (no env vars)

---

## Cost Considerations

### Meta WhatsApp Business API:
- First 1,000 conversations/month: FREE
- After that: ~$0.005-0.10 per message (varies by country)
- Requires business verification (free)

### Twilio WhatsApp:
- Sandbox: FREE for testing
- Production: ~$0.005 per message
- Need approval for production use

---

## Security Best Practices

1. **Never commit `.env.local`** to git
2. Use Vercel environment variables for production
3. Validate phone numbers before sending
4. Rate limit booking submissions
5. Add CAPTCHA for production (optional)

---

## Support

- Meta WhatsApp: https://developers.facebook.com/docs/whatsapp
- Twilio WhatsApp: https://www.twilio.com/docs/whatsapp
- Next.js: https://nextjs.org/docs

---

Happy booking! 🚗✨
