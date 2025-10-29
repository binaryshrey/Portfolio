import React from "react";
import db from "../data/db.json";

const ProfileInfo = () => {
  return (
    <div className="">
      <p className="text-base font-semibold text-white mb-1">{db.name}</p>

      <p className="text-sm text-zinc-400">{db.about}</p>
    </div>
  );
};

export default ProfileInfo;
