import { Typography } from "@mui/material";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className=" p-6 text-[#D3D2CE]">
      <div className="flex  items-center justify-between ">
        <img
          src="/logo.png"
          alt="Axsor's Logo"
          className="w-[61px] h-12 md:w-48 md:h-[150px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        <ul className="hidden md:flex gap-10 ">
          <li
            className="relative group cursor-pointer"
            onClick={() => navigate("/", { state: { scrollTo: "about" } })}
          >
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              ABOUT US
            </Typography>

            <span className="absolute -bottom-[5px] left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
          </li>
          <li
            className="relative group cursor-pointer"
            onClick={() => navigate("/services")}
          >
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              SERVICES
            </Typography>

            <span className="absolute -bottom-[5px] left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
          </li>
          <li
            className="relative group cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              CONTACT US
            </Typography>

            <span className="absolute -bottom-[5px] left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
          </li>
          <li
            className="relative group cursor-pointer tracking-[18%]"
            onClick={() => navigate("/", { state: { scrollTo: "blog" } })}
          >
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#FFFFFF"
              letterSpacing={3}
            >
              NEWS & UPDATE
            </Typography>

            <span className="absolute -bottom-[5px] left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
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
            <li onClick={() => navigate("/", { state: { scrollTo: "about" } })}>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                ABOUT US
              </Typography>
            </li>
            <li onClick={() => navigate("/services")}>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                SERVICES
              </Typography>
            </li>
            <li onClick={() => navigate("/contact")}>
              <Typography
                fontSize={12}
                fontWeight={400}
                color="#FFFFFF"
                letterSpacing={3}
              >
                CONTACT US
              </Typography>
            </li>
            <li
              className="tracking-[18%]"
              onClick={() => navigate("/", { state: { scrollTo: "blog" } })}
            >
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
