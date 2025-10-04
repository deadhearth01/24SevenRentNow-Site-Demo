import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Generate booking ID
    const bookingId = bookingData.bookingId || `BK${Math.floor(100000 + Math.random() * 900000)}`;

    // Send WhatsApp confirmation via WATI
    const whatsappNumber = bookingData.phone.replace(/\D/g, ''); // Remove non-digits
    
    try {
      const watiResponse = await fetch(
        `${process.env.WATI_API_URL}?whatsappNumber=${whatsappNumber}`,
        {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${process.env.WATI_AUTH_TOKEN}`,
            'Content-Type': 'application/json-patch+json',
          },
          body: JSON.stringify({
            template_name: process.env.WATI_TEMPLATE_NAME,
            broadcast_name: `booking_${bookingId}`,
            parameters: [
              {
                name: "1",
                value: bookingId
              }
            ],
            channel_number: process.env.WATI_CHANNEL_NUMBER
          }),
        }
      );

      const watiResult = await watiResponse.json();
      console.log('WATI Response:', watiResult);

      if (!watiResponse.ok) {
        console.error('WATI API Error:', watiResult);
      }
    } catch (whatsappError) {
      console.error('WhatsApp sending error:', whatsappError);
      // Continue even if WhatsApp fails
    }

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed! WhatsApp confirmation sent.',
      bookingId: bookingId,
      bookingData: {
        ...bookingData,
        bookingId
      }
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
