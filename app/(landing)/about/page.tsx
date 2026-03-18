"use client";
import Image from "next/image";
import {
  Users,
  Award,
  TrendingUp,
  Target,
  BookOpen,
  Lightbulb,
  Shield,
  Heart,
  GraduationCap,
  LineChart,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const ABOUT_PAGE_CONTENT = {
  pageHeader: {
    title: "About Legacy85",
    subtitle: "Empowering Financial Futures Through Excellence",
    description:
      "Discover the vision, expertise, and dedication that makes Legacy85 Kanpur's premier trading education academy.",
  },
  directors: {
    sectionTitle: "Honorary Directors",
    sectionSubtitle: "Market Visionaries & Educational Leaders",
    names: "Manvendra Singh & VN Singh",
    image: "/manvendra.jpeg",
    paragraphs: [
      "Our distinguished Honorary Directors represent decades of combined expertise in capital markets, institutional finance, and educational leadership. These visionaries have weathered multiple market cycles, from the dot-com boom to the 2008 financial crisis, accumulating invaluable insights that form the cornerstone of our educational philosophy.",
      "Their approach transcends traditional academic frameworks, emphasizing practical market psychology, risk assessment, and the cultivation of disciplined investment thinking. Having mentored thousands of successful traders and investors, they understand that true financial literacy extends beyond technical analysis to encompass emotional intelligence, behavioral finance, and the development of a robust investment mindset.",
      "Each Honorary Director brings unique perspectives from diverse financial sectors - from equity research and derivative strategies to wealth management and regulatory compliance. Their collective wisdom ensures our curriculum remains current with evolving market dynamics while honoring time-tested investment principles.",
    ],
  },
  faculty: {
    sectionTitle: "Respected Faculty",
    sectionSubtitle: "Masters of Market Craft",
    leadName: "Manvendra Singh",
    image: "/manvendra.jpeg",
    paragraphs: [
      "Our faculty represents the elite tier of financial education professionals, combining advanced academic credentials with real-world trading expertise. These seasoned practitioners have successfully navigated volatile markets, managing portfolios worth millions while simultaneously developing innovative teaching methodologies that bridge theory and practice.",
      "Their teaching philosophy centers on experiential learning, utilizing live market simulations, case study analysis, and interactive trading environments. Each faculty member specializes in distinct areas - from options strategies and technical analysis to fundamental research and portfolio construction - ensuring comprehensive coverage of market disciplines.",
      "Beyond their technical expertise, our faculty members are passionate educators who understand that every student's journey is unique. They employ diverse pedagogical approaches, from visual learning techniques for complex derivatives to hands-on workshops for risk management strategies.",
    ],
  },
  team: {
    sectionTitle: "Hardworking Team",
    sectionSubtitle: "Your Success Partners",
    members: "Siddhant Singh",
    image: "/sid.png",
    paragraphs: [
      "Behind every successful educational institution stands a dedicated team of professionals committed to student achievement. Our support team encompasses academic coordinators, technology specialists, student advisors, and administrative professionals who collectively ensure a seamless learning experience.",
      "Their responsibilities extend far beyond traditional administrative functions. They actively monitor student progress, coordinate personalized learning paths, facilitate peer collaboration, and maintain cutting-edge educational technology platforms. Understanding that financial education can be overwhelming, they provide compassionate guidance throughout each student's journey.",
    ],
  },
  vision: {
    sectionTitle: "Our Vision",
    sectionSubtitle: "Transforming Financial Futures",
    paragraphs: [
      "Legacy85 envisions a world where financial literacy empowers every individual to build sustainable wealth and achieve economic independence. We are committed to democratizing market education, making sophisticated investment strategies accessible to aspiring traders and investors regardless of their background or experience level.",
    ],
  },
  coreValues: [
    {
      icon: "Shield",
      title: "Built by Practitioners",
      description:
        "Every curriculum element is shaped by real market experience — not textbooks. Our instructors have traded live capital across bull runs, crashes, and sideways markets.",
      color: "#8b5091",
      tag: "Authenticity",
    },
    {
      icon: "Target",
      title: "Tier-II India First",
      description:
        "We started in Kanpur because we believe world-class financial education shouldn't be limited to metro cities. Regional markets deserve regional champions.",
      color: "#6366f1",
      tag: "Accessibility",
    },
    {
      icon: "Award",
      title: "Ethics First",
      description:
        "No get-rich-quick schemes, no pump-and-dump advice, no misleading success rates. We build traders who understand that longevity in markets demands integrity.",
      color: "#0ea5e9",
      tag: "Integrity",
    },
    {
      icon: "Heart",
      title: "No False Promises",
      description:
        "Markets are hard. We'll tell you that upfront. What we promise is a structured framework, honest mentorship, and the tools to develop your own edge over time.",
      color: "#f59e0b",
      tag: "Honesty",
    },
  ],
  statistics: [
    { number: "1,485+", label: "Students Trained", icon: "Users" },
    { number: "96%", label: "Satisfaction Rate", icon: "Award" },
    { number: "5+", label: "Years Experience", icon: "TrendingUp" },
    { number: "30%", label: "Avg. Portfolio Growth", icon: "LineChart" },
  ],
  seo: {
    title:
      "About Legacy85 - Premier Trading Education in Kanpur | Meet Our Team",
    description:
      "Learn about Legacy85's mission to democratize trading education in Kanpur.",
    keywords: ["about Legacy85", "trading academy Kanpur"],
  },
};

const getIconComponent = (iconName: string) => {
  const icons: any = {
    Users, Award, TrendingUp, Target, BookOpen,
    Lightbulb, Shield, Heart, GraduationCap, LineChart,
  };
  return icons[iconName] || Users;
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-primary/20">
      <section className="relative pt-10 pb-20 md:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
                {ABOUT_PAGE_CONTENT.pageHeader.subtitle}
              </span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Redefining{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600 dark:from-primary dark:to-indigo-400">
                Financial
              </span>{" "}
              Education.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
              {ABOUT_PAGE_CONTENT.pageHeader.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. FLOATING STATS TAPE */}
      <section className="relative z-20 -mt-10 md:-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl shadow-slate-200/20 dark:shadow-none"
          >
            {ABOUT_PAGE_CONTENT.statistics.map((stat, idx) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <div key={idx} className="flex flex-col items-center justify-center p-4 text-center group">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. EDITORIAL SPLIT PANELS */}
      <section className="py-20 md:py-32 overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">

          {/* Block: Faculty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full order-2 md:order-1"
            >
              <div className="pl-4 md:pl-10 text-left md:text-right">
                <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-3 block">
                  Education & Mentoring
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                  {ABOUT_PAGE_CONTENT.faculty.sectionTitle}
                </h2>
                <h3 className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6">
                  {ABOUT_PAGE_CONTENT.faculty.leadName}
                </h3>
                <div className="space-y-5 text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-light">
                  <p>{ABOUT_PAGE_CONTENT.faculty.paragraphs[0]}</p>
                  <p>{ABOUT_PAGE_CONTENT.faculty.paragraphs[1]}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[500px] h-[300px] md:h-[500px] relative overflow-hidden order-1 md:order-2"
            >
              <Image src={ABOUT_PAGE_CONTENT.faculty.image} alt="Faculty" fill className="object-contain" />
            </motion.div>
          </div>

          {/* Block: Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[500px] h-[400px] md:h-[500px] relative group"
            >
              <Image src={ABOUT_PAGE_CONTENT.team.image} alt="Dedicated Support" fill className="object-contain" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="pr-4 md:pr-10">
                <span className="text-xs uppercase tracking-widest text-[#8b5091] font-bold mb-3 block">
                  Support Team
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                  {ABOUT_PAGE_CONTENT.team.sectionTitle}
                </h2>
                <h3 className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6">
                  {ABOUT_PAGE_CONTENT.team.members}
                </h3>
                <div className="space-y-5 text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-light">
                  <p>{ABOUT_PAGE_CONTENT.team.paragraphs[0]}</p>
                  <p>{ABOUT_PAGE_CONTENT.team.paragraphs[1]}</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. VISION + CORE VALUES — REDESIGNED */}
      <section className="py-28 md:py-36 bg-slate-50 dark:bg-[#08090d] relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #8b5091 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-bold mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              {ABOUT_PAGE_CONTENT.vision.sectionTitle}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              {ABOUT_PAGE_CONTENT.vision.paragraphs[0]}
            </p>
          </motion.div>

          {/* Dashed column grid — icon top, title + description bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-dashed border-slate-300 dark:border-slate-700">
            {ABOUT_PAGE_CONTENT.coreValues.map((val, idx) => {
              const IconComponent = getIconComponent(val.icon);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`
                    group relative flex flex-col justify-between
                    p-8 md:p-10 min-h-[280px]
                    ${idx < 3 ? "border-b lg:border-b-0 lg:border-r border-dashed border-slate-300 dark:border-slate-700" : ""}
                    ${idx === 1 ? "sm:border-r-0 lg:border-r border-dashed border-slate-300 dark:border-slate-700" : ""}
                  `}
                >
                  {/* Icon — top left */}
                  <div className="mb-auto">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${val.color}15` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: val.color }} />
                    </div>
                  </div>

                  {/* Title + description — bottom */}
                  <div className="mt-12">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. MINIMAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 dark:bg-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/20 blur-[100px] pointer-events-none rounded-full max-w-4xl" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Transform Your Journey?
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light max-w-2xl mx-auto">
              Master the markets with Legacy85's expert guidance. Real results. No false promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                Explore Courses <BookOpen className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}