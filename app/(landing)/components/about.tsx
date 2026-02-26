"use client";

import * as React from "react";
import Image from "next/image";
import { Users, Monitor, TrendingUp, Award, Play, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ============================================
// 🎯 CENTRALIZED ABOUT SECTION CONFIGURATION
// ============================================
const ABOUT_CONTENT = {
  heading: {
    main: "Empowering Financial Futures Through Excellence",
    subheading: "About Legacy85",
    tag: "h2",
  },
  introduction: {
    text: "Discover the vision, expertise, and dedication that makes Legacy85 Kanpur's premier trading education academy. We turn aspiring traders into confident, profitable market participants.",
  },
  images: {
    main: {
      src: "/class-room.png",
      alt: "A modern classroom at Legacy85 with students engaged in a live trading session.",
      width: 600,
      height: 500,
    },
    overlay: {
      src: "/a1.jpeg",
      alt: "Close-up of a student analyzing stock charts at Legacy85.",
      width: 200,
      height: 200,
    },
  },
  highlights: [
    { icon: "Users", value: "1,485+", label: "Trusted Clients" },
    { icon: "Award", value: "96%", label: "Satisfaction Rate" },
    { icon: "TrendingUp", value: "30+%", label: "Average Portfolio Growth" },
  ],
  features: [
    {
      title: "Proven Track Record & Expertise",
      description:
        "With over 5 years of market experience and 1,400+ successful alumni, our results speak for themselves. Our 96% satisfaction rate makes us Kanpur's most trusted partner in financial education.",
    },
    {
      title: "Live Market Training",
      description:
        "Theory is just the beginning. Our curriculum is built around hands-on, practical sessions in live market conditions, ensuring you gain real-world skills that translate to confident trading.",
    },
    {
      title: "Personalized Mentorship",
      description:
        "You're not just a number. We provide personalized feedback and dedicated support from active traders to guide you, refine your strategy, and help you navigate the complexities of the market.",
    },
  ],
};

// ============================================
// Testimonials Data
// ============================================
const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Equity Trader, 2023 Batch",
    quote:
      "Legacy85 completely transformed how I look at markets. The live sessions gave me real confidence.",
    videoSrc: "/4.mp4",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Options Analyst, 2024 Batch",
    quote:
      "The mentorship I received here is unparalleled. Within 3 months I was trading profitably.",
    videoSrc: "/2.MOV",
  },
  {
    id: 3,
    name: "Priya Gupta",
    role: "Swing Trader, 2023 Batch",
    quote:
      "Best investment I ever made. The structured curriculum made complex concepts crystal clear.",
    videoSrc: "/3.mp4",
  },
  {
    id: 4,
    name: "Shivam Mishra",
    role: "Futures Trader, 2024 Batch",
    quote:
      "From zero knowledge to consistent returns — Legacy85 made the impossible feel achievable.",
    videoSrc: "/1.MOV",
  },
];
const ICON_MAP: { [key: string]: React.ElementType } = {
  Users,
  Monitor,
  TrendingUp,
  Award,
};

const IconComponent = ({
  name,
  ...props
}: {
  name: string;
  [key: string]: unknown;
}) => {
  const Icon = ICON_MAP[name] || Users;
  return <Icon {...props} />;
};

// ============================================
// Testimonial Card
// ============================================
function TestimonialCard({
  t,
  isActive,
  isPlaying,
  onPlayToggle,
}: {
  t: (typeof TESTIMONIALS)[number];
  isActive: boolean;
  isPlaying: boolean;
  onPlayToggle: (playing: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden border flex flex-col bg-white dark:bg-slate-900 transition-all duration-500 h-[500px]",
        isActive
          ? "scale-100 opacity-100 border-primary/30 shadow-xl shadow-primary/10"
          : "scale-[0.85] opacity-50 border-slate-200 dark:border-slate-700 shadow-none"
      )}
    >
      {/* Thumbnail / Video area — fixed height */}
      <div className="relative w-full bg-black flex-shrink-0 h-[320px]">
        {/* Background static/muted video (Acts as thumbnail) */}
        <video src={t.videoSrc} className="w-full h-full object-cover" muted />

        {/* Gradient overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        )}

        {/* Play button — only on active slide and when not playing */}
        {isActive && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => onPlayToggle(true)}
              aria-label="Play testimonial video"
              className="w-9 h-9 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all duration-300"
            >
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            </button>
          </div>
        )}

        {/* Close button when playing */}
        {isPlaying && (
          <button
            onClick={() => onPlayToggle(false)}
            className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Close video"
          >
            <span className="text-white text-lg">×</span>
          </button>
        )}

        {/* Video controls overlay - only renders when playing */}
        {isPlaying && (
          <video
            src={t.videoSrc}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-cover z-0"
            onEnded={() => onPlayToggle(false)}
          />
        )}
      </div>

      {/* Text area */}
      <div className="flex flex-col justify-between p-4 flex-shrink-0 h-[180px] border-t border-slate-100 dark:border-slate-800">
        <div>
          <Quote className="w-3 h-3 text-primary/40 mb-2" />
          <p className="text-[12px] text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>
        <div className="pt-2">
          <p className="text-xs font-semibold text-slate-900 dark:text-white">
            {t.name}
          </p>
          <p className="text-[10px] text-primary mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [playingId, setPlayingId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    // Update index on selection change AND stop any playing video
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setPlayingId(null); // <--- STOP VIDEO ON SLIDE CHANGE
    });
  }, [api]);

  const handlePlayToggle = (id: number, shouldPlay: boolean) => {
    if (shouldPlay) {
      setPlayingId(id);
    } else {
      setPlayingId(null);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          What Our Students Say
        </p>
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Real Results, <span className="text-primary">Real Stories</span>.
        </h3>
      </motion.div>

      {/* Carousel */}
      <div className="p-10 max-w-6xl mx-auto w-full">
        <Carousel
          className="w-full"
          opts={{ loop: true, align: "center" }}
          setApi={setApi}
        >
          <CarouselContent className="py-4 items-stretch">
            {TESTIMONIALS.map((t, index) => (
              <CarouselItem
                key={t.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/3 px-2"
              >
                <TestimonialCard
                  t={t}
                  isActive={index === current - 1}
                  isPlaying={playingId === t.id}
                  onPlayToggle={(shouldPlay) =>
                    handlePlayToggle(t.id, shouldPlay)
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 md:-left-12" />
          <CarouselNext className="-right-6 md:-right-12" />
        </Carousel>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <span
            key={i}
            className={cn(
              "rounded-full transition-all duration-300",
              i === current - 1
                ? "w-5 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default function RevampedAbout() {
  const HeadingTag = ABOUT_CONTENT.heading.tag as React.ElementType;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="font-semibold text-lg text-primary mb-2">
            {ABOUT_CONTENT.heading.subheading}
          </p>
          <HeadingTag className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {ABOUT_CONTENT.heading.main}
          </HeadingTag>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
            {ABOUT_CONTENT.introduction.text}
          </p>
        </motion.div>

        {/* === TWO-COLUMN LAYOUT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* LEFT: Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[450px] lg:h-[550px]"
          >
            <div className="relative w-full h-full rounded-2xl shadow-2xl shadow-purple-200/80 overflow-hidden">
              <Image
                src={ABOUT_CONTENT.images.main.src}
                alt={ABOUT_CONTENT.images.main.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 left-4 w-40 h-40 md:w-48 md:h-48 z-10">
              <div className="relative w-full h-full rounded-2xl shadow-xl border-4 border-white overflow-hidden">
                <Image
                  src={ABOUT_CONTENT.images.overlay.src}
                  alt={ABOUT_CONTENT.images.overlay.alt}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Stats + Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              {ABOUT_CONTENT.highlights.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100 dark:border-slate-700"
                >
                  <IconComponent
                    name={stat.icon}
                    className="w-8 h-8 mx-auto text-primary mb-2"
                    strokeWidth={2}
                  />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {ABOUT_CONTENT.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-200 dark:bg-primary/30 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === TESTIMONIAL CAROUSEL === */}
        <div className="mt-28 mb-4">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
    </section>
  );
}