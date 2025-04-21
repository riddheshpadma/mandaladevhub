import React from 'react'
import Link from 'next/link'
import {
  BrainCircuit,
} from "lucide-react";
const ScheduleMeetCTA = () => {
  return (
    <div>
      <section className="py-20 bg-[#5C213C] text-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-center mb-6">
            <BrainCircuit className="w-10 h-10 text-pink-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Intelligent Solutions?
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            Let&apos;s discuss how AI can transform your business operations.
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