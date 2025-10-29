import { Typography } from "@mui/material";

const Values = () => {
  return (
    <div className="bg-[#000000] px-[6%] pt-[10%] md:pl-[8%]">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Core Values
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20 },
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Fueling industries, Powering communities, and <br /> driving
            <br className="hidden md:block" /> progress across Ghana and beyond.
          </Typography>
        </div>

        {/* Values Section */}
        <div className="flex md:flex-row flex-col md:gap-10 gap-8 pt-12 md:pt-16">
          {/* Integrity */}
          <div className="bg-[#121212] w-[257px] sm:w-[357px] lg:w-[357px] lg:h-[516px] h-[425px] md:w-full max-w-[357px] mx-auto md:mx-0 rounded-[20px] overflow-hidden relative transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6 p-[7%]">
              <Typography
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 36 },
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Integrity
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  fontWeight: 400,
                  color: "#A8A4A4",
                }}
              >
                We act ethically and transparently in all our business dealings,
                thus prioritizing doing the right thing over personal gain.
              </Typography>
            </div>

            <img
              src="/values/integrity.png"
              alt="Integrity"
              className="absolute top-[45%] h-[409px] object-cover left-1/2 -translate-x-1/2"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Professionalism */}
            <div className="bg-[#121212] w-[257px] sm:w-[357px] relative overflow-hidden flex flex-col md:flex-row justify-between lg:h-[307px] h-[425px] md:w-full lg:max-w-[730px] max-w-[351px] mx-auto md:mx-0  rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
              <div className="flex flex-col lg:p-[4%] p-[7%] gap-4 sm:gap-6">
                <Typography
                  sx={{
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  Professionalism
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15, md: 16 },
                    fontWeight: 400,
                    color: "#A8A4A4",
                  }}
                >
                  We adhere to the core values and in so doing <br /> engender
                  Trust and Reputation with all our <br /> stakeholders.
                </Typography>
              </div>

              <img
                src="/values/professionalism.jpg"
                alt="Professionalism"
                className="lg:w-[200px] lg:h-[307px] w-full h-[300px] lg:scale-125"
              />
            </div>

            {/* Bottom Cards */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Mutual Respect */}
              <div className="bg-[#121212] w-[257px] sm:w-[357px] relative overflow-hidden lg:w-[351px] lg:h-[516px] h-[425px] md:w-full max-w-[351px] mx-auto md:mx-0 rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
                <div className="flex flex-col gap-4 sm:gap-6 p-[7%] pb-4">
                  <Typography
                    sx={{
                      fontSize: { xs: 28, sm: 32, md: 36 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    Mutual Respect
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15, md: 16 },
                      fontWeight: 400,
                      color: "#A8A4A4",
                    }}
                  >
                    We act politely and treat all fellow employees, clients,
                    customers, <br /> and stakeholders with dignity and <br />
                    worth.
                  </Typography>
                </div>

                <img
                  src="/values/respect.jpg"
                  alt="Mutual Respect"
                  className="absolute bottom-0 left-0 w-full object-cover"
                />
              </div>

              {/* Teamwork */}
              <div className="bg-[#121212] w-[257px] sm:w-[357px] relative overflow-hidden lg:w-[351px] lg:h-[516px] h-[425px] md:w-full max-w-[351px] mx-auto md:mx-0 rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
                <div className="flex flex-col gap-4 sm:gap-6 p-[7%]">
                  <Typography
                    sx={{
                      fontSize: { xs: 28, sm: 32, md: 36 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    Teamwork
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15, md: 16 },
                      fontWeight: 400,
                      color: "#A8A4A4",
                    }}
                  >
                    We work cohesively and collaboratively to achieve our common
                    corporate goals and objectives.
                  </Typography>
                </div>

                <img
                  src="/values/teamwork.jpg"
                  alt="Teamwork"
                  className="absolute bottom-0 left-0 w-full h-[260px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
