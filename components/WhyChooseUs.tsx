import { FaMapMarkerAlt, FaDollarSign, FaHeadset, FaCar } from 'react-icons/fa'

const features = [
  {
    icon: FaMapMarkerAlt,
    title: 'Convenient Locations',
    description: 'Pick up and drop off at LAX, West Hollywood, or Inglewood with our 24/7 service.'
  },
  {
    icon: FaDollarSign,
    title: 'No Hidden Fees',
    description: 'Transparent pricing on all rentals with no surprise charges — whether at LAX, Los Angeles, or West Hollywood.'
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Our concierge team is always available to assist LAX and Los Angeles travelers, ensuring a smooth rental experience.'
  },
  {
    icon: FaCar,
    title: 'Premium Fleet',
    description: 'From cheap economy cars to luxury SUVs and convertibles, every vehicle is inspected for safety and comfort.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose 24Seven Rent A Car in Los Angeles & LAX Airport
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We don't just rent cars—we deliver flawless experiences with unmatched reliability and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <feature.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
