import { Typography } from "@mui/material";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[url('/home.jpg')] bg-cover bg-center bg-no-repeat md:px-[5%] px-[2%]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#00000066] to-[#000000]" />

      {/* Content */}
      <div className="relative">
        <Navbar />
      </div>

      <div className="relative px-[5%] pt-[90%] md:pt-[10%] md:pl-[8%] flex flex-col gap-[30px]">
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 40, md: 60, lg: 80 },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: -2,
            lineHeight: 1.2,
          }}
        >
          Building a stronger <br className="hidden sm:block md:hidden" />
          nation <br className="hidden md:block" /> through trusted energy
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: 0.5,
            lineHeight: 1.6,
          }}
        >
          Fueling Industries, Powering communities, and{" "}
          <br className="sm:block md:hidden" /> driving{" "}
          <br className="hidden md:block" /> progress across Ghana and beyond.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
