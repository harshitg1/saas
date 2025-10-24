"use client";

import React from "react";
import Image from "next/image";
import { Users, Monitor, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

// ============================================
// 🎯 CENTRALIZED ABOUT SECTION CONFIGURATION
// ============================================
const ABOUT_CONTENT = {
  // Main Heading & Subheading
  heading: {
    main: "Empowering Financial Futures Through Excellence",
    subheading: "About Legacy85",
    tag: "h2",
  },

  // Introduction Paragraph (Main Value Proposition)
  introduction: {
    text: "Discover the vision, expertise, and dedication that makes Legacy85 Kanpur's premier trading education academy. We turn aspiring traders into confident, profitable market participants.",
  },

  // Images Configuration
  images: {
    main: {
      src: "/class-room.png", // Replace with your actual image path
      alt: "A modern classroom at Legacy85 with students engaged in a live trading session.",
      width: 600,
      height: 500,
    },
    // The overlay adds a nice touch but can be removed for simplicity if needed.
    overlay: {
      src: "/a1.jpeg", // Replace with your actual image path
      alt: "Close-up of a student analyzing stock charts at Legacy85.",
      width: 200,
      height: 200,
    },
  },

  // Feature Highlights (Replaces the old stats)
  highlights: [
    {
      icon: "Users",
      value: "1,485+",
      label: "Trusted Clients",
    },
    {
      icon: "Award",
      value: "96%",
      label: "Satisfaction Rate",
    },
    {
      icon: "TrendingUp",
      value: "30+%",
      label: "Average Portfolio Growth",
    },
  ],

  // Detailed Feature Blocks
  features: [
    {
      title: "Proven Track Record & Expertise",
      description:
        "With over 5 years of market experience and 1,400+ successful alumni, our results speak for themselves. Our 96% satisfaction rate makes us Kanpur's most trusted partner in financial education.",
    },
    {
      title: "Live Market Training",
      description:
        "Theory is just the beginning. Our curriculum is built around hands-on, practical sessions in live market conditions, ensuring you gain real-world skills that translate to confident trading.",
    },
    {
      title: "Personalized Mentorship",
      description:
        "You're not just a number. We provide personalized feedback and dedicated support from active traders to guide you, refine your strategy, and help you navigate the complexities of the market.",
    },
  ],
};

// ============================================
// Icon Mapping Helper
// ============================================
const ICON_MAP: { [key: string]: React.ElementType } = {
  Users: Users,
  Monitor: Monitor,
  TrendingUp: TrendingUp,
  Award: Award,
};

const IconComponent = ({ name, ...props }: { name: string; [key: string]: any }) => {
  const Icon = ICON_MAP[name] || Users;
  return <Icon {...props} />;
};

// ============================================
// Main Revamped About Component
// ============================================
export default function RevampedAbout() {
  const HeadingTag = ABOUT_CONTENT.heading.tag as React.ElementType;

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* === HEADER SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-semibold text-lg text-primary mb-2">
            {ABOUT_CONTENT.heading.subheading}
          </p>
          <HeadingTag className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {ABOUT_CONTENT.heading.main}
          </HeadingTag>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {ABOUT_CONTENT.introduction.text}
          </p>
        </motion.div>

        {/* === MAIN TWO-COLUMN LAYOUT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT SIDE: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[450px] lg:h-[550px]"
          >
            {/* Main Image */}
            <div className="relative w-full h-full rounded-2xl shadow-2xl shadow-purple-200/80 overflow-hidden">
              <Image
                src={ABOUT_CONTENT.images.main.src}
                alt={ABOUT_CONTENT.images.main.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Overlay Image */}
            <div className="absolute -bottom-8 left-4 w-40 h-40 md:w-48 md:h-48 z-10 transform transition-transform duration-500 ">
              <div className="relative w-full h-full rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                <Image
                  src={ABOUT_CONTENT.images.overlay.src}
                  alt={ABOUT_CONTENT.images.overlay.alt}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Highlighted Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              {ABOUT_CONTENT.highlights.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100">
                  <IconComponent name={stat.icon} className="w-8 h-8 mx-auto text-primary mb-2" strokeWidth={2} />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Features List */}
            <div className="space-y-6">
              {ABOUT_CONTENT.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                    <p className="mt-1 text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Optional: Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
}