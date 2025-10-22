"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

// Data structures to make the footer dynamic and maintainable
const socialLinks = [
  { name: "Facebook", icon: "facebook.svg", url: "#" },
  { name: "Twitter", icon: "twitter.svg", url: "#" },
  { name: "Instagram", icon: "instagram.svg", url: "#" },
  { name: "LinkedIn", icon: "linkedin.svg", url: "#" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "About Us", path: "/about-us" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
];

const contactInfo = [
  {
    icon: (
      <MapPin
        size={18}
        className="text-theme-primary mt-0.5 mr-2 flex-shrink-0"
      />
    ),
    content: "117/H-1/365 Pandu Nagar, Kanpur — Opp Bikanervala",
    isLink: false,
  },
  {
    icon: <Phone size={18} className="text-theme-primary mr-2 flex-shrink-0" />,
    content: "+91 6393142456",
    isLink: false,
  },
  {
    icon: <Mail size={18} className="text-theme-primary mr-2 flex-shrink-0" />,
    content: "contact@legacy85mentoring.com",
    isLink: true,
    href: "mailto:contact@legacy85mentoring.com",
  },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Use", path: "/terms" },
  { name: "Cookie Policy", path: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="flex flex-col justify-center container mx-auto px-4 max-w-6xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mb-10">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              {/* Improved logo container with better visibility */}
              <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm select-none">
                <Image
                  src="/LogoL1.png"
                  alt="Legacy-85 Logo"
                  width={45}
                  height={45}
                  className="object-contain "
                  draggable={false}
                  unselectable="on"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    console.error("Logo failed to load");
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<div class="w-10 h-10 flex items-center justify-center bg-theme-primary text-white font-bold rounded">L85</div>';
                  }}
                />
              </div>
              <span className="text-xl font-bold text-slate-800">
                Legacy-85
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Empowering traders with education, tools, and community since
              2020. We're dedicated to helping you achieve financial freedom
              through proven trading strategies.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-md font-semibold text-slate-800 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-600 hover:text-theme-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-md font-semibold text-slate-800 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-slate-600 text-sm hover:text-theme-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-slate-600 text-sm">
                      {item.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - QR Code (Simplified & Professional) */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-md font-semibold text-slate-800 mb-5">
              Connect With Us
            </h3>

            {/* Simple, clean QR container */}
            <div className="flex flex-col items-center bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="bg-white p-1 border border-slate-100 rounded-md overflow-hidden">
                <Image
                  src="/qr.png"
                  alt="Scan to visit our website"
                  width={110}
                  height={110}
                  className="object-contain select-none pointer-events-none"
                  onError={(e) => {
                    // Clean fallback for QR code
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<div class="w-[110px] h-[110px] flex items-center justify-center bg-slate-50 text-slate-400 text-xs text-center p-2">Scan our QR code to visit website</div>';
                  }}
                />
              </div>

              <div className="mt-3 flex items-center text-theme-primary">
                <ExternalLink size={14} className="mr-1" />
                <a
                  href="https://legacy85mentoring.com"
                  className="text-sm font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  legacy85mentoring.com
                </a>
              </div>
            </div>

            {/* Social links in a clean horizontal layout */}
            <div className="flex space-x-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 rounded-md bg-slate-50 hover:bg-theme-primary/10 transition-colors border border-slate-200"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <div className="w-4 h-4 text-slate-700">
                    {/* Simplified social icons */}
                    {social.name === "Facebook" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                      </svg>
                    )}
                    {social.name === "Twitter" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    )}
                    {social.name === "Instagram" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {social.name === "LinkedIn" && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-xs">
              © {currentYear} Legacy-85 Academy. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-slate-500 hover:text-theme-primary transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
