"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, PlayCircle, BookOpen } from "lucide-react";

export default function PremiumCourses() {
  const courses = [
    {
      id: "fundamental",
      title: "Fundamental Framework: Foundations of Intelligent Investing",
      subtitle:
        "Master the principles of intelligent investing to create sustained wealth through strategic stock selection.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Master Core Investment Principles - Understand the foundations of equity investing and business models",
        "In-Depth Company Analysis - Decode financial statements, profit drivers, and cash flow sustainability",
        "Stock Valuation Techniques - Apply methods such as DCF, P/E, EV/EBITDA for accurate intrinsic value estimation",
      ],
      description:
        "Premium course tailored for professionals and investors who seek to outperform the market with sound, research-driven investment decisions.",
    },
    {
      id: "equity",
      title: "Equity Edge: Momentum & Price-Action Mastery",
      subtitle:
        "Decode the heartbeat of the market through actionable price structures and momentum cycles.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Price Action Analysis - Learn to identify breakout and breakdown zones",
        "Momentum Strategies - Build confidence in directional trading using momentum indicators",
        "Risk-Reward & Trade Management - Construct trades with optimal risk-reward ratios",
      ],
      description:
        "This flagship course is tailored for traders who seek to master the art and science of equity trading through momentum-based setups and price action patterns.",
    },
    {
      id: "derivatives",
      title: "The Derivatives Pro: Institutional Tactics for Retail Traders",
      subtitle:
        "Gain an edge where the big money plays—with proven strategies in futures and options.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Institutional Derivatives Frameworks - Understand how big players build and unwind positions",
        "Options Strategy Engineering - Build multi-leg option strategies for directional and neutral views",
        "Smart Risk & Portfolio Hedging - Apply real-world risk management techniques",
      ],
      description:
        "Designed for ambitious retail traders ready to elevate their game, bridging the gap between conventional market knowledge and sophisticated techniques.",
    },
    {
      id: "forex",
      title: "Forex Formula: Mastering Currencies & Market Cycles",
      subtitle:
        "Step into the world's largest financial market with precision, strategy, and global insight.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Global Market Analysis & Economic Drivers - Understand how inflation, interest rates affect currency trends",
        "Advanced Currency Trading Strategies - Master breakout, carry trade, and trend-following strategies",
        "Risk Management & Capital Protection - Build forex trading plans with position sizing and leverage control",
      ],
      description:
        "Navigate currency markets with the confidence and discipline of institutional players, delivering deep insights into global macroeconomics.",
    },
    {
      id: "commodity",
      title: "Commodity Compass: Smart Trading in Gold & Silver",
      subtitle:
        "Master the art of precision trading in the world's most enduring assets—gold and silver.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Market Structure & Economic Drivers - Understand how global inflation and USD performance impact bullion prices",
        "Trading Gold & Silver Contracts - Learn how to navigate MCX and international commodity exchanges",
        "Technical & Sentiment Analysis - Apply trend analysis and candlestick setups tailored for metals",
      ],
      description:
        "Strategic roadmap for traders seeking to capitalize on price movements in precious metals, anchored in macroeconomic fundamentals.",
    },
    {
      id: "mutual-funds",
      title: "Mutual Fund Mastery: Compounding Wealth System",
      subtitle:
        "Learn how to build long-term wealth using expert-backed mutual fund strategies.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "Strategic Wealth Creation - Understand the power of compounding, SIP planning, and portfolio diversification",
        "Fund Analysis & Evaluation - Learn to assess fund performance using risk-return metrics",
        "Regulatory & Tax Framework - Gain clarity on capital gains taxation and regulatory safeguards",
      ],
      description:
        "Structured course designed to empower individuals with the knowledge to make informed, goal-oriented investment decisions through mutual funds.",
    },
  ];

  return (
    <section className="w-full py-20  px-4 sm:px-8 lg:px-16 ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Premium Courses
        </h2>
        <p className="text-gray-600 mt-3">
          Comprehensive programs designed to transform you from a beginner to a
          professional trader and investor
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="fundamental" className="max-w-5xl mx-auto">
        <TabsList className="flex flex-wrap justify-center gap-3 mb-8 bg-transparent">
          {courses.map((course) => (
            <TabsTrigger
              key={course.id}
              value={course.id}
              className="px-4 py-2 rounded-full border text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white shadow-sm"
            >
              {course.title.split(":")[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {courses.map((course) => (
          <TabsContent key={course.id} value={course.id}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-r ${course.gradient} p-6`}
              >
                <h3 className="text-2xl font-bold text-white">
                  {course.title}
                </h3>
                <p className="text-white/90 mt-2 max-w-3xl">{course.subtitle}</p>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Left: Overview */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3">
                    Course Overview
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 mt-6 flex-wrap">
                    <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition flex items-center gap-2">
                      Enroll Now
                    </button>
                    <button className="px-5 py-3 rounded-lg border font-medium text-gray-700 hover:bg-gray-100 transition">
                      Learn More
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 rounded-lg border font-medium text-gray-700 hover:bg-gray-100 transition">
                      <PlayCircle className="w-5 h-5" />
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Right: What You'll Learn */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3">
                    What You'll Learn
                  </h4>
                  <ul className="space-y-4 text-gray-700">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
