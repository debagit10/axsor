import { Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../public/logo.png";
import close from "../icons/close.png";

interface Leaders {
  name: string;
  role: string;
  about: string;
}

const LeadershipModal: React.FC<Leaders> = ({ name, role, about }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="relative w-full h-[454px] bg-[#00000006]  rounded-[20px]"
        onClick={() => setOpen(true)}
      >
        <img />
        <div className="rounded-2xl flex flex-col gap-3.5 absolute bottom-0 bg-[#ffffff] w-full p-4">
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 500,
              color: "#787878",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#000000",
            }}
          >
            {role}
          </Typography>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "rounded-2xl md:p-4 w-[1069px] h-[744px]",
        }}
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxWidth: "1049px",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent>
          <div className="bg-white rounded-2xl md:p-4">
            <div
              onClick={() => setOpen(false)}
              className="justify-end flex py-2 cursor-pointer"
            >
              <img
                src={close}
                className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
              />
            </div>

            <div
              className="relative md:float-left md:w-[250px] md:h-[350px] w-full h-auto rounded-[20px] overflow-hidden md:mr-6 mb-4 bg-[#00000006] p-2"
              style={{
                minWidth: 0,
              }}
            >
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-cover rounded-[20px]"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-[20px]">
                <Typography
                  sx={{ fontSize: 24, fontWeight: 500, color: "#787878" }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 400, color: "#000000" }}
                >
                  {role}
                </Typography>
              </div>
            </div>

            <div className="leading-relaxed text-gray-800">
              <Typography sx={{ fontSize: 15, lineHeight: 1.7 }}>
                {about}
              </Typography>
            </div>

            <div className="clear-both" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadershipModal;
