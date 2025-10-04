# 24Seven Car Rental Clone - Full Stack Application

A complete clone of the 24Seven Car Rental website with **WhatsApp booking confirmation** functionality. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Fully responsive design matching the original site
- ✅ Complete booking system with date/time selection
- ✅ **WhatsApp confirmation messages** sent automatically upon booking
- ✅ Car fleet showcase with multiple vehicle categories
- ✅ Customer testimonials carousel
- ✅ FAQ accordion section
- ✅ Professional UI/UX with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Ready for Vercel deployment

## 📱 WhatsApp Integration

This application includes two options for WhatsApp integration:

### Option 1: WhatsApp Business API (Meta)
- Best for production use
- Requires Meta Business account
- Configure in `.env.local`

### Option 2: Twilio WhatsApp API
- Alternative option
- Easier to set up for testing
- Configure in `.env.local`

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Date Picker:** React DatePicker
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
cd 24-carSevenClone
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Configure your WhatsApp API credentials in `.env.local`:

For WhatsApp Business API:
```env
WHATSAPP_API_URL=https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages
WHATSAPP_ACCESS_TOKEN=your_whatsapp_business_api_token
```

OR for Twilio:
```env
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 Getting WhatsApp API Credentials

### Option 1: WhatsApp Business API (Meta)

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create a new app and enable WhatsApp Business API
3. Get your Phone Number ID and Access Token
4. Add test phone numbers in the dashboard

### Option 2: Twilio WhatsApp

1. Sign up at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token
3. Enable WhatsApp sandbox for testing
4. Use the provided sandbox number

## 🚢 Deployment to Vercel

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com/)

3. Click "New Project" and import your repository

4. Add environment variables in Vercel dashboard:
   - `WHATSAPP_API_URL`
   - `WHATSAPP_ACCESS_TOKEN`
   OR
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_NUMBER`

5. Deploy!

## 📂 Project Structure

```
24-carSevenClone/
├── app/
│   ├── api/
│   │   └── booking/
│   │       └── route.ts          # Booking API with WhatsApp integration
│   ├── booking/
│   │   └── page.tsx              # Booking form page
│   ├── confirmation/
│   │   └── page.tsx              # Booking confirmation page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                  # Hero section
│   ├── BookingForm.tsx           # Quick booking form
│   ├── CarFleet.tsx              # Car listings
│   ├── WhyChooseUs.tsx           # Features section
│   ├── Testimonials.tsx          # Customer reviews
│   └── FAQ.tsx                   # FAQ accordion
├── public/                       # Static assets
├── .env.local.example            # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the primary color:
```js
colors: {
  primary: '#FF6B00',  // Change this
  secondary: '#1a1a1a',
}
```

### Car Fleet
Edit `components/CarFleet.tsx` to add/remove vehicles:
```typescript
const cars: Car[] = [
  {
    id: '1',
    name: "Your Car Name",
    type: 'SUV',
    image: 'https://your-image-url.jpg',
    features: ['Feature 1', 'Feature 2'],
    price: 95
  },
  // Add more cars...
]
```

### WhatsApp Message Template
Edit `app/api/booking/route.ts` to customize the confirmation message format.

## 🧪 Testing

To test the booking system without a WhatsApp API:

1. Leave the environment variables empty
2. The system will log messages to the console instead
3. Check your terminal for the WhatsApp message that would be sent

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `WHATSAPP_API_URL` | Meta WhatsApp API endpoint | Optional* |
| `WHATSAPP_ACCESS_TOKEN` | Meta WhatsApp access token | Optional* |
| `TWILIO_ACCOUNT_SID` | Twilio account SID | Optional* |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | Optional* |
| `TWILIO_WHATSAPP_NUMBER` | Twilio WhatsApp number | Optional* |
| `NEXT_PUBLIC_SITE_URL` | Your site URL | Optional |

*At least one WhatsApp integration method should be configured for production.

## 🎯 Key Features

### Booking System
- Date and time selection for pickup/return
- Multiple vehicle options
- Real-time price calculation
- Form validation
- WhatsApp confirmation

### WhatsApp Integration
- Automatic booking confirmation
- Formatted message with all details
- Customer phone number validation
- Error handling and fallbacks

### UI/UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Loading states
- Error handling
- Success messages

## 🐛 Troubleshooting

### WhatsApp messages not sending
1. Check your environment variables are correct
2. Verify your API credentials
3. Check the console for error messages
4. Ensure phone numbers are in correct format (E.164)

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

This is a demo project for educational purposes.

## 🤝 Support

For support with WhatsApp API setup or deployment, please refer to:
- [Meta WhatsApp Business API Documentation](https://developers.facebook.com/docs/whatsapp)
- [Twilio WhatsApp Documentation](https://www.twilio.com/docs/whatsapp)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## 🔥 Demo

Once deployed to Vercel, share your booking link and customers will receive WhatsApp confirmations automatically!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
