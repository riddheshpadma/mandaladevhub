"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  X,
} from "lucide-react";

const ScheduleModal = ({
  meetingType,
  onClose,
}: {
  meetingType: string;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meetingType, ...formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const result = await response.json();
      console.log("Booking created:", result);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b border-pink-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#5C213C]">
            Schedule Your {meetingType}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#5C213C] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent"
                      placeholder="+91 "
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Meeting Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="pl-10 w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="pl-10 w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-[#5C213C] font-medium mb-2"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border border-pink-100 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#5C213C] focus:border-transparent min-h-[100px]"
                    placeholder="Tell us about your project or specific topics you'd like to discuss..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="border border-[#5C213C] text-[#5C213C] hover:bg-pink-50 px-6 py-2 rounded-full font-medium transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#5C213C] hover:bg-[#7a2b52] text-white px-8 py-2 rounded-full font-medium transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
