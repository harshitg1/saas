'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Shield, MapPin, CheckCircle, TrendingUp } from 'lucide-react';
import CandlestickStrip from './candle';

export default function WhyChooseUs() {
  const differentiators = [
    { icon: Users, title: 'Built by Practitioners', description: 'Real market experience, not just theory.', color: 'from-blue-500 to-blue-400' },
    { icon: Shield, title: 'No False Promises', description: 'Ethical, data-driven skill teaching.', color: 'from-green-500 to-green-400' },
    { icon: MapPin, title: 'Tier-II India First', description: 'Education focused on regional cities.', color: 'from-purple-500 to-purple-400' },
    { icon: Award, title: 'Ethics First', description: 'No shortcuts, no manipulation.', color: 'from-orange-500 to-orange-400' },
  ];

  const skills = [
    'Analyze Nifty, Bank Nifty & sectoral indices using volume profiles & order flow',
    'Construct high-performance portfolios with strategic asset allocation',
    'Leverage TradingView, Screener.in & Fibonacci structures for precise entries',
    'Manage risk like a fund manager with ATR & drawdown controls'
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-purple-300/30 blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl z-0"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Why <span className="text-primary">Legacy85</span> is Different
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We deliver financial education with clarity, precision, and real market impact.
          </p>
        </motion.div>

        {/* Candlestick Strip */}
        <CandlestickStrip/>

        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl p-4 bg-white shadow-md hover:scale-105 transition-transform border border-gray-200">
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-tr ${item.color} opacity-20 blur-2xl`}></div>
                <item.icon className="h-8 w-8 text-gray-900 mb-2 relative z-10" />
                <h3 className="text-lg font-semibold relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 relative z-10">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="rounded-2xl shadow-md border-0 bg-gradient-to-tr from-white/80 via-blue-50/50 to-indigo-50/80 backdrop-blur-sm">
            <CardHeader className="p-3">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl font-semibold">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                What You'll Master
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-700">{skill}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
