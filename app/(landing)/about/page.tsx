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
    image: "/directors-placeholder.jpg", // Update with actual image
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
    image: "/faculty-placeholder.jpg", // Update with actual image
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
    members: "Siddhant Singh & Srishti Singh",
    image: "/team-placeholder.jpg", // Update with actual image
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

// ============================================
// Main About Page Component
// ============================================
export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {ABOUT_PAGE_CONTENT.pageHeader.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#8b5091] font-semibold mb-6">
              {ABOUT_PAGE_CONTENT.pageHeader.subtitle}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {ABOUT_PAGE_CONTENT.pageHeader.description}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {ABOUT_PAGE_CONTENT.statistics.map((stat, index) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-[#8b5091] mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honorary Directors Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#8b5091]/10 text-[#8b5091] rounded-full text-sm font-semibold">
                  Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {ABOUT_PAGE_CONTENT.directors.sectionTitle}
              </h2>
              <p className="text-xl text-[#8b5091] font-semibold mb-4">
                {ABOUT_PAGE_CONTENT.directors.sectionSubtitle}
              </p>
              <p className="text-lg text-gray-700 font-medium mb-6">
                {ABOUT_PAGE_CONTENT.directors.names}
              </p>
              {ABOUT_PAGE_CONTENT.directors.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-4 text-base"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={ABOUT_PAGE_CONTENT.directors.image}
                  alt={ABOUT_PAGE_CONTENT.directors.names}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <GraduationCap className="w-12 h-12 mb-2 opacity-80" />
                  <p className="text-sm font-semibold">Market Visionaries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={ABOUT_PAGE_CONTENT.faculty.image}
                  alt={ABOUT_PAGE_CONTENT.faculty.leadName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <BookOpen className="w-12 h-12 mb-2 opacity-80" />
                  <p className="text-sm font-semibold">Expert Educators</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#8b5091]/10 text-[#8b5091] rounded-full text-sm font-semibold">
                  Faculty
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {ABOUT_PAGE_CONTENT.faculty.sectionTitle}
              </h2>
              <p className="text-xl text-[#8b5091] font-semibold mb-4">
                {ABOUT_PAGE_CONTENT.faculty.sectionSubtitle}
              </p>
              <p className="text-lg text-gray-700 font-medium mb-6">
                {ABOUT_PAGE_CONTENT.faculty.leadName}
              </p>
              {ABOUT_PAGE_CONTENT.faculty.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-4 text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-[#8b5091]/10 text-[#8b5091] rounded-full text-sm font-semibold">
                  Support Team
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {ABOUT_PAGE_CONTENT.team.sectionTitle}
              </h2>
              <p className="text-xl text-[#8b5091] font-semibold mb-4">
                {ABOUT_PAGE_CONTENT.team.sectionSubtitle}
              </p>
              <p className="text-lg text-gray-700 font-medium mb-6">
                {ABOUT_PAGE_CONTENT.team.members}
              </p>
              {ABOUT_PAGE_CONTENT.team.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-gray-600 leading-relaxed mb-4 text-base"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={ABOUT_PAGE_CONTENT.team.image}
                  alt={ABOUT_PAGE_CONTENT.team.members}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Heart className="w-12 h-12 mb-2 opacity-80" />
                  <p className="text-sm font-semibold">Dedicated Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Legacy85 is Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver financial education with clarity, precision, and real market impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PAGE_CONTENT.coreValues.map((value, index) => {
              const IconComponent = getIconComponent(value.icon);
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: value.color }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-16 md:py-20 bg-[#8b5091] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ABOUT_PAGE_CONTENT.vision.sectionTitle}
            </h2>
            <p className="text-xl font-semibold mb-8 opacity-90">
              {ABOUT_PAGE_CONTENT.vision.sectionSubtitle}
            </p>
          </div>
          <div className="space-y-6">
            {ABOUT_PAGE_CONTENT.vision.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed opacity-95 text-center"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Trading Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 1,400+ successful traders who have mastered the markets with Legacy85's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8b5091] text-white font-semibold rounded-lg hover:bg-[#6b2973] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Courses
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8b5091] font-semibold rounded-lg border-2 border-[#8b5091] hover:bg-purple-50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}