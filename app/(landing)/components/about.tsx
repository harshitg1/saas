"use client";

import React from "react";
import Image from "next/image";
import { Users, Monitor, TrendingUp } from "lucide-react";

// ============================================
// 🎯 CENTRALIZED ABOUT SECTION CONFIGURATION
// ============================================
const ABOUT_CONTENT = {
  // Main Heading
  heading: {
    main: "Trusted Trading Education",
    highlight: "Since 2020",
    tag: "h2",
  },

  // Hero Statistics Badge (Purple Circle)
  statsBadge: {
    number: "1,485+",
    label: "Trusted Clients",
    bgColor: "#8b5091", // Purple brand color
  },

  // Introduction Paragraph (Main Value Proposition)
  introduction: {
    text: "Legacy85 Mentoring has guided over 1,400+ students from Kanpur and beyond to consistently profitable trading. Our graduates report an average +30% portfolio growth within their first year. Every program is led by active market professionals who turn theory into real results.",
    // CTA removed per request
  },

  // Images Configuration
  images: {
    main: {
      src: "/class-room.png", // NOTE: Use actual path
      alt: "Legacy85 trading classroom with live market training sessions",
      width: 500,
      height: 400,
    },
    overlay: {
      src: "/a1.jpeg", // NOTE: Use actual path
      alt: "Student learning trading strategies at Legacy85 Kanpur",
      width: 192,
      height: 192,
    },
  },

  // Feature Blocks
  features: [
    {
      icon: "Users",
      iconColor: "#7e22ce", // A richer purple
      bgColor: "#ede9fe", // Very light purple for background
      title: "Proven Track Record",
      description:
        "With 1,400+ successful students and a 96% satisfaction rate, we've established ourselves as Kanpur's most trusted partner in stock market education. Our alumni consistently achieve profitable trading results.",
    },
    {
      icon: "Monitor",
      iconColor: "#7e22ce",
      bgColor: "#ede9fe",
      title: "Comprehensive Learning Platform",
      description:
        "Our advanced platform blends theoretical knowledge with hands-on practice. Track your progress through interactive modules, master technical analysis, and receive personalized feedback from active traders.",
    },
    {
      icon: "TrendingUp",
      iconColor: "#7e22ce",
      bgColor: "#ede9fe",
      title: "Battle-Tested Strategies",
      description:
        "Every trading strategy we teach has been rigorously tested across bull markets, bear markets, and sideways conditions. Learn methods with proven consistency that work in India's dynamic stock market.",
    },
  ],
};

// ============================================
// Icon Mapping Helper
// ============================================
const getIconComponent = (iconName: string) => {
  const icons: any = {
    Users: Users,
    Monitor: Monitor,
    TrendingUp: TrendingUp,
  };
  return icons[iconName] || Users;
};

// ============================================
// Main About Component
// ============================================
export default function About() {
  const HeadingTag = ABOUT_CONTENT.heading.tag as React.ElementType;

  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* === 1. Main Heading === */}
        <HeadingTag className="flex flex-wrap justify-center items-center text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          {ABOUT_CONTENT.heading.main}
          <span className="text-[#8b5091] ml-2 tracking-tight">
            {ABOUT_CONTENT.heading.highlight}
          </span>
        </HeadingTag>

        {/* === 2. Introduction Text (NEW POSITION) === */}
        <div className="mt-6 md:mt-8 mb-9 md:mb-10 max-w-6xl  mx-auto text-center">
          <p className="text-gray-700 leading-relaxed text-lg  font-medium">
            {ABOUT_CONTENT.introduction.text}
          </p>
        </div>

        {/* === 3. Two-Column Grid for Image and Features === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Images (Col Span 6 on LG) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start pt-4 lg:pt-0">
            <div className="relative w-full max-w-[600px] lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-xl select-none shadow-2xl shadow-purple-200/50">
                <Image
                  src={ABOUT_CONTENT.images.main.src}
                  alt={ABOUT_CONTENT.images.main.alt}
                  fill
                  className="object-cover brightness-110 saturate-100 contrast-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Overlay Image (Floating/Stacked Effect) */}
              <div className="absolute bottom-4 left-4 w-36 h-36 md:w-44 md:h-44 select-none z-10">
                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
                  <Image
                    src={ABOUT_CONTENT.images.overlay.src}
                    alt={ABOUT_CONTENT.images.overlay.alt}
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
              </div>

              {/* Statistics Badge (Fixed placement on the main image for prominence) */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center text-white shadow-xl transform hover:scale-[1.02] transition-transform duration-300 z-20"
                style={{ backgroundColor: ABOUT_CONTENT.statsBadge.bgColor }}
              >
                <div className="text-3xl font-extrabold">
                  {ABOUT_CONTENT.statsBadge.number}
                </div>
                <div className="text-xs font-medium text-center leading-snug px-3 mt-1 opacity-90">
                  {ABOUT_CONTENT.statsBadge.label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features (Col Span 6 on LG) */}
          <div className="lg:col-span-6 space-y-8 md:space-y-10 lg:pt-4">
            {/* 🎯 ADJUSTMENT: Separator moved here to divide intro from features/image grid */}
            <hr className="mb-8 border-t-2 border-gray-100 w-full lg:hidden" />
            {/* Feature Blocks (New Layout) */}``
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {ABOUT_CONTENT.features.map((feature, index) => {
                const featureBlockClasses = index === 0 ? "sm:col-span-2" : "";
                const IconComponent = getIconComponent(feature.icon);
                return (
                  <div
                    key={index}
                    className={`flex flex-col space-y-3 ${featureBlockClasses}`}
                  >
                    {/* ... */}
                    <div className="flex items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: feature.bgColor, // Light purple ring background
                        }}
                      >
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: feature.iconColor }} // Rich purple icon
                          strokeWidth={2.5}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 ml-3">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 pt-2">
              {ABOUT_CONTENT.features.map((feature, index) => {
                return (
                  // Feature Block - Clean list/grid look
                  <div key={index} className="flex flex-col space-y-3"></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
