"use client";

import { useMemo, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Grid,
  Layers,
  LineChart,
  List,
  Lock,
  MessageCircle,
  Play,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Video,
  WalletCards,
} from "lucide-react";

type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "Professional";
type PriceFilter = "all" | "premium" | "discounted";
type SortOption = "latest" | "popular" | "rating";

interface Lecture {
  title: string;
  duration: string;
  isPreview?: boolean;
}

interface CourseSection {
  section: string;
  chapters: number;
  videos: number;
  previews: number;
  lectures: Lecture[];
}

interface Course {
  id: number;
  title: string;
  level: CourseLevel;
  instructor: string;
  instructorTitle: string;
  students: number;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  accent: string;
  Icon: ComponentType<{ className?: string }>;
  description: string;
  discount: string;
  lastUpdated: string;
  videoLessons: number;
  resources: number;
  order: number;
  courseContent: CourseSection[];
  learningPoints: string[];
}

const COURSES: Course[] = [
  {
    id: 1,
    title: "Basic Stock Market Course",
    level: "Beginner",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 15420,
    price: "INR 4,999",
    originalPrice: "INR 9,999",
    rating: 4.8,
    reviews: 3245,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    Icon: TrendingUp,
    description:
      "Start from the absolute basics and learn how markets work, how to buy and sell shares, and how to build a sensible long-term portfolio.",
    discount: "50% OFF",
    lastUpdated: "May 2025",
    videoLessons: 85,
    resources: 20,
    order: 6,
    courseContent: [
      {
        section: "Stock Market Basics",
        chapters: 4,
        videos: 15,
        previews: 3,
        lectures: [
          { title: "What is the Stock Market?", duration: "10:15", isPreview: true },
          { title: "How Exchanges Work", duration: "12:30", isPreview: true },
          { title: "Opening a Demat Account", duration: "08:45", isPreview: true },
        ],
      },
    ],
    learningPoints: [
      "Understand the core mechanics of the Indian stock market",
      "Read basic charts, watchlists, and market data confidently",
      "Differentiate trading, investing, risk, and time horizon",
      "Build a diversified starter portfolio with position sizing",
    ],
  },
  {
    id: 2,
    title: "Equity Edge: Momentum & Price Action",
    level: "Intermediate",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 8250,
    price: "INR 7,499",
    originalPrice: "INR 14,999",
    rating: 4.9,
    reviews: 1850,
    accent: "from-indigo-500 via-purple-500 to-fuchsia-500",
    Icon: BarChart3,
    description:
      "Decode price structures, momentum cycles, breakouts, breakdowns, and risk-reward planning for active equity trading.",
    discount: "50% OFF",
    lastUpdated: "April 2025",
    videoLessons: 110,
    resources: 45,
    order: 5,
    courseContent: [
      {
        section: "Momentum Trading Framework",
        chapters: 5,
        videos: 18,
        previews: 2,
        lectures: [
          { title: "Price Action Foundations", duration: "14:20", isPreview: true },
          { title: "Momentum Confirmation", duration: "18:05" },
          { title: "Trade Management Rules", duration: "16:40" },
        ],
      },
    ],
    learningPoints: [
      "Identify actionable breakout and breakdown zones",
      "Use momentum confirmation without overloading indicators",
      "Create planned entries, stops, and target zones",
      "Review trades with a repeatable journal framework",
    ],
  },
  {
    id: 3,
    title: "Advanced Intraday Techniques",
    level: "Advanced",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 12340,
    price: "INR 12,999",
    originalPrice: "INR 24,999",
    rating: 4.7,
    reviews: 2410,
    accent: "from-sky-500 via-blue-500 to-cyan-500",
    Icon: LineChart,
    description:
      "Learn high-probability intraday setups using candlesticks, trend structure, volume behavior, and execution discipline.",
    discount: "50% OFF",
    lastUpdated: "March 2025",
    videoLessons: 95,
    resources: 35,
    order: 4,
    courseContent: [
      {
        section: "Intraday Chart Reading",
        chapters: 6,
        videos: 20,
        previews: 4,
        lectures: [
          { title: "Introduction to Candlesticks", duration: "11:45", isPreview: true },
          { title: "Volume and Trend Context", duration: "15:30" },
          { title: "Avoiding Overtrading", duration: "13:10" },
        ],
      },
    ],
    learningPoints: [
      "Master candlestick patterns and market structure",
      "Combine price action with volume analysis",
      "Build high-probability day trading watchlists",
      "Define risk before every intraday execution",
    ],
  },
  {
    id: 4,
    title: "The Derivatives Pro",
    level: "Professional",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 6920,
    price: "INR 14,999",
    originalPrice: "INR 29,999",
    rating: 4.8,
    reviews: 1275,
    accent: "from-violet-500 via-purple-500 to-pink-500",
    Icon: Layers,
    description:
      "Understand futures and options through institutional tactics, option Greeks, strategy building, hedging, and risk controls.",
    discount: "50% OFF",
    lastUpdated: "February 2025",
    videoLessons: 120,
    resources: 52,
    order: 3,
    courseContent: [
      {
        section: "Options Strategy Engineering",
        chapters: 7,
        videos: 24,
        previews: 3,
        lectures: [
          { title: "Call vs Put Options", duration: "14:20", isPreview: true },
          { title: "Understanding Option Greeks", duration: "22:15" },
          { title: "Building Spreads", duration: "19:50" },
        ],
      },
    ],
    learningPoints: [
      "Understand Delta, Gamma, Theta, Vega, and IV behavior",
      "Deploy bullish, bearish, and neutral option structures",
      "Hedge open positions with derivatives",
      "Manage defined-risk strategies like a professional",
    ],
  },
  {
    id: 5,
    title: "Forex Formula",
    level: "Intermediate",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 4180,
    price: "INR 8,999",
    originalPrice: "INR 17,999",
    rating: 4.6,
    reviews: 890,
    accent: "from-teal-500 via-emerald-500 to-lime-500",
    Icon: WalletCards,
    description:
      "Step into currency markets with a structured understanding of global cycles, macro events, trend behavior, and capital protection.",
    discount: "50% OFF",
    lastUpdated: "January 2025",
    videoLessons: 72,
    resources: 28,
    order: 2,
    courseContent: [
      {
        section: "Currency Market Cycles",
        chapters: 5,
        videos: 16,
        previews: 2,
        lectures: [
          { title: "Currency Pairs Explained", duration: "12:05", isPreview: true },
          { title: "Macro Drivers and News Risk", duration: "18:25" },
        ],
      },
    ],
    learningPoints: [
      "Read currency pairs, spreads, and global sessions",
      "Understand how rates, inflation, and USD strength affect trends",
      "Build rule-based forex trading plans",
      "Control leverage and protect capital",
    ],
  },
  {
    id: 6,
    title: "Mutual Fund Mastery",
    level: "Beginner",
    instructor: "Manvendra Singh",
    instructorTitle: "Senior Trading Instructor",
    students: 9970,
    price: "INR 3,999",
    originalPrice: "INR 7,999",
    rating: 4.7,
    reviews: 1440,
    accent: "from-amber-500 via-orange-500 to-rose-500",
    Icon: ShieldCheck,
    description:
      "Learn SIP planning, fund selection, compounding, diversification, and long-term wealth systems for disciplined investors.",
    discount: "50% OFF",
    lastUpdated: "December 2024",
    videoLessons: 60,
    resources: 18,
    order: 1,
    courseContent: [
      {
        section: "Mutual Fund Foundations",
        chapters: 4,
        videos: 14,
        previews: 2,
        lectures: [
          { title: "How Mutual Funds Work", duration: "09:45", isPreview: true },
          { title: "SIP and Compounding", duration: "13:15", isPreview: true },
          { title: "Choosing Funds by Goal", duration: "16:00" },
        ],
      },
    ],
    learningPoints: [
      "Plan SIPs around goals and time horizon",
      "Compare funds using risk-return measures",
      "Create diversified long-term portfolios",
      "Understand tax basics and withdrawal planning",
    ],
  },
];

const ITEMS_PER_PAGE = 3;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CourseLevel | "all">("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = useMemo(() => {
    const levels: Array<CourseLevel | "all"> = ["all", "Beginner", "Intermediate", "Advanced", "Professional"];

    return levels.map((level) => ({
      level,
      label: level === "all" ? "All Courses" : level,
      count: level === "all" ? COURSES.length : COURSES.filter((course) => course.level === level).length,
    }));
  }, []);

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return COURSES.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.level === selectedCategory;
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.level.toLowerCase().includes(query);
      const matchesPrice =
        priceFilter === "all" ||
        priceFilter === "premium" ||
        (priceFilter === "discounted" && Boolean(course.discount));

      return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.students - a.students;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.order - a.order;
    });
  }, [priceFilter, searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const pageCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const resetToFirstPage = () => setCurrentPage(1);

  const openCourse = (course: Course) => {
    setSelectedCourse(course);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changePage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);
  };

  if (selectedCourse) {
    const CourseIcon = selectedCourse.Icon;

    return (
      <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/60 to-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedCourse(null)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-primary/40 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </button>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-purple-100/60">
              <div className={`bg-gradient-to-r ${selectedCourse.accent} p-6 text-white sm:p-8`}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  <CourseIcon className="h-4 w-4" />
                  {selectedCourse.level}
                </div>
                <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
                  {selectedCourse.title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="space-y-8 p-5 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    [Star, `${selectedCourse.rating}`, `${selectedCourse.reviews.toLocaleString()} reviews`],
                    [Users, `${selectedCourse.students.toLocaleString()}+`, "learners"],
                    [Clock, selectedCourse.lastUpdated, "last updated"],
                  ].map(([Icon, value, label]) => {
                    const StatIcon = Icon as ComponentType<{ className?: string }>;

                    return (
                      <div key={label as string} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <StatIcon className="mb-3 h-5 w-5 text-primary" />
                        <div className="text-lg font-extrabold text-slate-950">{value as string}</div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {label as string}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <section>
                  <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-slate-950">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What you'll learn
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCourse.learningPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-xl bg-purple-50/70 p-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                        <p className="text-sm leading-6 text-slate-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-xl font-extrabold text-slate-950">Course Content</h2>
                  <div className="space-y-4">
                    {selectedCourse.courseContent.map((section) => (
                      <div key={section.section} className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="flex flex-col gap-3 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="font-bold text-slate-950">{section.section}</h3>
                            <p className="mt-1 text-xs font-medium text-slate-500">
                              {section.chapters} chapters - {section.videos} videos
                            </p>
                          </div>
                          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                            {section.previews} previews
                          </span>
                        </div>

                        <div className="divide-y divide-slate-100 bg-white">
                          {section.lectures.map((lecture) => (
                            <div key={lecture.title} className="flex items-center justify-between gap-3 p-4">
                              <div className="flex min-w-0 items-center gap-3">
                                {lecture.isPreview ? (
                                  <Play className="h-4 w-4 shrink-0 text-primary" fill="currentColor" />
                                ) : (
                                  <Lock className="h-4 w-4 shrink-0 text-slate-400" />
                                )}
                                <span className="truncate text-sm font-semibold text-slate-700">
                                  {lecture.title}
                                </span>
                              </div>
                              <span className="shrink-0 text-xs font-medium text-slate-500">{lecture.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </section>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-purple-100/60 lg:sticky lg:top-24">
              <div className={`mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${selectedCourse.accent}`}>
                <CourseIcon className="h-16 w-16 text-white" />
              </div>
              <div className="mb-5">
                <div className="text-3xl font-extrabold text-slate-950">{selectedCourse.price}</div>
                <div className="mt-1 text-sm font-semibold text-slate-400 line-through">
                  {selectedCourse.originalPrice}
                </div>
                <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {selectedCourse.discount}
                </div>
              </div>

              <div className="space-y-3">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-white shadow-lg shadow-primary/20 transition active:scale-[0.98]">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-800 transition hover:bg-white active:scale-[0.98]">
                  <MessageCircle className="h-4 w-4" />
                  Book Free Consultation
                </button>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="mb-3 text-sm font-extrabold text-slate-950">This course includes</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <CourseInclude icon={Video} text={`${selectedCourse.videoLessons}+ video lessons`} />
                  <CourseInclude icon={FileText} text="Practice worksheets" />
                  <CourseInclude icon={Download} text={`${selectedCourse.resources}+ resources`} />
                  <CourseInclude icon={Award} text="Certificate of completion" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50/60 to-slate-100">
      <section className="relative overflow-hidden border-b border-purple-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Trading education built for real market practice
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Choose a focused program, compare learning paths, and move from market basics to advanced execution with a consistent mentoring framework.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-4">
            <FilterPanel title="Search">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    resetToFirstPage();
                  }}
                  placeholder="Search courses"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </FilterPanel>

            <FilterPanel title="Level">
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.level}
                    onClick={() => {
                      setSelectedCategory(category.level);
                      resetToFirstPage();
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      selectedCategory === category.level
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-primary"
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{category.count}</span>
                  </button>
                ))}
              </div>
            </FilterPanel>

            <FilterPanel title="Pricing">
              <div className="grid grid-cols-1 gap-2">
                {[
                  ["all", "All Courses"],
                  ["premium", "Premium"],
                  ["discounted", "Discounted"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() => {
                      setPriceFilter(value as PriceFilter);
                      resetToFirstPage();
                    }}
                    className={`rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                      priceFilter === value
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-slate-50 text-slate-600 hover:bg-purple-50 hover:text-primary"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </FilterPanel>
          </aside>

          <section>
            <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-slate-600">
                Showing <span className="text-slate-950">{pageCourses.length}</span> of{" "}
                <span className="text-slate-950">{filteredCourses.length}</span> courses
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value as SortOption);
                    resetToFirstPage();
                  }}
                  className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                  <option value="rating">Rating</option>
                </select>

                <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <ViewButton active={viewMode === "grid"} onClick={() => setViewMode("grid")} icon={Grid} label="Grid view" />
                  <ViewButton active={viewMode === "list"} onClick={() => setViewMode("list")} icon={List} label="List view" />
                </div>
              </div>
            </div>

            {pageCourses.length > 0 ? (
              <div className={viewMode === "grid" ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
                {pageCourses.map((course) =>
                  viewMode === "grid" ? (
                    <CourseCard key={course.id} course={course} onClick={() => openCourse(course)} />
                  ) : (
                    <CourseRow key={course.id} course={course} onClick={() => openCourse(course)} />
                  )
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <Search className="mx-auto mb-3 h-8 w-8 text-slate-400" />
                <h3 className="text-lg font-extrabold text-slate-950">No courses found</h3>
                <p className="mt-2 text-sm text-slate-500">Try a different search term or level filter.</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <PaginationButton disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
                Previous
              </PaginationButton>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${
                    currentPage === page
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <PaginationButton disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
                Next
              </PaginationButton>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function FilterPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-900">{title}</h2>
      {children}
    </div>
  );
}

function ViewButton({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`rounded-lg p-2 transition ${
        active ? "bg-white text-primary shadow-sm" : "text-slate-400 hover:text-slate-700"
      }`}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

function CourseCard({ course, onClick }: { course: Course; onClick: () => void }) {
  const Icon = course.Icon;

  return (
    <button
      onClick={onClick}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
    >
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${course.accent}`}>
        <Icon className="h-16 w-16 text-white transition group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-900">
          {course.discount}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-primary">
            {course.level}
          </span>
          <span className="text-sm font-extrabold text-slate-950">{course.price}</span>
        </div>
        <h3 className="text-lg font-extrabold leading-snug text-slate-950 group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{course.description}</p>
        <CourseMeta course={course} />
      </div>
    </button>
  );
}

function CourseRow({ course, onClick }: { course: Course; onClick: () => void }) {
  const Icon = course.Icon;

  return (
    <button
      onClick={onClick}
      className="group grid w-full gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-primary/30 hover:shadow-lg hover:shadow-purple-100 sm:grid-cols-[160px_minmax(0,1fr)]"
    >
      <div className={`flex h-36 items-center justify-center rounded-xl bg-gradient-to-br ${course.accent}`}>
        <Icon className="h-14 w-14 text-white transition group-hover:scale-110" />
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-primary">
            {course.level}
          </span>
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
            {course.discount}
          </span>
        </div>
        <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-primary">{course.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{course.description}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <CourseMeta course={course} compact />
          <div className="font-extrabold text-slate-950">{course.price}</div>
        </div>
      </div>
    </button>
  );
}

function CourseMeta({ course, compact = false }: { course: Course; compact?: boolean }) {
  return (
    <div className={`${compact ? "" : "mt-auto pt-5"} flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500`}>
      <span className="inline-flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        {course.rating} ({course.reviews.toLocaleString()})
      </span>
      <span className="inline-flex items-center gap-1">
        <Users className="h-3.5 w-3.5" />
        {course.students.toLocaleString()}
      </span>
      <span className="inline-flex items-center gap-1">
        <Video className="h-3.5 w-3.5" />
        {course.videoLessons} lessons
      </span>
    </div>
  );
}

function CourseInclude({
  icon: Icon,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span className="font-semibold">{text}</span>
    </div>
  );
}

function PaginationButton({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
    >
      {children}
    </button>
  );
}
