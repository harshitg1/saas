"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Users,
  LineChart,
  Award,
  ChevronRight,
  BarChart2,
  CheckCircle,
} from "lucide-react";

interface MentoringStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function MentoringComponent() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const mentoringSteps: MentoringStep[] = [
    {
      id: "step-01",
      title: "Market Analysis",
      description:
        "Deep dive into market patterns with personalized guidance to identify high-probability trading opportunities.",
      icon: <LineChart className="w-8 h-8" />,
      color: "bg-theme-primary/20 text-theme-primary",
    },
    {
      id: "step-02",
      title: "Strategy Development",
      description:
        "Build custom trading systems aligned with your risk tolerance and financial goals.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-theme-primary/20 text-theme-primary",
    },
    {
      id: "step-03",
      title: "Portfolio Management",
      description:
        "Learn risk management techniques and position sizing to protect and grow your trading capital.",
      icon: <BarChart2 className="w-8 h-8" />,
      color: "bg-theme-primary/20 text-theme-primary",
    },
    {
      id: "step-04",
      title: "Performance Coaching",
      description:
        "Regular review sessions to analyze trading psychology and optimize decision-making processes.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-theme-primary/20 text-theme-primary",
    },
  ];

  return (
    <section className="relative p-20 bg-gradient-to-br from-slate-100 via-white to-purple-50 overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -left-[10%] w-[35%] h-[35%]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-25"
          >
            <path
              fill="#83338b"
              d="M40.8,-56.1C54.4,-51.5,67.8,-42.7,74.3,-30C80.9,-17.3,80.5,-0.6,76.8,14.4C73.1,29.3,66,42.5,54.9,52.1C43.8,61.8,28.6,67.8,12.4,72.3C-3.7,76.8,-20.9,79.7,-34.8,73.8C-48.8,67.9,-59.4,53.1,-67.6,37.2C-75.8,21.2,-81.6,4.1,-78.8,-11.3C-76,-26.6,-64.6,-40.3,-50.8,-45.3C-36.9,-50.2,-20.5,-46.4,-5.7,-39.8C9.1,-33.2,27.2,-60.6,40.8,-56.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="absolute top-[60%] -right-[5%] w-[25%] h-[25%]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-20"
          >
            <path
              fill="#a346ae"
              d="M44.7,-76.2C58.9,-69.3,72,-58.7,79.9,-44.7C87.8,-30.7,90.6,-13.4,88.8,3.1C87,19.7,80.6,35.3,70.4,47.9C60.2,60.5,46.3,69.9,31.1,75.6C15.9,81.3,-0.7,83.1,-16.2,79.6C-31.7,76.1,-46.2,67.2,-57.4,55.2C-68.6,43.3,-76.4,28.2,-80.2,11.8C-84,-4.7,-83.8,-22.4,-76.4,-36.4C-69,-50.4,-54.5,-60.7,-39.7,-67.2C-25,-73.7,-9.9,-76.4,3.9,-82.6C17.8,-88.9,30.5,-83.1,44.7,-76.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="absolute top-1/4 left-1/3 w-[18%] h-[18%]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-15"
          >
            <path
              fill="#c682cf"
              d="M43.4,-73.2C57.2,-67.3,70.2,-57.9,77.8,-45C85.4,-32.2,87.6,-16.1,86.3,-0.7C85,14.6,80.3,29.3,72.4,42C64.6,54.8,53.5,65.7,40.5,73.1C27.4,80.5,12.4,84.4,-0.9,85.9C-14.2,87.4,-25.7,86.5,-38.9,81.6C-52.2,76.7,-67.1,67.7,-76.2,54.6C-85.3,41.5,-88.5,24.2,-87.8,7.6C-87.2,-9,-82.5,-18,-75.9,-29.6C-69.3,-41.3,-60.7,-55.6,-48.5,-62.8C-36.3,-70.1,-20.6,-70.2,-4.4,-63.7C11.8,-57.2,29.6,-79.2,43.4,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        {/* Decorative Lines */}
        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-theme-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Left-Right Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 rounded-full bg-theme-primary/20 backdrop-blur-sm mb-4">
              <span className="text-sm font-semibold tracking-wide text-theme-primary uppercase">
                Personalized Mentorship
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              How We Deliver
              <span className="block text-theme-primary mt-1">Outstanding</span>
              <span className="block">Mentoring Results</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              Creating cutting-edge trading education that combines innovation
              and functionality to meet the evolving needs of tomorrow's
              financial markets and traders.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "One-on-one personalized mentoring",
                "Live trade analysis and execution",
                "24/7 trader support community",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-theme-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Flow with Graphic Elements */}
        <div className="relative">
          {/* Decorative graphic element */}
          <div className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-br from-theme-primary/5 to-purple-100/50 blur-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line through all cards */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-theme-primary/40 via-theme-primary/60 to-theme-primary/40 hidden lg:block"></div>

            {mentoringSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 z-10 
                  ${
                    hoveredStep === step.id
                      ? "transform -translate-y-3"
                      : "hover:-translate-y-2"
                  }
                  ${
                    hoveredStep === step.id
                      ? "shadow-2xl shadow-theme-primary/20"
                      : "hover:shadow-xl"
                  }
                `}
              >
                {/* Step number indicator */}
                <div className="absolute -top-3 -left-3 px-3 py-1 rounded-full bg-theme-primary text-white text-xs font-bold">
                  Step-{String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`${step.color} p-4 rounded-lg inline-flex items-center justify-center mb-6`}
                >
                  {step.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-600 mb-6">{step.description}</p>

                <div
                  className={`inline-flex items-center mt-2 text-sm font-medium transition-colors duration-300 group
                    ${
                      hoveredStep === step.id
                        ? "text-theme-primary"
                        : "text-slate-500"
                    }
                  `}
                >
                  <span>Learn more</span>
                  <ChevronRight
                    className={`ml-1 w-4 h-4 transition-transform duration-300 
                      ${
                        hoveredStep === step.id ? "transform translate-x-1" : ""
                      }
                    `}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Visual Element - Trading Chart Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 bg-white rounded-2xl p-8 shadow-xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-purple-50 opacity-70"></div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to elevate your trading skills?
              </h3>
              <p className="text-slate-600 mb-6">
                Join over 4,000+ traders who have transformed their approach to
                markets through our personalized mentoring program. Experience
                the difference expert guidance makes.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-theme-primary hover:bg-theme-primary/90 text-white font-semibold rounded-lg shadow-lg shadow-theme-primary/20 hover:shadow-xl hover:shadow-theme-primary/30 transition-all duration-300 flex items-center">
                  <Users className="mr-2 w-5 h-5" />
                  <span>Join Our Program</span>
                </button>

                <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold rounded-lg transition-all duration-300 flex items-center">
                  <BookOpen className="mr-2 w-5 h-5" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 h-64 relative">
              {/* Trading Chart Graphic */}
              <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/5 to-theme-primary/10 rounded-xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-500/20 to-transparent"></div>

              {/* Simulated Trading Chart */}
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <path
                  d="M0,150 C20,130 40,170 60,150 C80,130 100,140 120,120 C140,100 160,110 180,90 C200,70 220,50 240,40 C260,30 280,60 300,70 C320,80 340,60 360,50 C380,40 400,60 420,70"
                  fill="none"
                  stroke="#83338b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0,150 C20,140 40,160 60,140 C80,120 100,130 120,110 C140,90 160,100 180,80 C200,60 220,40 240,30"
                  fill="none"
                  stroke="#a346ae"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                />

                {/* Trend points */}
                <circle cx="120" cy="110" r="4" fill="#83338b" />
                <circle cx="180" cy="80" r="4" fill="#83338b" />
                <circle cx="240" cy="30" r="4" fill="#83338b" />
                <circle cx="300" cy="70" r="4" fill="#83338b" />
              </svg>

              {/* Trading Stats floating */}
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-slate-100">
                <div className="text-xs text-slate-500">Success Rate</div>
                <div className="text-lg font-bold text-theme-primary">92%</div>
              </div>

              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-slate-100">
                <div className="text-xs text-slate-500">Average Growth</div>
                <div className="text-lg font-bold text-green-500">+31%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for background grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(131, 51, 139, 0.15) 1px,
            transparent 0
          );
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}
