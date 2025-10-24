"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  Globe,
} from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="max-w-5xl pb-4 mx-auto px-4 sm:px-6 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Connect with <span className="text-theme-primary">our team</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            We're here to help you succeed. Reach out with any questions about
            our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm space-y-4">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-theme-primary/10 rounded">
                    <Phone className="w-4 h-4 text-theme-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+918577018585"
                  className="text-sm font-bold text-theme-primary hover:text-theme-primary-light"
                >
                  +91 8577018585
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-theme-primary/10 rounded">
                    <MapPin className="w-4 h-4 text-theme-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Address
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  Legacy85 Mentoring Pvt Ltd
                </p>
                <p className="text-xs text-slate-600">
                  117/H-1/365 Pandu Nagar, Kanpur
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-theme-primary/10 rounded">
                    <Mail className="w-4 h-4 text-theme-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:contact@legacy85mentoringpvtltd.com"
                  className="text-xs text-slate-600 hover:text-theme-primary"
                >
                  contact@legacy85mentoringpvtltd.com
                </a>
              </div>

              {/* Website */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-theme-primary/10 rounded">
                    <Globe className="w-4 h-4 text-theme-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Website
                  </h3>
                </div>
                <a
                  href="https://www.legacy85mentoringpvtltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-theme-primary"
                >
                  www.legacy85mentoringpvtltd.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 bg-theme-primary/10 rounded">
                    <Clock className="w-4 h-4 text-theme-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Business Hours
                  </h3>
                </div>
                <p className="text-xs text-slate-600">Mon-Fri: 9 AM - 6 PM</p>
                <p className="text-xs text-slate-600">Sat: 10 AM - 4 PM</p>
                <p className="text-xs text-slate-600">Sun: Closed</p>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  Follow Us
                </h3>
                <div className="flex gap-2">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="p-2 bg-slate-100 hover:bg-theme-primary/10 rounded group"
                    >
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-theme-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm h-full min-h-[480px] flex flex-col justify-between">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 flex-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-theme-primary text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-0.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email required",
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-theme-primary text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-0.5">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-theme-primary text-sm"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-0.5">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Query
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    rows={3}
                    placeholder="Tell us about your query..."
                    className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-1 focus:ring-theme-primary text-sm resize-none h-3/4"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-0.5">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-2 rounded hover:bg-theme-primary-dark flex justify-center items-center gap-2 text-sm disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
