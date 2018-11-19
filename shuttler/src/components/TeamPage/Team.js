import React from "react";
import "./Team.css";

const team = props => {
  return (
    <div className="containerTeam">
      <div className="teamPage">
        <div className="shadowBox">
          <h1>Team</h1>

          <div className="alignImg">
            <img
              src={require("./teamPic.jpg")}
              alt="teamPicture"
              width="600px"
            />
          </div>

          <h3>Coding-Hub</h3>

          <h2>
            Lorem ipsum dolor sit amet, has inani praesent maiestatis id. Ferri
            omnis mollis nam ex, utamur singulis ei has. Ad cum unum voluptua
            similique. Saperet forensibus ei vim, ea his clita deleniti
            noluisse.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default team;
