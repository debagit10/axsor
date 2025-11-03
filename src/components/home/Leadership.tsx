import { Typography } from "@mui/material";
import LeadershipModal from "../../modals/Leadership";
import { useEffect, useState } from "react";

interface Leader {
  id: number;
  acf: {
    name: string;
    role: string;
    about: string;
    image: number | { id: number; url: string; alt: string };
  };
}

const Leadership = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    fetch(
      "https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/leadership"
    )
      .then((res) => res.json())
      .then(async (data) => {
        const leadersWithImages = await Promise.all(
          data.map(async (leader: any) => {
            if (leader.acf?.image && typeof leader.acf.image === "number") {
              try {
                const imgRes = await fetch(
                  `https://axsor-f6fd39.ingress-alpha.ewp.live/wp-json/wp/v2/media/${leader.acf.image}`
                );
                const imgData = await imgRes.json();
                leader.acf.image = {
                  id: leader.acf.image,
                  url: imgData.source_url,
                  alt: imgData.alt_text || leader.acf.name,
                };
              } catch (error) {
                console.error("Error fetching image:", error);
              }
            }
            return leader;
          })
        );
        setLeaders(leadersWithImages);
      });
  }, []);

  return (
    <div className="bg-[#F8F8F6] px-[6%] py-[5%] md:pl-[8%]">
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

        {/* Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {leaders.map((leader) => (
            <LeadershipModal key={leader.id} id={leader.id} acf={leader.acf} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
