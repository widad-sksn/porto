import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import PresenceWidget from "./PresenceWidget";

const socialLinks = [
  {
    name: "Email",
    displayName: "Email Me",
    subText: "ahmadwidad54@gmail.com",
    icon: Mail,
    url: "mailto:ahmadwidad54@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335] to-[#DB4437]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@widad_sksn",
    icon: Instagram,
    url: "https://www.instagram.com/widad_sksn",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    isPrimary: false,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@widad-sksn",
    icon: Github,
    url: "https://github.com/widad-sksn",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    isPrimary: false,
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({
      offset: 10, once: true,
     
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 py-6 md:p-6 md:py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2"
        data-aos="fade-down" 
      >
        <span className="inline-block w-8 h-1 bg-blue-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-3 md:gap-4">
        {/* Email - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-3 md:p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="100" 
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-3 md:gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Second Row - Other Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {otherLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-3 md:p-4 rounded-xl 
                               bg-white/5 border border-white/10 overflow-hidden
                               hover:border-white/20 transition-all duration-500"
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100} 
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
