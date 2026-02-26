"use client";

import React from "react";
import { Calendar, ArrowRight, Play, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  const blogs = [
    {
      id: 1,
      date: "09 Sep 2022",
      title: "Best Tally Institute Near Me",
    },
    {
      id: 2,
      date: "17 May 2022",
      title: "Tally Class Near Me | Search & Choose Your Course Now",
    },
  ];

  const schedule = [
    {
      id: 1,
      days: "Mon – Fri",
      label: "Regular Classes",
      description: "In-depth coursework & practicals",
      icon: BookOpen,
      accent: "text-theme-primary",
      bg: "bg-theme-primary/8 dark:bg-theme-primary/10",
      border: "border-theme-primary/20",
      dot: "bg-theme-primary",
    },
    {
      id: 2,
      days: "Sat – Sun",
      label: "Orientation Sessions",
      description: "Guided onboarding for new batches",
      icon: Users,
      accent: "text-amber-500",
      bg: "bg-amber-50 dark:bg-amber-500/10",
      border: "border-amber-200 dark:border-amber-500/20",
      dot: "bg-amber-500",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Latest Blogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Latest <span className="text-theme-primary">Blogs</span>.
              </h2>
              <div className="w-8 h-0.5 bg-theme-primary rounded-full" />
            </div>

            <div className="space-y-3">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-theme-primary/30 hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-theme-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">{blog.date}</p>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug group-hover:text-theme-primary transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-1.5 text-theme-primary font-medium text-sm group">
              View All News
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Class Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Class <span className="text-theme-primary">Schedule</span>.
              </h2>
              <div className="w-8 h-0.5 bg-theme-primary rounded-full" />
            </div>

            <div className="p-1 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="px-5 pt-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-1">Weekly</p>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Learning at a Glance</h3>
              </div>

              <div className="p-3 space-y-2">
                {schedule.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} ${item.border} transition-all duration-300`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white dark:bg-slate-800 shadow-sm`}>
                      <item.icon className={`w-4.5 h-4.5 ${item.accent}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dot} flex-shrink-0`} />
                        <p className={`text-xs font-bold uppercase tracking-wider ${item.accent}`}>{item.days}</p>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">{item.label}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Latest Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Latest <span className="text-theme-primary">Video</span>.
              </h2>
              <div className="w-8 h-0.5 bg-theme-primary rounded-full" />
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm leading-tight">BE AN ACCOUNTS MANAGER BEFORE 30!</p>
                  <p className="text-white/70 text-xs mt-0.5">Acquire the Right Skills Now!</p>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Learning With ICA Edu Skills.
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Certified Industrial Accountant | Accounting Training Institute | Placement Support
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-theme-primary font-medium text-sm group">
              View All Videos
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Events;
