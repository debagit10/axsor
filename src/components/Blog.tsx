import { Typography } from "@mui/material";

const Blog = () => {
  return (
    <div className="bg-[] px-[6%] pt-[15%] md:pl-[8%]">
      <div className="md:px-[5%]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 40, md: 64 },
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Blog & Updates
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 20 },
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Axsor's leadership combines of personnels with a vision for
            innovation and growth, ensuring reliability, trust, and value in
            every operation.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 justify-center ">
          <div className="relative md:w-full w-[333px] h-[494px] md:h-[454px] bg-[#00000005] rounded-[20px] ">
            <img />
            <div className="rounded-2xl flex flex-col gap-7 absolute bottom-0 bg-[#00000006] p-4">
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                Axsor Energy Expands Distribution Network Across Ghana...
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                3 MINS READ
              </Typography>
            </div>
          </div>
          <div className="relative md:w-full w-[333px] h-[494px] md:h-[454px] bg-[#00000005] rounded-[20px] ">
            <img />
            <div className="rounded-2xl flex flex-col gap-7 absolute bottom-0 bg-[#00000006] p-4">
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                Axsor Energy Expands Distribution Network Across Ghana...
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                3 MINS READ
              </Typography>
            </div>
          </div>
          <div className="relative md:w-full w-[333px] h-[494px] md:h-[454px] bg-[#00000005] rounded-[20px] ">
            <img />
            <div className="rounded-2xl flex flex-col gap-7 absolute bottom-0 bg-[#00000006] p-4">
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                Axsor Energy Expands Distribution Network Across Ghana...
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                3 MINS READ
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
