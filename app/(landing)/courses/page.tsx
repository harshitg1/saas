'use client';
import { useState } from "react";
import { Search, Grid, List, Clock, Users, Star, BookOpen, Code, Briefcase, Palette, TrendingUp, Award, Layers, Play, FileText, Download, CheckCircle, ArrowLeft, Video, Lock, MessageCircle } from "lucide-react";

// Type Definitions
interface Lecture {
  title: string;
  duration?: string;
  type: "video" | "section";
  isPreview?: boolean;
  videos?: number;
  previews?: number;
}

interface CourseSection {
  section: string;
  chapters: number;
  videos: number;
  previews: number;
  quizzes?: number;
  resources?: number;
  questions?: number;
  lectures: Lecture[];
}

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  instructorTitle: string;
  students: number;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  icon: string;
  description: string;
  discount: string;
  lastUpdated: string;
  videoLessons: number;
  quizzes: number;
  resources: number;
  onlineJudge: number;
  courseContent: CourseSection[];
  learningPoints: string[];
}

interface Category {
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories: Category[] = [
    { name: "All Courses", count: 3, icon: BookOpen },
    { name: "Basic", count: 1, icon: TrendingUp },
    { name: "Medium", count: 1, icon: Layers },
    { name: "Advanced", count: 1, icon: Palette },
  ];

  const instructors: string[] = [
    "Manvendra Singh",
  ];

  const priceRanges: string[] = [
    "All Courses",
    "Free Courses",
    "Premium Courses",
    "Discounted",
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Basic Stock Market Course",
      category: "Basic",
      instructor: "Manvendra Singh",
      instructorTitle: "Senior Trading Instructor",
      students: 15420,
      price: "₹4,999.00",
      originalPrice: "₹9,999.00",
      rating: 4.8,
      reviews: 3245,
      image: "bg-gradient-to-br from-emerald-300 via-teal-200 to-cyan-200",
      icon: "📈",
      description: "Start your journey in the stock market from scratch. Learn how the market works, how to buy/sell shares, understand basic fundamental analysis, and build a long-term portfolio.",
      discount: "50% OFF",
      lastUpdated: "05/2025",
      videoLessons: 85,
      quizzes: 12,
      resources: 20,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Stock Market Basics",
          chapters: 4,
          videos: 15,
          previews: 3,
          lectures: [
            { title: "What is the Stock Market?", duration: "10:15", type: "video", isPreview: true },
            { title: "How do Exchanges Work?", duration: "12:30", type: "video", isPreview: true },
            { title: "Opening a Demat Account", duration: "08:45", type: "video", isPreview: true }
          ]
        }
      ],
      learningPoints: [
        "Understand the core mechanics of the stock market",
        "Learn how to evaluate companies and read financial statements",
        "Differentiate between trading and investing",
        "Build a diversified, risk-adjusted portfolio"
      ]
    },
    {
      id: 2,
      title: "Medium Trading Strategies",
      category: "Medium",
      instructor: "Manvendra Singh",
      instructorTitle: "Senior Trading Instructor",
      students: 8250,
      price: "₹7,499.00",
      originalPrice: "₹14,999.00",
      rating: 4.9,
      reviews: 1850,
      image: "bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300",
      icon: "⚡",
      description: "Master complex options strategies like Iron Condors, Straddles, and Credit Spreads. Learn the nuances of option Greeks, implied volatility, and risk management.",
      discount: "50% OFF",
      lastUpdated: "04/2025",
      videoLessons: 110,
      quizzes: 20,
      resources: 45,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Options Fundamentals Refresher",
          chapters: 5,
          videos: 12,
          previews: 2,
          lectures: [
            { title: "Call vs Put Options", duration: "14:20", type: "video", isPreview: true },
            { title: "Understanding Option Pricing", duration: "18:05", type: "video", isPreview: false }
          ]
        }
      ],
      learningPoints: [
        "Master the Option Greeks (Delta, Gamma, Theta, Vega)",
        "Deploy advanced strategies in bullish, bearish, and neutral markets",
        "Hedge your existing equity portfolio using derivatives",
        "Manage risk and position sizing like a professional institution"
      ]
    },
    {
      id: 3,
      title: "Advanced Intraday Techniques",
      category: "Advanced",
      instructor: "Manvendra Singh",
      instructorTitle: "Senior Trading Instructor",
      students: 12340,
      price: "₹12,999.00",
      originalPrice: "₹24,999.00",
      rating: 4.7,
      reviews: 2410,
      image: "bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200",
      icon: "🎯",
      description: "Learn to read price charts, identify trends, and use technical indicators like RSI, MACD, and moving averages to time your market entries and exits.",
      discount: "50% OFF",
      lastUpdated: "03/2025",
      videoLessons: 95,
      quizzes: 15,
      resources: 35,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Charting Basics",
          chapters: 6,
          videos: 20,
          previews: 4,
          lectures: [
            { title: "Introduction to Candlesticks", duration: "11:45", type: "video", isPreview: true }
          ]
        }
      ],
      learningPoints: [
        "Master candlestick patterns and chart formations",
        "Combine price action with volume analysis",
        "Setup high-probability day trades and swing trades",
        "Build customized trading setups and scanners"
      ]
    }
  ];

  const handleCourseClick = (course: Course): void => {
    setSelectedCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCourses = (): void => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <button 
            onClick={handleBackToCourses}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium mb-8 transition-colors group"
          >
            <div className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-purple-200 dark:group-hover:border-purple-900/50 shadow-sm transition-all group-hover:-translate-x-1">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Courses
          </button>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="xl:col-span-2 space-y-10">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
                  {selectedCourse.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Instructor & Stats */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pb-8 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-md border-2 border-white dark:border-slate-900 flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-lg">{selectedCourse.instructor}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{selectedCourse.instructorTitle}</p>
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-900 dark:text-white text-base">{selectedCourse.rating}</span>
                    <span className="text-slate-500 dark:text-slate-400">({selectedCourse.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span>{selectedCourse.students.toLocaleString()}+ Students</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span>Updated {selectedCourse.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* What will you learn */}
              <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-500" />
                  What you'll learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {selectedCourse.learningPoints.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Course Content</h2>
                <div className="space-y-4">
                  {selectedCourse.courseContent.map((section: CourseSection, idx: number) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm group">
                      <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50 group-hover:bg-slate-50 dark:group-hover:bg-slate-800/50 transition-colors">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{section.section}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">{section.chapters} Chapters</span>
                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">{section.videos} Videos</span>
                            {section.quizzes && <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">{section.quizzes} Quizzes</span>}
                            {section.resources && <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">{section.resources} Resources</span>}
                            {section.questions && <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">{section.questions} Questions</span>}
                          </div>
                        </div>
                        <span className="text-xs font-bold px-3 py-1.5 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-full border border-green-200 dark:border-green-500/20 whitespace-nowrap">
                          {section.previews} Free Previews
                        </span>
                      </div>

                      {/* Lectures */}
                      {section.lectures.length > 0 && (
                        <div className="border-t border-slate-200 dark:border-slate-800">
                          {section.lectures.map((lecture: Lecture, lectureIdx: number) => (
                            <div key={lectureIdx} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800/50 last:border-0 transition-colors">
                              <div className="flex items-center gap-3">
                                {lecture.type === 'video' ? (
                                  lecture.isPreview ? <Play className="w-4 h-4 text-purple-500" fill="currentColor" /> : <Lock className="w-4 h-4 text-slate-400" />
                                ) : (
                                  <Layers className="w-4 h-4 text-indigo-500" />
                                )}
                                <span className={`text-sm font-medium ${lecture.isPreview ? 'text-slate-900 dark:text-white cursor-pointer hover:text-purple-600 dark:hover:text-purple-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                  {lecture.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                {lecture.type === 'section' ? (
                                  <>
                                    <span className="text-xs font-medium text-slate-500">{lecture.videos} Videos</span>
                                    {lecture.previews ? <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded border border-green-200 dark:border-green-500/20">{lecture.previews} Previews</span> : null}
                                  </>
                                ) : (
                                  <>
                                    {lecture.isPreview && (
                                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 rounded border border-purple-200 dark:border-purple-500/20 hidden sm:inline-block">Preview</span>
                                    )}
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">{lecture.duration}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-1">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-2xl shadow-slate-200/20 dark:shadow-none sticky top-28">
                {/* Course Image Header */}
                <div className={`${selectedCourse.image} rounded-2xl h-52 mb-8 flex items-center justify-center text-7xl relative overflow-hidden shadow-inner`}>
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20" />
                  <span className="relative z-10 drop-shadow-md">{selectedCourse.icon}</span>
                  {selectedCourse.discount && (
                    <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg border border-slate-100 dark:border-slate-700/50">
                      🎟️ {selectedCourse.discount}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex flex-col mb-1">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{selectedCourse.price}</span>
                    <span className="text-lg text-slate-400 dark:text-slate-500 line-through font-medium">{selectedCourse.originalPrice}</span>
                  </div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Limited time offer!
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-8">
                  <button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 py-3.5 rounded-xl font-bold shadow-lg shadow-slate-900/10 dark:shadow-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 text-base">
                    Enroll Now
                  </button>
                  <button className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 py-3.5 rounded-xl font-bold transition-all text-base flex justify-center items-center gap-2">
                    Start Free Trial
                  </button>
                </div>

                {/* Course Includes */}
                <div className="mb-0">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-base">This course includes:</h3>
                  <div className="space-y-3.5 text-sm">
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Video className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </div>
                      <span className="font-medium">{selectedCourse.videoLessons}+ Video Lessons</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </div>
                      <span className="font-medium">{selectedCourse.quizzes}+ Practice Quizzes</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Download className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </div>
                      <span className="font-medium">{selectedCourse.resources}+ Downloadable Resources</span>
                    </div>
                    {selectedCourse.onlineJudge > 0 && (
                      <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                          <Code className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        </div>
                        <span className="font-medium">{selectedCourse.onlineJudge}+ Coding Exercises</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </div>
                      <span className="font-medium">Certificate of Completion</span>
                    </div>
                  </div>
                </div>
                
                {/* Consultation */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">Need help choosing a course?</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                    <MessageCircle className="w-4 h-4" />
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden flex items-center justify-center border-b border-slate-200/50 dark:border-slate-800/50">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md mb-8 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
             <span className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
               Explore
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Courses</span> Catalog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
            Discover our premium programs and unlock your potential with expert-led financial education.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-xl shadow-slate-200/20 dark:shadow-none">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-shadow"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Course Categories */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-xl shadow-slate-200/20 dark:shadow-none">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Categories</h3>
              <div className="space-y-1">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="font-medium text-sm">{cat.name}</span>
                    </div>
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-500 dark:text-slate-400">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Instructors */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-xl shadow-slate-200/20 dark:shadow-none">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Instructors</h3>
              <div className="space-y-1">
                {instructors.map((instructor, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                  >
                    <span className="font-medium text-sm">{instructor}</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-500 dark:text-slate-400">3</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price With Courses */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 shadow-xl shadow-slate-200/20 dark:shadow-none">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-lg">Pricing Options</h3>
              <div className="space-y-1">
                {priceRanges.map((range, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                  >
                    <span className="font-medium text-sm">{range}</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-500 dark:text-slate-400">3</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                We found <span className="font-bold text-slate-900 dark:text-white">3 courses</span> for you
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 hidden sm:flex">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Sort By:</span>
                  <select className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500/50 text-slate-700 dark:text-slate-300 font-medium cursor-pointer">
                    <option>Latest</option>
                    <option>Popular</option>
                    <option>Rating</option>
                  </select>
                </div>
                <div className="flex gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  onClick={() => handleCourseClick(course)}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-lg shadow-slate-200/20 dark:shadow-none border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col"
                >
                  {/* Course Image */}
                  <div className={`${course.image} h-48 flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{course.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-100/50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs rounded-full font-bold uppercase tracking-wider">
                        {course.category}
                      </span>
                      <span className="text-slate-900 dark:text-white font-extrabold text-lg">{course.price}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 text-lg leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-3 mb-5 mt-auto">
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-full flex-shrink-0 border-2 border-white dark:border-slate-900 shadow-sm"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 truncate">{course.instructor}</p>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          <Users className="w-3.5 h-3.5" />
                          <span>{course.students.toLocaleString()} Students</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 relative">
                      <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"}`}
                          />
                        ))}
                        </div>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">{course.rating}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">({course.reviews})</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowLeft className="w-4 h-4 text-slate-400 dark:text-slate-500 rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-purple-50 hover:border-purple-600 hover:text-purple-600">
                Previous
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">1</button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-purple-50 hover:border-purple-600 hover:text-purple-600">2</button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-purple-50 hover:border-purple-600 hover:text-purple-600">3</button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-purple-50 hover:border-purple-600 hover:text-purple-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}