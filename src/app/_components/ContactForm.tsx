"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  number: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/contactus", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setPopupMessage(
          "Thank you for connecting with us! We will get back to you soon."
        );
      } else {
        setPopupMessage("Failed to send your message. Please try again.");
      }
      reset();
      setShowPopup(true);
    } catch (error) {
      setPopupMessage("An error occurred. Please try again." + error);
      setShowPopup(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="input-field"
              required
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="input-field"
              required
            />
            <input
              {...register("number")}
              type="tel"
              maxLength={10}
              placeholder="Your Number"
              className="input-field"
              required
            />
            <input
              {...register("company")}
              type="text"
              placeholder="Your Company"
              className="input-field"
              required
            />
          </div>
          <div>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={4}
              className="input-field"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center py-10">
            <button
              type="submit"
              className="px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-[#2A2A2A] to-[#161515] relative hover:bg-gradient-to-r hover:from-[#2A2A2A] hover:to-[#161515] text-black transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-black opacity-50 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold text-white">
                Send Message
              </span>
            </button>
            {showPopup && (
              <div className="py-5 text-center">{popupMessage}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
