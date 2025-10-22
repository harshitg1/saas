"use client";

import React from "react";
import { Calendar, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const Events = () => {
  const blogs = [
    {
      id: 1,
      date: "09 Sep 2022",
      title: "Best Tally Institute Near Me",
      image: "/blog-1.jpg",
    },
    {
      id: 2,
      date: "17 May 2022",
      title: "Tally Class Near Me | Search & Choose Your Course Now",
      image: "/blog-2.jpg",
    },
  ];

  const eventLists = [
    {
      id: 1,
      day: "02",
      month: "May 2025",
      title: "Campus Drive | ICA Dalhousie and Chowringhee",
      location: "Dalhousie",
    },
    {
      id: 2,
      day: "23",
      month: "May 2025",
      title: "Finance Skilling Training Program | ICA Kashmir",
      location: "Jammu",
    },
    {
      id: 3,
      day: "07",
      month: "May 2025",
      title: "Mega Campus Drive 2025 | ICA Bandra",
      location: "Bandra",
    },
  ];

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Blogs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Latest <span className="text-theme-primary">Blogs</span>.
              </h2>
              <div className="w-12 h-1 bg-theme-primary rounded-full"></div>
            </div>

            <div className="space-y-4">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-primary/20 to-theme-primary/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-theme-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight group-hover:text-theme-primary transition-colors">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-theme-primary font-medium text-sm hover:gap-3 transition-all duration-300 group">
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Event Lists Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Event <span className="text-theme-primary">Lists</span>
              </h2>
              <div className="w-12 h-1 bg-theme-primary rounded-full"></div>
            </div>

            <div className="space-y-4">
              {eventLists.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {event.day}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                        {event.month}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-2 group-hover:text-theme-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {event.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-theme-primary font-medium text-sm hover:gap-3 transition-all duration-300 group">
              <Calendar className="w-4 h-4" />
              Check Calendar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Latest Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Latest <span className="text-theme-primary">Video</span>.
              </h2>
              <div className="w-12 h-1 bg-theme-primary rounded-full"></div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-blue-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group">
                    <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white font-semibold text-sm">
                      BE AN ACCOUNTS MANAGER BEFORE 30!
                    </h3>
                    <p className="text-white/80 text-xs mt-1">
                      Acquire the Right Skills Now!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Learning With ICA Edu Skills.
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Certified Industrial Accountant | Accounting Training
                  Institute | Placement Support | ICA Edu Skills.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 text-theme-primary font-medium text-sm hover:gap-3 transition-all duration-300 group">
              View All Videos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
