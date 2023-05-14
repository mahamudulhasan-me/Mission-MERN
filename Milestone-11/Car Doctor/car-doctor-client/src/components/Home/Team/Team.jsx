import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// Import Swiper styles

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5050/team`)
      .then((response) => response.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div>
      <SectionTitle section="Team" title="Meet Our Team" />
      <div className=" mySwiper grid grid-cols-3 gap-10">
        {team.map((tMember) => (
          <div key={tMember._id} className="border p-5 rounded-lg text-center">
            <img
              src={tMember.image}
              alt=""
              className="rounded-lg mb-5 h-[70%] "
            />
            <h2 className="text-2xl font-semibold">{tMember.name}</h2>
            <p className=" font-semibold text-gray-600">{tMember.expertOn}</p>
            <div className="flex justify-center items-center gap-2 text-xl mt-2 mb-20">
              <Link to={tMember.facebook} target="_blank">
                <FaFacebook className="text-[#3B5998]" />
              </Link>
              <Link to={tMember.twitter} target="_blank">
                <FaTwitter className="text-[#1DA1F2]" />
              </Link>
              <Link to={tMember.linkedin} target="_blank">
                <FaLinkedin className="text-[#0A66C2]" />
              </Link>
              <Link to={tMember.instagram} target="_blank">
                <FaInstagram className="text-[#C32AA3]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
