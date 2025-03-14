"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm();
  const [step, setStep] = useState(0);
  const totalSteps = 3;
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: Record<string, any>) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/getstarted", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setStatusMessage("Your request has been submitted successfully!");
        reset();
        setShowStatus(true);
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      } else {
        setStatusMessage("Something went wrong. Please try again.");
        setShowStatus(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage("Failed to submit form. Please try again later.");
      setShowStatus(true);

      setTimeout(() => {
        setShowStatus(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-around p-5 bg-secondaryColor">
        <div className="fixed top-0 left-0 p-5 md:p-10 z-20">
          <Link href="/">
            <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full shadow hover:bg-gray-50 hover:-translate-x-2 transition-all duration-700">
              <IoArrowBack size={24} />
            </button>
          </Link>
        </div>

        {step === 0 && (
          <div className="flex flex-col justify-center items-center text-primaryColor text-center space-y-6 p-5">
            <Image
              src="/assets/getstartedstep.png"
              alt="Steps"
              width={200}
              height={200}
              className="w-full max-w-md"
            />
            <h1 className="text-2xl md:text-4xl font-bold">
              Let&apos;s Build Something Incredible Together
            </h1>
            <p className="text-lg">
              We&apos;re excited to hear about your vision! Let&apos;s
              kick-start the process by understanding your needs.
            </p>
            <button
              className="px-12 py-4 bg-tirtaryColor text-primaryColor hover:text-white font-semibold rounded-lg shadow-md hover:bg-primaryColor transition-all duration-700"
              onClick={nextStep}
            >
              Get Started
            </button>
          </div>
        )}

        {step > 0 && (
          <div className="flex flex-col items-center p-5 w-full max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-primaryColor mb-6">
              Let&apos;s Get Started Together
            </h1>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-tirtaryColor h-2 rounded-full"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>

            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">
                    Step 1: Basic Information
                  </h2>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                    className="input-field w-full p-3 border rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className="input-field w-full p-3 border rounded-md"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("number", { required: true })}
                    className="input-field w-full p-3 border rounded-md"
                  />
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">
                    Step 2: Business Details
                  </h2>
                  <input
                    type="text"
                    placeholder="Company Name"
                    {...register("company", { required: true })}
                    className="input-field w-full p-3 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Business Type"
                    {...register("businessType", { required: true })}
                    className="input-field w-full p-3 border rounded-md"
                  />
                  <input
                    type="url"
                    placeholder="Website (Optional)"
                    {...register("website")}
                    className="input-field w-full p-3 border rounded-md"
                  />
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">
                    Step 3: Project Goals
                  </h2>
                  <textarea
                    placeholder="What do you want to achieve with this project?"
                    {...register("project", { required: true })}
                    className="input-field w-full p-3 border rounded-md h-32 resize-none"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Budget (Optional)"
                    {...register("budget")}
                    className="input-field w-full p-3 border rounded-md"
                  />
                </div>
              )}

              {showStatus && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    statusMessage.includes("success")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 0 && (
                  <button
                    type="button"
                    className="px-8 py-2 bg-gray-300 text-gray-800 rounded-lg"
                    onClick={prevStep}
                    disabled={loading}
                  >
                    Back
                  </button>
                )}
                {step < totalSteps ? (
                  <button
                    type="button"
                    className="px-8 py-2 bg-tirtaryColor text-white rounded-lg"
                    onClick={nextStep}
                    disabled={loading}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-2 bg-green-600 text-white rounded-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
