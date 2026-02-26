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
  // Page Header
  pageHeader: {
    title: "About Legacy85",
    subtitle: "Empowering Financial Futures Through Excellence",
    description: "Discover the vision, expertise, and dedication that makes Legacy85 Kanpur's premier trading education academy.",
  },

  // Honorary Directors Section
  directors: {
    sectionTitle: "Honorary Directors",
    sectionSubtitle: "Market Visionaries & Educational Leaders",
    names: "Manvendra Singh & VN Singh",
    image: "/manvendra.jpeg", // Update with actual image
    paragraphs: [
      "Our distinguished Honorary Directors represent decades of combined expertise in capital markets, institutional finance, and educational leadership. These visionaries have weathered multiple market cycles, from the dot-com boom to the 2008 financial crisis, accumulating invaluable insights that form the cornerstone of our educational philosophy.",
      "Their approach transcends traditional academic frameworks, emphasizing practical market psychology, risk assessment, and the cultivation of disciplined investment thinking. Having mentored thousands of successful traders and investors, they understand that true financial literacy extends beyond technical analysis to encompass emotional intelligence, behavioral finance, and the development of a robust investment mindset.",
      "Each Honorary Director brings unique perspectives from diverse financial sectors - from equity research and derivative strategies to wealth management and regulatory compliance. Their collective wisdom ensures our curriculum remains current with evolving market dynamics while honoring time-tested investment principles.",
    ],
  },

  // Respected Faculty Section
  faculty: {
    sectionTitle: "Respected Faculty",
    sectionSubtitle: "Masters of Market Craft",
    leadName: "Manvendra Singh",
    image: "/manvendra.jpeg", // Update with actual image
    paragraphs: [
      "Our faculty represents the elite tier of financial education professionals, combining advanced academic credentials with real-world trading expertise. These seasoned practitioners have successfully navigated volatile markets, managing portfolios worth millions while simultaneously developing innovative teaching methodologies that bridge theory and practice.",
      "Their teaching philosophy centers on experiential learning, utilizing live market simulations, case study analysis, and interactive trading environments. Each faculty member specializes in distinct areas - from options strategies and technical analysis to fundamental research and portfolio construction - ensuring comprehensive coverage of market disciplines.",
      "Beyond their technical expertise, our faculty members are passionate educators who understand that every student's journey is unique. They employ diverse pedagogical approaches, from visual learning techniques for complex derivatives to hands-on workshops for risk management strategies. Their commitment extends beyond classroom instruction, providing ongoing mentorship and career guidance to help students transition from novice learners to confident market participants.",
    ],
  },

  // Team Section
  team: {
    sectionTitle: "Hardworking Team",
    sectionSubtitle: "Your Success Partners",
    members: "Siddhant Singh ",
    image: "/sid.png", // Update with actual image
    paragraphs: [
      "Behind every successful educational institution stands a dedicated team of professionals committed to student achievement. Our support team encompasses academic coordinators, technology specialists, student advisors, and administrative professionals who collectively ensure a seamless learning experience.",
      "Their responsibilities extend far beyond traditional administrative functions. They actively monitor student progress, coordinate personalized learning paths, facilitate peer collaboration, and maintain cutting-edge educational technology platforms. Understanding that financial education can be overwhelming, they provide compassionate guidance and practical support throughout each student's journey.",
      "Our team's dedication manifests in countless ways - from late-night technical support for online learning platforms to personalized career counseling sessions. They celebrate each student milestone, whether it's mastering candlestick patterns or executing their first successful options strategy. Their unwavering commitment creates an environment where learning flourishes and confidence grows.",
    ],
  },

  // Vision Statement
  vision: {
    sectionTitle: "Vision Statement",
    sectionSubtitle: "Transforming Financial Futures",
    paragraphs: [
      "Legacy85 envisions a world where financial literacy empowers every individual to build sustainable wealth and achieve economic independence. We are committed to democratizing market education, making sophisticated investment strategies accessible to aspiring traders and investors regardless of their background or experience level.",
      "Our mission extends beyond traditional education delivery. We aim to cultivate a generation of informed market participants who understand risk management, embrace disciplined decision-making, and contribute to market efficiency through educated participation. Through innovative teaching methodologies, cutting-edge technology, and personalized mentorship, we transform complex financial concepts into actionable knowledge.",
      "We believe that true financial education creates lasting behavioral change, instilling the confidence and competence necessary for long-term investment success. By fostering analytical thinking, emotional discipline, and strategic planning capabilities, we prepare students not just for immediate market participation, but for a lifetime of informed financial decision-making.",
    ],
  },

  // Core Values
  coreValues: [
    {
      icon: "Shield",
      title: "Built by Practitioners",
      description: "Real market experience, not just theory.",
      color: "#8b5091",
    },
    {
      icon: "Target",
      title: "Tier-II India First",
      description: "Empowering traders in regional markets.",
      color: "#8b5091",
    },
    {
      icon: "Award",
      title: "Ethics First",
      description: "No shortcuts, no manipulation.",
      color: "#8b5091",
    },
    {
      icon: "Heart",
      title: "No False Promises",
      description: "Realistic goals with proven teaching.",
      color: "#8b5091",
    },
  ],

  // Statistics
  statistics: [
    {
      number: "1,485+",
      label: "Trusted Clients",
      icon: "Users",
    },
    {
      number: "96%",
      label: "Satisfaction Rate",
      icon: "Award",
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: "TrendingUp",
    },
    {
      number: "30+%",
      label: "Average Portfolio Growth",
      icon: "LineChart",
    },
  ],

  // SEO
  seo: {
    title: "About Legacy85 - Premier Trading Education in Kanpur | Meet Our Team",
    description: "Learn about Legacy85's mission to democratize trading education in Kanpur. Meet our expert faculty, visionary directors, and dedicated team transforming financial futures since 2020.",
    keywords: [
      "about Legacy85",
      "trading academy Kanpur",
      "stock market education team",
      "financial education Kanpur",
      "trading mentors India",
    ],
  },
};

// ============================================
// Icon Mapping Helper
// ============================================
const getIconComponent = (iconName: string) => {
  const icons: any = {
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
  };
  return icons[iconName] || Users;
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ============================================
// Main About Page Component
// ============================================
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-primary/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20  md:pb-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
    
                {ABOUT_PAGE_CONTENT.pageHeader.subtitle}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600 dark:from-primary dark:to-indigo-400">Financial</span> Education.
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

      {/* 3. EDITORIAL SPLIT PANELS (Directors / Faculty) */}
      <section className="py-20 md:py-32 overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
          
          {/* Block 1: Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[500px] h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden  flex items-center justify-center  "
            >
              <Image src={ABOUT_PAGE_CONTENT.directors.image} alt="Directors" fill className="object-contain" />
              <div className="absolute inset-0  mix-blend-multiply" />
            </motion.div>

            {/* Text Minimal Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="pr-4 md:pr-10">
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-3 block">Leadership</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                  {ABOUT_PAGE_CONTENT.directors.sectionTitle}
                </h2>
                <h3 className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6">
                  {ABOUT_PAGE_CONTENT.directors.names}
                </h3>
                <div className="space-y-5 text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed font-light">
                  <p>{ABOUT_PAGE_CONTENT.directors.paragraphs[0]}</p>
                  <p>{ABOUT_PAGE_CONTENT.directors.paragraphs[1]}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Block 2: Faculty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text Minimal Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full order-2 md:order-1"
            >
              <div className="pl-4 md:pl-10 text-left md:text-right">
                <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-3 block">Education & Mentoring</span>
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

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" w-[500px] h-[300px] md:h-[500px] relative  overflow-hidden order-1 md:order-2"
            >
              <Image src={ABOUT_PAGE_CONTENT.faculty.image} alt="Faculty" fill className=" object-contain" />
              <div className="absolute inset-0  mix-blend-multiply" />
            </motion.div>
          </div>
          {/* Block 3: Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[500px] h-[400px] md:h-[500px] relative  group"
            >
              <Image src={ABOUT_PAGE_CONTENT.team.image} alt="Dedicated Support" fill className="object-contain" />
              <div className="absolute inset-0  mix-blend-multiply" />
            </motion.div>

            {/* Text Minimal Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="pr-4 md:pr-10">
                <span className="text-xs uppercase tracking-widest text-[#8b5091] font-bold mb-3 block">Support Team</span>
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

      {/* 4. VISION / CORE ELEGANT BENTO GRID */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              {ABOUT_PAGE_CONTENT.vision.sectionTitle}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {ABOUT_PAGE_CONTENT.vision.paragraphs[0]}
            </p>
          </motion.div>

          {/* Minimalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PAGE_CONTENT.coreValues.map((val, idx) => {
              const IconComponent = getIconComponent(val.icon);
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
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
              <a href="/courses" className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                Explore Courses <BookOpen className="w-4 h-4" />
              </a>
              <a href="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}