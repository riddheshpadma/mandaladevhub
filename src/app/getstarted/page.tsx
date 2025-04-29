"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../_components/Navbar';
import { 
  Rocket, Mail, Phone, Building, Briefcase, Clock, 
  Calendar, Search, MessageSquare, Check, AlertCircle,
  Loader2, ArrowRight, ChevronDown
} from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  package?: string;
  message?: string;
  businessType?: string;
  project?: string;
  budget?: string;
  timeline?: string;
  referral?: string;
  agreeTerms?: string;
  submit?: string;
}

import axios from 'axios';
import { validateLeadForm } from '../../utils/formValidation';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: 'MVP Development',
    message: '',
    businessType: '',
    project: '',
    budget: '',
    timeline: '',
    referral: '',
    agreeTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validateLeadForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await axios.post('/api/leads', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      setStatusMessage(response.data.message || 'Thank you for your submission!');
      setSubmitSuccess(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        package: 'MVP Development',
        message: '',
        businessType: '',
        project: '',
        budget: '',
        timeline: '',
        referral: '',
        agreeTerms: false,
      });
      setErrors({});
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
          } else {
            setErrors({
              submit: error.response.data.message || 'Failed to submit form'
            });
          }
        } else if (error.request) {
          setErrors({
            submit: 'No response from server. Please try again later.'
          });
        } else {
          setErrors({
            submit: error.message || 'Failed to submit form'
          });
        }
      } else {
        setErrors({
          submit: 'An unexpected error occurred. Please try again.'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-500" strokeWidth={2} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">{statusMessage}</p>
            <p className="text-gray-500 mb-8">We&apos;ve received your information and will contact you shortly.</p>
            <Link href="/" className="bg-[#5D213B] hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Get Started - Tech Solutions</title>
        <meta name="description" content="Start your project with our expert team" />
      </Head>
      
      <Navbar />
      
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Rocket className="w-8 h-8 text-[#5D213B]" />
            Start Your Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete this form and our team will contact you to discuss your requirements.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-[#5D213B] to-[#c5487e] p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Why Work With Us?
              </h2>
              <ul className="space-y-5">
                {/* <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <span>Proven track record with startups and enterprises</span>
                </li> */}
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span>Custom solutions tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Fast turnaround times without compromising quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white bg-opacity-20 p-1 rounded-full">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span>Dedicated project manager for clear communication</span>
                </li>
              </ul>
              
              <div className="mt-8 bg-white bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Need help?
                </h3>
                <p className="text-sm mb-2">Email us at: <a href="mandaladevhub@hotmail.com" className="underline hover:text-yellow-200">mandaladevhub@hotmail.com</a></p>
                <p className="text-sm">Call us at: <a href="tel:+911234567890" className="underline hover:text-yellow-200">+91 92264 06267</a></p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.submit && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-700">{errors.submit}</p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <span>Full Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="John Doe"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <span>Email Address</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <span>Phone Number</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="+91 98765 43210"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition"
                        placeholder="Your company name"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <span>Interested Package</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition appearance-none ${errors.package ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="Basic Website Package">Basic Website Package</option>
                      <option value="MVP Development">MVP Development</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Custom Project">Custom Project</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.package && <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.package}
                  </p>}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget (INR)</label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under 50k">Under ₹50,000</option>
                        <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                        <option value="1L-2L">₹1,00,000 - ₹2,00,000</option>
                        <option value="2L-5L">₹2,00,000 - ₹5,00,000</option>
                        <option value="5L+">Above ₹5,00,000</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                    <div className="relative">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-4 months">3-4 months</option>
                        <option value="5-6 months">5-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    ></textarea>
                    <div className="absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                  <div className="relative">
                    <select
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D213B] focus:border-[#5D213B] outline-none transition appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Search Engine">Search Engine (Google, etc.)</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className={`h-4 w-4 rounded border-gray-300 text-[#5D213B] focus:ring-[#5D213B] ${errors.agreeTerms ? 'border-red-500' : ''}`}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                      I agree to the <Link href="/privacy" className="text-[#5D213B] hover:underline">privacy policy</Link> and <Link href="/terms" className="text-[#5D213B] hover:underline">terms of service</Link> <span className="text-red-500">*</span>
                    </label>
                    {errors.agreeTerms && <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.agreeTerms}
                    </p>}
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#5D213B] to-[#c5487e] hover:from-[#c5487e] hover:to-[#5D213B] text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-5 h-5" />
                        Submit Your Project
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}