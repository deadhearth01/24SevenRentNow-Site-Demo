# 24 Seven Car Rental - WhatsApp Integration Setup

## 🎯 Overview
This is a complete clone of the 24sevenrentnow.com car rental website with integrated WATI WhatsApp booking confirmation.

## ✅ Implemented Features

### 1. **Booking Flow**
   - Home page with booking form (dropdowns for locations, date-time pickers)
   - Vehicle selection page with 3 car options (Intermediate, Fullsize, Standard)
   - Summary panel showing booking details and pricing breakdown
   - Demo mode: Only requires phone number input (other fields pre-filled)

### 2. **WATI WhatsApp Integration**
   - Configured with your WATI credentials
   - Uses your `confirmbooking_video` template
   - Sends booking confirmation with generated booking ID
   - Format: BK######  (e.g., BK789456)

### 3. **Environment Configuration**
   The `.env.local` file contains your WATI credentials:
   ```
   WATI_API_URL=https://live-mt-server.wati.io/YOUR_TENANT_ID/api/v1/sendTemplateMessage
   WATI_AUTH_TOKEN=your_wati_auth_token_here
   WATI_CHANNEL_NUMBER=your_channel_number
   WATI_TEMPLATE_NAME=before_booking
   ```

## 📱 User Flow

1. **Home Page** (/)
   - User sees hero section with car image
   - Booking form with dropdowns for pickup/return locations
   - Date-time pickers for pickup/return dates
   - "Book Now" button

2. **Booking Page** (/booking)
   - Shows 3 vehicle options with pricing
   - Summary panel on the right with all details
   - Demo data pre-filled (John Doe, john.doe@example.com)
   - **Only requires phone number input**
   - "Next Step" button to submit

3. **Confirmation Page** (/confirmation)
   - Shows booking confirmation
   - Displays booking ID
   - Confirms WhatsApp message sent
   - User receives WhatsApp message with booking ID

## 🚀 How to Test

1. **Start the development server** (already running):
   ```bash
   npm run dev
   ```

2. **Visit** http://localhost:3000

3. **Test booking flow**:
   - Fill booking form on home page
   - Click "Book Now"
   - On booking page, enter your WhatsApp number (with country code)
     - Example: +1234567890 or +919876543210
   - Click "Next Step"
   - You'll receive a WhatsApp message with your booking details!

## 📦 Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Vercel Dashboard
1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub repository
4. Add environment variables:
   - `WATI_API_URL`
   - `WATI_AUTH_TOKEN`
   - `WATI_CHANNEL_NUMBER`
   - `WATI_TEMPLATE_NAME`
5. Deploy!

## 🔐 Environment Variables for Production

When deploying to Vercel, add these in the dashboard:

```
WATI_API_URL=https://live-mt-server.wati.io/YOUR_TENANT_ID/api/v1/sendTemplateMessage
WATI_AUTH_TOKEN=your_wati_auth_token_here
WATI_CHANNEL_NUMBER=your_channel_number
WATI_TEMPLATE_NAME=before_booking
NEXT_PUBLIC_BUSINESS_PHONE=+1234567890
```

## 📝 Key Files

- **`/app/api/booking/route.ts`** - WhatsApp booking API endpoint
- **`/components/BookingForm.tsx`** - Home page booking form (dropdowns & date pickers)
- **`/app/booking/page.tsx`** - Booking page with vehicle selection
- **`/app/confirmation/page.tsx`** - Confirmation page
- **`/.env.local`** - Environment variables (WATI credentials)

## 🎨 Features

✅ Dropdown location selectors  
✅ Date-time pickers for booking dates  
✅ Demo mode (pre-filled data)  
✅ Only phone number required from user  
✅ WATI WhatsApp integration  
✅ Automatic booking ID generation  
✅ Price calculation with breakdown  
✅ Mobile responsive design  
✅ Similar UI to original site  

## 📞 WhatsApp Template

The system uses the `before_booking` template in WATI with parameter:
- Parameter: CustomerName (User's actual name from the booking form)

## 🎉 Ready to Deploy!

The site is fully functional and ready to deploy to Vercel. Just push to GitHub and connect to Vercel, or use the Vercel CLI!
