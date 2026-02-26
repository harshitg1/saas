"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  Plus,
  Minus,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { div } from "framer-motion/m";

interface ContactFormData {
  fullName: string;
  email: string;
  topic: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  topic?: string;
  message?: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}

export default function ContactSupport() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mapZoom, setMapZoom] = useState(12);

  const contactInfoCards: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "support@lavender.in",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call",
      value: "+91-8800-LVNDR",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "9 AM - 6 PM IST",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.topic.trim()) {
      newErrors.topic = "Topic of interest is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      setFormData({ fullName: "", email: "", topic: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full border border-gray-200 bg-gradient-to-br from-purple-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Main Content */}
      <main className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Section */}
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold tracking-wider text-[10px] uppercase">
                  Contact Support
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                  Let's grow your{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    portfolio
                  </span>{" "}
                  together.
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md">
                  Connect with India's leading trading academy. Our friendly
                  experts are here to help you navigate the markets.
                </p>
              </div>
              {/* Contact Form */}
              <Card className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-white/80 dark:border-white/10 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  {success && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    role="form"
                  >
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="fullName"
                          className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="bg-white/50 dark:bg-white/5 border-purple-200 dark:border-white/10 rounded-xl h-14 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 font-medium">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="email"
                          className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="rahul@domain.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/50 dark:bg-white/5 border-purple-200 dark:border-white/10 rounded-xl h-14 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Topic */}
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="topic"
                        className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        Topic of Interest
                      </Label>
                      <Input
                        id="topic"
                        name="topic"
                        placeholder="Advanced Options Trading"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="bg-white/50 dark:bg-white/5 border-purple-200 dark:border-white/10 rounded-xl h-14 focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                      />
                      {errors.topic && (
                        <p className="text-xs text-red-500 font-medium">
                          {errors.topic}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="message"
                        className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                      >
                        How can we help?
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share your trading goals or questions..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-white/50 dark:bg-white/5 border-purple-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary  text-white font-bold py-4  flex items-center justify-center gap-2 transition-all shadow-lg  active:scale-[0.98] disabled:opacity-50"
                    >
                      <Send className="w-5 h-5" />
                      {loading ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Section - Map */}
            <div className="h-full flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <h3 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    KANPUR CAMPUS
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    KAKADEO
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-teal-600 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse"></span>
                  OPEN FOR VISITS
                </div>
              </div>

              {/* Map Container */}
              <Card className="relative flex-1 rounded-[2rem] overflow-hidden border-purple-200 dark:border-white/10 shadow-xl bg-purple-100 dark:bg-slate-800">
                <div className="absolute inset-0 z-0">
                  <img
                    alt="Modern light map of Mumbai"
                    src="/kanpur.png"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-100 dark:from-slate-800 to-transparent z-10"></div>

                {/* Map Marker */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-purple-600/20 blur-xl"></div>
                    <div className="relative w-7 h-7 rounded-full bg-purple-600 border-4 border-white shadow-xl dark:bg-purple-500"></div>
                  </div>
                  <div className="mt-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-5 py-3 rounded-2xl border border-purple-200 dark:border-white/10 shadow-2xl">
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                      Tulsa Devi Commercial Complex
                    </p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium uppercase tracking-tight">
                       Swaroop Nagar
                    </p>
                  </div>
                </div>

                {/* Address Card */}
                {/* Address Card */}

              </Card>

              {/* Bottom Section */}
              <div>
                {/* <div className="bg-white border p-4 border-purple-200 dark:border-white/10 shadow-lg rounded-2xl ">
                <div className="flex items-center w-full gap-2 mb-1">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
                    <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Business Hours
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Mon-Fri: 9 AM - 6 PM
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Sat: 10 AM - 4 PM
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Sun: Closed
                  </p>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
