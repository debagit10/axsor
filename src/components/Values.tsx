import { Typography } from "@mui/material";

const Values = () => {
  return (
    <div className="bg-[#000000] px-[5%] pt-[90%] md:pt-[10%] md:pl-[8%] ">
      <div className="md:px-[5%] px-[2%]">
        <div className="flex flex-col gap-6">
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 32, md: 64 },
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Core Values
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 16, md: 20 },
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Fueling industries, Powering communities, and driving
            <br className="hidden md:block" /> progress across Ghana and beyond.
          </Typography>
        </div>

        <div className=" flex gap-10 pt-16">
          <div className="bg-[#121212] w-[357px] h-[516px] rounded-[20px] overflow-hidden relative transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
            {/* Content Layer */}
            <div className="relative z-10 flex flex-col gap-6 p-[7%] ">
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 32, md: 36 },
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Integrity
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#A8A4A4",
                }}
              >
                We act ethically and transparently in all our business dealings,
                thus prioritizing doing the right thing over personal gain.
              </Typography>
            </div>

            {/* Image Layer */}
            <img
              src="/values/integrity.png"
              alt="Integrity"
              className="absolute top-[45%] h-[409px]"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-[#121212] overflow-hidden flex justify-between h-[307px] w-[730px] rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
              <div className="flex flex-col p-[4%] gap-6">
                <Typography
                  sx={{
                    fontSize: { xs: 10, sm: 32, md: 36 },
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  Professionalism
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
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
                className="w-[200px] h-[307px]  scale-125"
              />
            </div>

            <div className="flex gap-5">
              <div className="bg-[#121212] relative overflow-hidden w-[351px] h-[516px] rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
                <div className="flex flex-col gap-6 p-[7%]">
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 32, md: 36 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    Mutual Respect
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#A8A4A4",
                    }}
                  >
                    We act politely and treat all fellow employees, clients,
                    customers, <br /> and stakeholders with dignity and <br />
                    worth
                  </Typography>
                </div>

                <img
                  src="/values/respect.jpg"
                  alt="Mutual Respect"
                  className="w-[346px] h-[267px] top-[301px] absolute left-[5px]"
                />
              </div>

              <div className="bg-[#121212] relative overflow-hidden w-[351px] h-[516px] rounded-[20px] transition-all duration-300 hover:border-[0.5px] hover:border-[#BF9A17] hover:shadow-[0px_4px_100px_25px_#BF9A171F]">
                <div className="flex flex-col gap-6 p-[7%]">
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 32, md: 36 },
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    TeamWork
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#A8A4A4",
                    }}
                  >
                    We work cohesively and collaboratively to achieve our common
                    corporate goals and objectives.
                  </Typography>
                </div>

                <img
                  src=""
                  alt="Mutual Respect"
                  className="w-[346px] h-[267px] top-[301px] absolute left-[5px]"
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
