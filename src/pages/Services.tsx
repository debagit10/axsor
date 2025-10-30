import { Button, Typography } from "@mui/material";
import Hero from "../components/services/Hero";
import Footer from "../components/Footer";
import Our_Services from "../components/Services";

const Services = () => {
  return (
    <div>
      <Hero />

      <Our_Services />

      <div className="bg-[#F9F9F9]">
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] pt-[10%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-6">
            <Typography
              sx={{
                fontSize: { xs: 32, sm: 40, md: 64 },
                fontWeight: 400,
                color: "black",
              }}
            >
              How We Work
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16, md: 20 },
                fontWeight: 400,
                color: "#787878",
              }}
            >
              Our process ensures efficiency, transparency, and trust at every
              step.
            </Typography>
          </div>

          <div className="flex gap-6 flex-col md:flex-row py-12 md:py-16 ">
            <div className="relative bg-[#00000006] rounded-[20px] w-[353px] md:h-[450px] h-[350px] md:p-[3%] p-[5%] mx-auto md:mx-0">
              <div className="rounded-[50%] bg-[#00000008] w-11 h-11 text-center pt-[2%]">
                1
              </div>

              <div className="absolute flex flex-col gap-6 pt-[30%] md:bottom-20 bottom-10">
                <Typography
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Sourcing
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    color: "#A8A4A4",
                  }}
                >
                  We specialise in sourcing / acquiring crude oil and finished
                  products such as AGO, PMS, LPG etc from reputable local
                  producers and international suppliers.
                </Typography>
              </div>
            </div>

            <div className="relative bg-[#00000006] rounded-[20px] w-[353px] md:h-[450px] h-[350px] md:p-[3%] p-[5%] mx-auto md:mx-0">
              <div className="rounded-[50%] bg-[#00000008] w-11 h-11 text-center pt-[2%]">
                2
              </div>

              <div className="absolute flex flex-col gap-6 pt-[30%] md:bottom-20 bottom-10">
                <Typography
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Distribution
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    color: "#A8A4A4",
                  }}
                >
                  Using our nationwide logistics network we sell to responsible
                  OMCs, industries, communities, and partners across Ghana
                  ensuring safe and efficient transport and onward distribution.
                </Typography>
              </div>
            </div>

            <div className="relative bg-[#00000006] rounded-[20px] w-[353px] md:h-[450px] h-[350px] md:p-[3%] p-[5%] mx-auto md:mx-0">
              <div className="rounded-[50%] bg-[#00000008] w-11 h-11 text-center pt-[2%]">
                3
              </div>

              <div className="absolute flex flex-col gap-6 pt-[30%] md:bottom-20 bottom-10">
                <Typography
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  Sustainability
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    color: "#A8A4A4",
                  }}
                >
                  We operate with sustainability at our core, minimizing
                  environmental impact while ensuring lasting, safe energy
                  reliability.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 px-[6%] md:pl-[8%] pt-[10%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-6">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 400,
              color: "black",
            }}
          >
            Why Choose Axsor
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20 },
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Our process ensures efficiency, transparency, <br /> and trust at
            every step.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              Proven expertise in petroleum import and distribution.
            </Typography>
          </div>
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              Competitive pricing of quality petroleum products.
            </Typography>
          </div>
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              Total compliance with environmental and safety regulations.
            </Typography>
          </div>
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              Reliable partnerships built on excellence, trust and transparency.
            </Typography>
          </div>
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              We utilise advanced storage and monitoring systems for quality
              assurance.
            </Typography>
          </div>
          <div className="w-[357px] h-[220px]">
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#666666",
              }}
            >
              Dedicated team committed to innovation and customer satisfaction.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center w-full h-[558px] md:h-[770px]  bg-[url('/commitment.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#00000066] to-[#000000]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
          <Typography
            sx={{
              fontSize: { xs: 10, md: 14 },
              fontWeight: 700,
              color: "#D3D2CE",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            OUR COMMITMENT TO SUSTAINABILITY
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 28, lg: 48 },
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "-3%",
              lineHeight: "145%",
            }}
          >
            We are committed to safety, environmental responsibility, and
            contributing to the communities we serve.
          </Typography>
        </div>
      </div>

      <div className="bg-[#000000]">
        <div className="relative z-10 flex flex-col gap-3 px-[6%] md:pl-[8%] pt-[10%] md:pt-[15%] lg:pt-[10%] max-w-[1400px] mx-auto">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#EBCC5B",
              letterSpacing: "18%",
              lineHeight: "160%",
            }}
          >
            PARTNER WITH AXSOR ENERGY
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 24, md: 28, lg: 48 },
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "-3%",
              lineHeight: "145%",
            }}
          >
            Let’s work together to fuel industries, drive <br /> growth, and
            build a sustainable energy <br /> future for Ghana.
          </Typography>

          <Button
            sx={{
              marginTop: "1rem",
              width: "203px",
              color: "#5A3E0C",
              borderRadius: "64px",
              textTransform: "capitalize",
              backgroundColor: "#E8AF4B",
              border: "1px",
              borderColor: "#E8AF4B",
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
