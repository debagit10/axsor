import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { root: null, threshold: 1 }
    );

    paragraphRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const texts = ["OUR STORY", "OUR MISSION", "OUR VISION"];
  const paragraphs = [
    {
      title: "OUR STORY",
      content:
        "Axsor Energy Ltd was incorporated on July 25, 2024 as a private limited liability company under the Companies Act, 2019 (Act 992) with certificate number CS112550724. The company's business object is the bulk importation, distribution, sale, and export of crude and refined petroleum products.",
    },
    {
      title: "OUR MISSION",
      content:
        "As a newly incorporated company, we are driven by innovation, integrity, and a commitment to delivering energy that fuels industries, empowers communities, and drives national growth.",
    },
    {
      title: "OUR VISION",
      content:
        "To procure, sell and distribute crude and or refined high-quality petroleum products at competitive prices to clients through fair and environmentally sustainable practices to ensure triple-bottom benefits to all stakeholders. To become among the top 10 dominant BiDECs in the country",
    },
  ];

  return (
    <div className="bg-[#000000]">
      <div className="flex flex-col md:flex-row gap-8 p-8 px-[6%] md:pl-[8%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-36 sticky top-8 self-start hidden md:block">
          {texts.map((text, i) => (
            <div
              key={i}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeIndex === i
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              <Typography>{text}</Typography>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 space-y-[25%] md:space-y-[50%]  scroll-smooth overflow-hidden">
          {paragraphs.map((para, i) => (
            <div
              key={i}
              ref={(el) => {
                paragraphRefs.current[i] = el;
              }}
              data-index={i}
              className="leading-relaxed"
            >
              <div className="sm:block md:hidden pb-8">
                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 32 },
                    fontWeight: 400,
                    color: "#737373",
                    letterSpacing: "-2.5%",
                    lineHeight: "180%",
                  }}
                >
                  {para.title}
                </Typography>
              </div>

              <Typography
                sx={{
                  fontSize: { xs: 16, md: 32 },
                  fontWeight: 400,
                  color: activeIndex === i ? "white" : "#737373",
                  letterSpacing: "-2.5%",
                  lineHeight: "180%",
                }}
              >
                {para.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
