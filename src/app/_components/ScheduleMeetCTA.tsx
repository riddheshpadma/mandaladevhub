import React from 'react'
import Link from 'next/link'
const ScheduleMeetCTA = () => {
  return (
    <div>
        {/* CTA Section */}
      <section className="py-16 bg-[#5C213C] text-white px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="max-w-2xl mx-auto text-pink-100 mb-8">
            Schedule a meeting with our team and let's start building something
            amazing together.
          </p>
          <Link href='/schedule'>
          <button
            className="bg-white hover:bg-pink-100 text-[#5C213C] px-8 py-3 rounded-full font-bold transition-all"
          >
            Schedule a Meeting Now
          </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ScheduleMeetCTA