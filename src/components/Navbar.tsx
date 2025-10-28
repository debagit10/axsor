import { Typography } from "@mui/material";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className=" p-6 text-[#D3D2CE]">
      <div className="flex  items-center justify-between ">
        <img
          src="/logo.png"
          alt="Axsor's Logo"
          className="w-[61px] h-12 md:w-48 md:h-[150px]"
        />

        <ul className="hidden md:flex gap-10 ">
          <li>
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              ABOUT US
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              SERVICES
            </Typography>
          </li>
          <li>
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              CONTACT US
            </Typography>
          </li>
          <li className="tracking-[18%]">
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              NEWS & UPDATE
            </Typography>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <CgMenuRight size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex justify-center">
          <ul className="flex flex-col gap-4 mt-4 text-center">
            <li>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                ABOUT US
              </Typography>
            </li>
            <li>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                SERVICES
              </Typography>
            </li>
            <li>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                CONTACT US
              </Typography>
            </li>
            <li className="tracking-[18%]">
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                NEWS & UPDATE
              </Typography>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
