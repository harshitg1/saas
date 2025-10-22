import About from "./components/about";
import Contact from "./components/contact";
import Events from "./components/event";
import MentoringComponent from "./components/mentoring-steps";
import WhyChooseUs from "./components/why-choose-us";
import CoursesSection from "./components/courses";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const isMobile =
    typeof window !== "undefined" &&
    /Mobi|Android/i.test(window.navigator.userAgent);
  return (
    <>
      <div className="hidden lg:flex relative overflow-hidden h-6">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 animate-gradient-x"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-white text-xs md:text-sm space-x-12 font-medium w-max mx-auto">
          <a
            href="tel:+918577018585"
            className="flex items-center space-x-2 hover:text-black transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span className="tracking-wide">+91 8577018585</span>
          </a>

          <div className="flex items-center space-x-2 hover:text-black transition-colors">
            <Mail className="h-3 w-3" />
            <span className="tracking-wide">
              legacy85mentoringpvtltd@gmail.com
            </span>
          </div>
          <a
            href={
              isMobile
                ? "geo:0,0?q=Kanpur,UP"
                : "https://maps.app.goo.gl/4cq5iGZ3MwLZwDZcA"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:underline"
          >
            <MapPin className="h-3 w-3" />
            <span>Kanpur, UP</span>
          </a>
        </div>
      </div>
      <div className="max-w-8xl py-5 space-y-24 mx-auto px-4 sm:px-6 lg:px-4">
        {/* Gradient Strip */}

        <Hero />
        <About />
        <WhyChooseUs />
        <MentoringComponent />
        <CoursesSection />
        <Events />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
