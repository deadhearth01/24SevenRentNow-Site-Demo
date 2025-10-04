import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient pt-32 pb-20 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Rent Cars at LAX, Los Angeles,
              <br />
              <span className="text-primary">West Hollywood & Inglewood</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the Best Fleet in Your City – Book Online in 60 Seconds!
            </p>
            
            {/* Google Rating */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2">
                <span className="text-4xl">G</span>
                <div>
                  <div className="text-primary font-bold text-lg">4.1/5</div>
                  <div className="text-gray-600 text-sm">Google Ratings</div>
                </div>
              </div>
              <Link href="/booking" className="btn-primary">
                Book Now
              </Link>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative">
            <div className="relative w-full h-96">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800"
                alt="Luxury Car"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
