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
    { name: "All Courses", count: 2300, icon: BookOpen },
    { name: "Web Development", count: 450, icon: Code },
    { name: "Business", count: 380, icon: Briefcase },
    { name: "Graphic Design", count: 295, icon: Palette },
    { name: "Digital Marketing", count: 320, icon: TrendingUp },
    { name: "Photography", count: 180, icon: Layers },
    { name: "Data Science", count: 240, icon: Award },
  ];

  const instructors: string[] = [
    "Robert Fox",
    "Jane Cooper",
    "Wade Warren",
    "Esther Howard",
    "Jenny Wilson",
    "Guy Hawkins",
    "Kristin Watson",
    "Darrell Steward",
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
      title: "System Design Simplified",
      category: "Development",
      instructor: "Gaurav Sen",
      instructorTitle: "Ex Software Engineer @ Uber, Directi",
      students: 27764,
      price: "₹6,590.00",
      originalPrice: "₹13,180.00",
      rating: 4.6,
      reviews: 16799,
      image: "bg-gradient-to-br from-pink-300 via-purple-200 to-cyan-200",
      icon: "💻",
      description: "An A-Z video course on system design patterns and best practices. This course ranges from basic concepts like routing, load balancing and caching to advanced concepts like concurrency, separation of concerns, and design.",
      discount: "50% OFF",
      lastUpdated: "04/2025",
      videoLessons: 242,
      quizzes: 37,
      resources: 56,
      onlineJudge: 61,
      courseContent: [
        {
          section: "1. Basics",
          chapters: 3,
          videos: 12,
          previews: 12,
          lectures: [
            { title: "How do I use this course?", duration: "03:14", type: "video", isPreview: true },
            { title: "What do we offer?", duration: "03:14", type: "video", isPreview: true },
            { title: "Building an Ecommerce App: 1 to 1M", videos: 11, previews: 11, type: "section" }
          ]
        },
        {
          section: "2. Concepts",
          chapters: 11,
          videos: 64,
          quizzes: 13,
          resources: 5,
          questions: 3,
          previews: 8,
          lectures: [
            { title: "1. Databases Deep Dive", videos: 5, previews: 2, type: "section" },
            { title: "What are Databases?", duration: "04:39", type: "video", isPreview: true },
            { title: "Storage and Retrieval", duration: "04:24", type: "video", isPreview: true },
          ]
        }
      ],
      learningPoints: [
        "Learn system design fundamentals: eventual consistency, routing, caching, etc.",
        "Convert requirements into high-level system designs.",
        "Learn the internals of large-scale distributed systems like Facebook Memcached and Google Zanzibar.",
        "Design large-scale distributed systems with microservices.",
        "Identify and address design tradeoffs and single points of failure.",
        "Learn how an app is scaled from 1 to 1M users, using system design concepts."
      ]
    },
    {
      id: 2,
      title: "Career in Hotel: The pre level",
      category: "Business",
      instructor: "Robert Fox",
      instructorTitle: "Senior Hotel Management Expert",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200",
      icon: "🏨",
      description: "Complete guide to starting your career in hotel management. Learn everything from basics to advanced hospitality concepts.",
      discount: "50% OFF",
      lastUpdated: "03/2025",
      videoLessons: 156,
      quizzes: 24,
      resources: 42,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Introduction to Hospitality",
          chapters: 5,
          videos: 18,
          previews: 5,
          lectures: [
            { title: "Welcome to Hotel Management", duration: "05:30", type: "video", isPreview: true },
            { title: "Industry Overview", duration: "08:45", type: "video", isPreview: true },
          ]
        }
      ],
      learningPoints: [
        "Understand the fundamentals of hotel management",
        "Learn customer service excellence",
        "Master front office operations",
        "Understand food and beverage management"
      ]
    },
    {
      id: 3,
      title: "Rise A Course For Bright Future",
      category: "Development",
      instructor: "Robert Fox",
      instructorTitle: "Full Stack Developer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-200",
      icon: "💻",
      description: "Transform your career with this comprehensive development course covering modern web technologies and best practices.",
      discount: "50% OFF",
      lastUpdated: "04/2025",
      videoLessons: 198,
      quizzes: 32,
      resources: 68,
      onlineJudge: 45,
      courseContent: [
        {
          section: "1. Getting Started",
          chapters: 4,
          videos: 15,
          previews: 6,
          lectures: [
            { title: "Course Introduction", duration: "04:20", type: "video", isPreview: true },
          ]
        }
      ],
      learningPoints: [
        "Master modern web development",
        "Build full-stack applications",
        "Learn React and Node.js",
        "Deploy production-ready apps"
      ]
    },
    {
      id: 4,
      title: "CSS - The Complete Guide 2020",
      category: "Development",
      instructor: "Robert Fox",
      instructorTitle: "CSS Expert & UI Designer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200",
      icon: "☁️",
      description: "Master CSS from basics to advanced animations, flexbox, grid, and modern CSS techniques.",
      discount: "50% OFF",
      lastUpdated: "02/2025",
      videoLessons: 180,
      quizzes: 28,
      resources: 52,
      onlineJudge: 38,
      courseContent: [
        {
          section: "1. CSS Fundamentals",
          chapters: 6,
          videos: 22,
          previews: 8,
          lectures: []
        }
      ],
      learningPoints: [
        "Learn CSS from scratch",
        "Master Flexbox and Grid",
        "Create stunning animations",
        "Build responsive websites"
      ]
    },
    {
      id: 5,
      title: "Web Design For Beginners to Pro",
      category: "Design",
      instructor: "Robert Fox",
      instructorTitle: "UX/UI Designer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200",
      icon: "🎨",
      description: "Complete web design course covering UI/UX principles, Figma, and modern design trends.",
      discount: "50% OFF",
      lastUpdated: "03/2025",
      videoLessons: 165,
      quizzes: 25,
      resources: 78,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Design Basics",
          chapters: 5,
          videos: 19,
          previews: 7,
          lectures: []
        }
      ],
      learningPoints: [
        "Master design principles",
        "Learn Figma and design tools",
        "Create beautiful interfaces",
        "Build design portfolios"
      ]
    },
    {
      id: 6,
      title: "Giggling: Profiling, Light And Color",
      category: "Photography",
      instructor: "Robert Fox",
      instructorTitle: "Professional Photographer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200",
      icon: "📸",
      description: "Master photography techniques including lighting, color theory, and professional editing.",
      discount: "50% OFF",
      lastUpdated: "04/2025",
      videoLessons: 142,
      quizzes: 20,
      resources: 64,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Photography Basics",
          chapters: 4,
          videos: 16,
          previews: 5,
          lectures: []
        }
      ],
      learningPoints: [
        "Master camera settings",
        "Understand lighting techniques",
        "Learn color theory",
        "Professional photo editing"
      ]
    },
    {
      id: 7,
      title: "Financial Analysis Fundamentals",
      category: "Business",
      instructor: "Robert Fox",
      instructorTitle: "Financial Analyst",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-yellow-200 via-blue-200 to-cyan-200",
      icon: "⚖️",
      description: "Learn financial analysis, modeling, and investment strategies from industry experts.",
      discount: "50% OFF",
      lastUpdated: "03/2025",
      videoLessons: 134,
      quizzes: 22,
      resources: 48,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. Finance Basics",
          chapters: 5,
          videos: 17,
          previews: 6,
          lectures: []
        }
      ],
      learningPoints: [
        "Financial statement analysis",
        "Investment strategies",
        "Risk management",
        "Portfolio optimization"
      ]
    },
    {
      id: 8,
      title: "Web Design For Beginners to Pro",
      category: "Development",
      instructor: "Robert Fox",
      instructorTitle: "Senior Web Developer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-purple-300 via-blue-200 to-indigo-300",
      icon: "📋",
      description: "Complete web development bootcamp covering HTML, CSS, JavaScript, and modern frameworks.",
      discount: "50% OFF",
      lastUpdated: "04/2025",
      videoLessons: 210,
      quizzes: 35,
      resources: 82,
      onlineJudge: 52,
      courseContent: [
        {
          section: "1. Web Fundamentals",
          chapters: 6,
          videos: 24,
          previews: 9,
          lectures: []
        }
      ],
      learningPoints: [
        "HTML5 and CSS3 mastery",
        "JavaScript ES6+",
        "React and modern frameworks",
        "Build real-world projects"
      ]
    },
    {
      id: 9,
      title: "Advanced UI/UX Design Course",
      category: "Design",
      instructor: "Robert Fox",
      instructorTitle: "Lead Product Designer",
      students: 245,
      price: "$57",
      originalPrice: "$114",
      rating: 4.5,
      reviews: 15,
      image: "bg-gradient-to-br from-pink-200 via-purple-300 to-blue-400",
      icon: "🎯",
      description: "Advanced course on UI/UX design covering user research, prototyping, and design systems.",
      discount: "50% OFF",
      lastUpdated: "03/2025",
      videoLessons: 188,
      quizzes: 30,
      resources: 72,
      onlineJudge: 0,
      courseContent: [
        {
          section: "1. UX Research",
          chapters: 5,
          videos: 20,
          previews: 7,
          lectures: []
        }
      ],
      learningPoints: [
        "User research methods",
        "Prototyping and wireframing",
        "Design systems",
        "Usability testing"
      ]
    },
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
      <div className="min-h-screen">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedCourse.title}</h1>
              <p className=" mb-6 leading-relaxed">{selectedCourse.description}</p>

              {/* Instructor Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <p className="font-semibold">{selectedCourse.instructor}</p>
                  <p className="text-sm ">{selectedCourse.instructorTitle}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{selectedCourse.rating}</span>
                  <span className="">({selectedCourse.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{selectedCourse.students.toLocaleString()}+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Last updated on {selectedCourse.lastUpdated}</span>
                </div>
              </div>

              {/* What will you learn */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What will you learn?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedCourse.learningPoints.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className=" text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <div className="space-y-3">
                  {selectedCourse.courseContent.map((section: CourseSection, idx: number) => (
                    <div key={idx} className=" border-2 rounded-lg overflow-hidden">
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{section.section}</h3>
                          <div className="flex flex-wrap gap-2 text-xs ">
                            <span className="px-2 py-1  rounded">{section.chapters} Chapters</span>
                            <span className="px-2 py-1  rounded">{section.videos} Videos</span>
                            {section.quizzes && <span className="px-2 py-1  rounded">{section.quizzes} Quiz</span>}
                            {section.resources && <span className="px-2 py-1  rounded">{section.resources} Resources</span>}
                            {section.questions && <span className="px-2 py-1 rounded">{section.questions} Design-questions</span>}
                            <span className="px-2 py-1 bg-green-600 rounded">{section.previews} Free Previews</span>
                          </div>
                        </div>
                      </div>

                      {/* Lectures */}
                      {section.lectures.length > 0 && (
                        <div className="border-t border-slate-700">
                          {section.lectures.map((lecture: Lecture, lectureIdx: number) => (
                            <div key={lectureIdx} className="p-4 flex items-center justify-between hover:bg-slate-750 border-b border-slate-700 last:border-0">
                              <div className="flex items-center gap-3">
                                {lecture.type === 'video' ? (
                                  lecture.isPreview ? <Play className="w-4 h-4 text-green-400" /> : <Lock className="w-4 h-4 text-slate-500" />
                                ) : (
                                  <Play className="w-4 h-4 text-purple-400" />
                                )}
                                <span className={`text-sm ${lecture.isPreview ? 'text-purple-400' : 'text-slate-300'}`}>
                                  {lecture.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                {lecture.type === 'section' ? (
                                  <>
                                    <span className="text-xs text-slate-400">{lecture.videos} Videos</span>
                                    <span className="text-xs px-2 py-1 bg-green-600 rounded">{lecture.previews} Free Previews</span>
                                  </>
                                ) : (
                                  <>
                                    {lecture.isPreview && (
                                      <span className="text-xs px-2 py-1 bg-green-600 rounded">Click to Preview</span>
                                    )}
                                    <span className="text-xs text-slate-400">{lecture.duration} min</span>
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
            <div className="lg:col-span-1">
              <div className=" border-2 rounded-xl p-6 sticky top-24">
                {/* Course Image */}
                <div className={`${selectedCourse.image} rounded-lg h-48 mb-4 flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <span>{selectedCourse.icon}</span>
                  {selectedCourse.discount && (
                    <div className="absolute top-3 left-3 bg-purple-600  px-3 py-1 rounded-full text-xs font-semibold">
                      🎟️ Buy for {selectedCourse.discount}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">{selectedCourse.price}</span>
                    <span className=" line-through">{selectedCourse.originalPrice}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <button className="w-full bg-purple-600 hover:bg-purple-700  py-3 rounded-lg font-semibold mb-3 transition-colors">
                  Buy Now
                </button>
                <button className="w-full border border-slate-600 hover:bg-slate-700  py-3 rounded-lg font-semibold mb-6 transition-colors">
                  Try for FREE
                </button>

                {/* Course Includes */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">This course includes:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 ">
                      <Video className="w-4 h-4" />
                      <span>{selectedCourse.videoLessons}+ Video Lessons</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <FileText className="w-4 h-4" />
                      <span>{selectedCourse.quizzes}+ Quizzes</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <Download className="w-4 h-4" />
                      <span>{selectedCourse.resources}+ Downloadable Resources</span>
                    </div>
                    {selectedCourse.onlineJudge > 0 && (
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span>{selectedCourse.onlineJudge}+ Online Judge questions</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 ">
                      <Clock className="w-4 h-4" />
                      <span>Continuous Updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>Lifetime Access</span>
                    </div>
                  </div>
                </div>

                {/* Consultation */}
                <div className="pt-4 border-t border-slate-700 text-center">
                  <p className="text-sm mb-3">Not sure if this course is for you?</p>
                  <button className="w-full flex items-center justify-center gap-2 border border-slate-600 hover:bg-slate-700  py-2 rounded-lg text-sm transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Book a Free Consultation
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Courses
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <h3 className="font-semibold text-slate-800 mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white p-1.5 rounded">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Course Categories */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <h3 className="font-semibold text-slate-800 mb-4">Course Categories</h3>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg hover:bg-purple-50 text-sm text-slate-700 hover:text-purple-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4" />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-xs text-slate-500">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Instructors */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <h3 className="font-semibold text-slate-800 mb-4">Instructors</h3>
              <div className="space-y-2">
                {instructors.map((instructor, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg hover:bg-purple-50 text-sm text-slate-700 hover:text-purple-600 transition-colors"
                  >
                    <span>{instructor}</span>
                    <span className="text-xs text-slate-500">(28)</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price With Courses */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-4">Price With Courses</h3>
              <div className="space-y-2">
                {priceRanges.map((range, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between text-left px-3 py-2 rounded-lg hover:bg-purple-50 text-sm text-slate-700 hover:text-purple-600 transition-colors"
                  >
                    <span>{range}</span>
                    <span className="text-xs text-slate-500">(456)</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-700">
                We found <span className="font-bold text-purple-600">2300 courses</span> for you
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">Short By:</span>
                <select className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Rating</option>
                </select>
                <div className="flex gap-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-purple-600 text-white" : "bg-gray-100 text-slate-600"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-purple-600 text-white" : "bg-gray-100 text-slate-600"}`}
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
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
                >
                  {/* Course Image */}
                  <div className={`${course.image} h-48 flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <span className="relative z-10">{course.icon}</span>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>

                  {/* Course Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded font-medium">
                        {course.category}
                      </span>
                      <span className="text-purple-600 font-bold text-lg">{course.price}</span>
                    </div>

                    <h3 className="font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700">{course.instructor}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-600">
                        <Users className="w-3 h-3" />
                        <span>{course.students} Students</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="text-xs text-slate-600 ml-1">({course.reviews})</span>
                      </div>
                      <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">
                        Learn More »
                      </button>
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