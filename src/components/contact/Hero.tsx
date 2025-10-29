import { Typography } from "@mui/material";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[url('/contact.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#00000066] to-[#000000]" />

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[30px] px-[6%] md:pl-[8%] pt-[70%] sm:pt-[50%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "18%",
            lineHeight: "160%",
          }}
        >
          GET IN TOUCH
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 32, md: 52, lg: 80 },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "-3%",
            lineHeight: "100%",
          }}
        >
          Get in touch with <br /> Axsor Energy
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "-2.5%",
            lineHeight: "165%",
          }}
        >
          We’re here to answer questions, explore partnerships, <br /> and
          support your needs. Contact our team today.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
