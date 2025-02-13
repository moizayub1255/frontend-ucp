import React ,{useState}from "react";
import Headandfoot from "../Layout/Headandfoot";
import Loader from "../Layout/Loader";

const teams = [
  {
    name: "Jaguars",
    logo: "/jaguars.png",
    description:
      "The Jaguars are fierce and unstoppable. They thrive under pressure and deliver extraordinary performances. Their passion and resilience are a sight to behold.",
    classes: ["BSCS-8"],
    in: ["Prof. M.Ali", "Miss Amna Awan"],
    video: "falconstheme.mp4",
  },
  {
    name: "Gladiators",
    logo: "/gladiators.png",
    description:
    "The Gladiators play with precision and strength. They are a balanced team with exceptional skills in all areas of the game. Their focus and determination set them apart."
      ,
    classes: ["BBA-7", "BBA-8", "BBA-9", "BBA F-2"],
    in: ["Prof. Kamran Khan", "Prof. Aziz"],
    video: "Gladiators.MP4",
  },
  
  {
    name: "Falcons",
    logo: "/falcons.png",
    description:
      "The Falcons are known for their speed and agility. They dominate the field with unmatched teamwork and energy. Whether it’s a nail-biting finish or a clear victory, this team brings their A-game every time.",
    classes: ["BS English", "BS Chemistry", "BS Math"],
    in: ["Miss Aneeqa"],
    video: "Falcons.mp4",
  },
  {
    name: "Warriors",
    logo: "/warriors.png",
    description:
      "The Warriors are fearless and determined. Their powerful gameplay and strategic approach make them one of the toughest teams to beat. They inspire through their relentless pursuit of excellence.",
    classes: ["BSCS-6", "BSCS-7", "BSCS-F1"],
    in: ["Prof. Rana Hammad Habib", "Miss Hira Shahid"],
    // video: "falconstheme.mp4",
  },
  {
    name: "Hawks",
    logo: "/hawks.png",
    description:
    "The Hawks are fierce and unstoppable. They thrive under pressure and deliver extraordinary performances. Their passion and resilience are a sight to behold."
      ,
    classes: [
      "BSAF-2 & BSAF-3",
      "ADBA-9 & ADBA-10",
      "ADAF-9 & ADAF-10",
      "ADCS-4 & ADCS-5",
      "BS Psychology",
    ],
    in: ["Prof. Saqib Arshad", "Prof. Badar Chishti", "Miss Warda"],
    // video: "falconstheme.mp4",
  },
];


const Teams = () => {
  const [loading, setLoading] = useState(true); 
  return (
    <>
    {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
    <Headandfoot>
      <div className="container py-5">
        <h1 className="text-center mb-4">Our Teams</h1>
        <div className="row">
          {teams.map((team, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card-body">
                <div className="card shadow-sm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-center mb-3">
                        {team.video ? (
                          <video
                            src={team.video}
                            width="230"
                            height="400"
                            className="mt-3 rounded shadow"
                            controls
                            muted
                            loop
                          ></video>
                        ) : (
                          <img
                            src={team.logo}
                            alt={`${team.name} logo`}
                            width="35%"
                            // height="130"
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 p-4">
                      <h3 className="card-title text-center">{team.name}</h3>
                      <p className="card-text">{team.description}</p>
                      <h5>Classes & Sections</h5>
                      <ul>
                        {team.classes.map((teamClass, idx) => (
                          <li key={idx}>{teamClass}</li>
                        ))}
                      </ul>
                      <h5>House Incharges</h5>
                      <ul>
                        {team.in.map((inCharge, idx) => (
                          <li key={idx}>{inCharge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Headandfoot>
        )}
      </>
  );
};

export default Teams;
