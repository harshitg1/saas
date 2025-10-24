"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  Users,
  Award,
  Star,
  ArrowRight,
  Zap,
  BookOpen,
  GraduationCap,
  Play,
} from "lucide-react";
import Image from "next/image";

const HERO_CONTENT = {
  // Badge Configuration
  badge: {
    text: "Trusted Since 2020",
    pulseColor: "green", // green, blue, purple, red, yellow
  },

  // Main Headlines
  headlines: {
    primary: {
      line1: "Premier Trading Education",
      line2: "in Kanpur",
    },
    subheadline: "Unlock Your Path to",
    dynamicTexts: [
      "Stock Market Mastery",
      "Financial Independence",
      "Trading Excellence",
      "Wealth Creation",
      "Market Confidence",
    ],
  },

  // Value Proposition Box
  valueProposition: {
    text: "Stock market training from",
    highlight: "practitioner-founded academy",
    continuation:
      ". Master trading strategies that work for beginners and aspiring traders alike.",
  },

  // Call-to-Action Buttons
  cta: {
    primary: {
      text: "Enroll Now",
      icon: "BookOpen", // BookOpen, GraduationCap, ArrowRight, Zap
    },
    secondary: {
      text: "Watch Free Demo",
      icon: "Play", // Play, Star, CheckCircle
    },
  },

  // Main Feature Card
  featureCard: {
    title: "Legacy85 Mentoring",
    subtitle: "Transform Your Trading Journey",
    features: [
      "Live Market Analysis Sessions",
      "One-on-One Mentorship",
      "Battle-Tested Strategies",
    ],
  },

  // Floating Achievement Cards
  achievementCards: {
    card1: {
      title: "Industry Leader",
      rating: 5.0,
      showStars: true,
    },
    card2: {
      title: "Student Success",
      metric: "+127% ROI",
    },
    card3: {
      showIcon: true, // Users icon card
    },
  },

  // Background Image
  backgroundImage: {
    src: "/reception.jpeg",
    alt: "Legacy85 Trading Academy in Kanpur",
  },

  // Theme Colors (for easy customization)
  colors: {
    primary: "blue", // blue, purple, green, indigo
    accent: "purple", // purple, blue, green, pink
  },
};

// Icon Mapping Helper

const getIcon = (iconName: string, className: string) => {
  const icons: any = {
    BookOpen: BookOpen,
    GraduationCap: GraduationCap,
    Play: Play,
    ArrowRight: ArrowRight,
    Zap: Zap,
    Star: Star,
    CheckCircle: CheckCircle,
  };
  const IconComponent = icons[iconName] || BookOpen;
  return <IconComponent className={className} />;
};

// Hero Component

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dynamicTexts = useMemo(() => HERO_CONTENT.headlines.dynamicTexts, []);

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === dynamicTexts.length - 1 ? 0 : prevIndex + 1
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, dynamicTexts]);

  // Get pulse color class
  const pulseColorClass = {
    green: "bg-green-400",
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    red: "bg-red-400",
    yellow: "bg-yellow-400",
  }[HERO_CONTENT.badge.pulseColor];

  const textColorClass = {
    green: "text-green-300",
    blue: "text-blue-300",
    purple: "text-purple-300",
    red: "text-red-300",
    yellow: "text-yellow-300",
  }[HERO_CONTENT.badge.pulseColor];

  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[450px] xl:h-[520px] max-w-[1400px] mx-auto overflow-hidden rounded-2xl border border-slate-200/20 shadow-2xl xl:my-4 bg-slate-950/20 backdrop-blur-sm">
      {/* Background image & overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src={HERO_CONTENT.backgroundImage.src}
            alt={HERO_CONTENT.backgroundImage.alt}
            fill
            className="object-cover object-center contrast-110 rounded-2xl"
            priority
            quality={100}
            style={{
              transformOrigin: "center",
              transform: "scale(1.02)",
              objectPosition: "center 25%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-16 h-16 bg-primary/30 rounded-full blur-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Left-side cut gradient */}
      <div
        className="absolute inset-0 z-1"
        style={{ clipPath: "polygon(0% 0%, 42% 0%, 0% 100%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-l-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-l-2xl"></div>
      </div>

      {/* Diagonal border / cut effect */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute inset-0 border-r-4 border-blue-500/50"
          style={{
            clipPath: "polygon(40% 0%, 42% 0%, 2% 100%, 0% 100%)",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left-side static content */}
            <div className="lg:col-span-5 space-y-5 relative z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulseColorClass} opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${pulseColorClass}`}
                  ></span>
                </span>
                <span className={textColorClass}>
                  {HERO_CONTENT.badge.text}
                </span>
              </div>

              {/* Headlines */}
              <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">
                    {HERO_CONTENT.headlines.primary.line1}
                  </span>
                  <span className="block text-white drop-shadow-lg">
                    {HERO_CONTENT.headlines.primary.line2}
                  </span>
                </h1>
                <div className="h-12 flex items-center">
                  <p className="text-lg md:text-lg text-primary font-semibold">
                    {HERO_CONTENT.headlines.subheadline}{" "}
                    <span className="inline-block min-w-[200px]">
                      {displayText}
                      <span className="animate-pulse text-primary">|</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="relative max-w-md bg-[#111827] backdrop-blur-lg rounded-xl p-3 overflow-hidden group">
                <div className="absolute inset-0 border border-slate-700/50 rounded-xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 via-blue-500/30 to-purple-900/30 rounded-xl opacity-0 blur-sm"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                <div className="flex gap-3 items-start pl-2">
                  <p className="text-sm text-white/90 leading-relaxed pr-2">
                    {HERO_CONTENT.valueProposition.text}{" "}
                    <span className="text-primary/10">
                      {HERO_CONTENT.valueProposition.highlight}
                    </span>
                    {HERO_CONTENT.valueProposition.continuation}
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  {getIcon(HERO_CONTENT.cta.primary.icon, "w-5 h-5")}
                  {HERO_CONTENT.cta.primary.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300">
                  {getIcon(HERO_CONTENT.cta.secondary.icon, "w-5 h-5")}
                  {HERO_CONTENT.cta.secondary.text}
                </button>
              </div>
            </div>

            {/* Right-side animated cards */}
            <div className="lg:col-span-7 relative">
              {/* Main feature card */}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                className="relative z-20 bg-slate-950/85 rounded-2xl p-6 border border-slate-700 shadow-2xl hover:bg-slate-900/90 transition-all duration-500 group max-w-sm ml-auto mr-16"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full shadow-lg shadow-blue-500/100">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {HERO_CONTENT.featureCard.title}
                      </h3>
                      <p className="text-white/80 text-xs">
                        {HERO_CONTENT.featureCard.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {HERO_CONTENT.featureCard.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 text-white/90"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating achievement card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 right-4 group"
              >
                <div className="relative bg-slate-900 p-3 rounded-xl shadow-xl border border-white/40 z-30 transform hover:rotate-2 hover:scale-105 transition-all duration-300 max-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-md">
                      <Award className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs">
                        {HERO_CONTENT.achievementCards.card1.title}
                      </h4>
                      {HERO_CONTENT.achievementCards.card1.showStars && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-300 ml-1">
                            {HERO_CONTENT.achievementCards.card1.rating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating achievement card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-0 right-20 group"
              >
                <div className="relative bg-slate-900 p-3 rounded-xl shadow-xl border border-white/40 z-30 transform hover:-rotate-2 hover:scale-105 transition-all duration-300 max-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
                      <TrendingUp className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs">
                        {HERO_CONTENT.achievementCards.card2.title}
                      </h4>
                      <p className="text-[10px] text-gray-300 mt-0.5">
                        {HERO_CONTENT.achievementCards.card2.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating achievement card 3 */}
              {HERO_CONTENT.achievementCards.card3.showIcon && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                  className="absolute top-16 right-11 group"
                >
                  <div className="relative bg-slate-800/80 backdrop-blur-lg p-2.5 rounded-full shadow-xl border border-white/40 z-30 transform hover:scale-110 transition-all duration-300">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-md">
                      <Users className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
