"use client";

import { useState } from "react";
import {
  Clock,
  User,
  Phone,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import ScheduleModal from "../_components/ScheduleForm";
import Link from "next/link";

const ScheduleMeeting = () => {
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);

  const meetingTypes = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultation Call",
      duration: "30 min",
      description: "Discuss your project needs and get expert advice",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Discovery Session",
      duration: "60 min",
      description: "Deep dive into your requirements and solution design",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Technical Review",
      duration: "45 min",
      description: "Review existing systems and technical challenges",
    },
  ];

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Hero Section */}
      <div className="py-28 bg-[#5C213C] text-white px-4 md:px-8">
        <div className="container mx-auto">
        
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Schedule a Meeting <br className="hidden md:block" />
                <span className="text-pink-200">With Our Team</span>
              </h1>
              <p className="text-pink-100 text-lg">
                Let&apos;s discuss how we can help bring your ideas to life. Choose a
                meeting type that fits your needs.
              </p>
              <div className="flex items-center gap-2 text-pink-200">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span>Schedule Meeting</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center ">
              <Image
                src="/assets/schedulehero.jpg"
                alt="Meeting Illustration"
                width={500}
                height={400}
                className="w-full max-w-md rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Types Section */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">GET STARTED</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              Select Meeting Type
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Choose the type of meeting that best suits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((meeting, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-2 border border-pink-100 group cursor-pointer"
                onClick={() => setSelectedMeeting(meeting.title)}
              >
                <div className="bg-[#5C213C] w-12 h-12 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-[#7a2b52] transition-colors">
                  {meeting.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-2">
                  {meeting.title}
                </h3>
                <div className="flex items-center gap-2 text-[#5C213C] mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{meeting.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{meeting.description}</p>
                <button className="bg-[#5C213C] hover:bg-[#7a2b52] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all text-sm">
                  Select <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-pink-50 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5C213C] font-semibold">PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C213C] mt-2 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Select Meeting Type",
                description:
                  "Choose the purpose of our meeting from the options above",
              },
              {
                step: "2",
                title: "Pick Date & Time",
                description: "Select a convenient slot from our calendar",
              },
              {
                step: "3",
                title: "Provide Details",
                description: "Share your contact information and meeting notes",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-pink-100"
              >
                <div className="bg-[#5C213C] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#5C213C] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-[#5C213C] text-white px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="max-w-2xl mx-auto text-pink-100 mb-8">
            Schedule a meeting with our team and let&apos;s start building something
            amazing together.
          </p>
          <button
            onClick={() => setSelectedMeeting("General Inquiry")}
            className="bg-white hover:bg-pink-100 text-[#5C213C] px-8 py-3 rounded-full font-bold transition-all"
          >
            Schedule a Meeting Now
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedMeeting && (
        <ScheduleModal
          meetingType={selectedMeeting}
          onClose={() => setSelectedMeeting(null)}
        />
      )}
    </div>
  );
};

export default ScheduleMeeting;
