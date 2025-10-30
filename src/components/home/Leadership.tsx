import { Typography } from "@mui/material";

const Leadership = () => {
  return (
    <div className="bg-[#F8F8F6] px-[6%] py-[5%] md:pl-[8%] ">
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
            Leadership
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "#787878",
            }}
          >
            Axsor's leadership comprises personnel with a vision for innovation{" "}
            <br />
            and growth, ensuring reliability, trust, and value in every
            operation.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          <div className="relative w-full h-[454px] bg-[#00000006]  rounded-[20px]">
            <img />
            <div className="rounded-2xl flex flex-col gap-3.5 absolute bottom-0 bg-[#ffffff] w-full p-4">
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                John Kojo Arkorful
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                CHAIRMAN
              </Typography>
            </div>
          </div>
          <div className="relative w-full h-[454px] bg-[#00000006]  rounded-[20px]">
            <img />
            <div className="rounded-2xl flex flex-col gap-3.5 absolute bottom-0 bg-[#ffffff] w-full p-4">
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                David Addo-Ashong
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                DIRECTOR
              </Typography>
            </div>
          </div>
          <div className="relative w-full h-[454px] bg-[#00000006]  rounded-[20px]">
            <img />
            <div className="rounded-2xl flex flex-col gap-3.5 absolute bottom-0 bg-[#ffffff] w-full p-4">
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                Kwasi Yirenkyi
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                DIRECTOR
              </Typography>
            </div>
          </div>
          <div className="relative w-full h-[454px] bg-[#00000006]  rounded-[20px]">
            <img />
            <div className="rounded-2xl flex flex-col gap-3.5 absolute bottom-0 bg-[#ffffff] w-full p-4">
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 500,
                  color: "#787878",
                }}
              >
                Micheal Addotey Addo
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                CEO & DIRECTOR
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
