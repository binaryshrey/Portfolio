import React from "react";
import Image from "next/image";
import db from "../data/db.json";

const ProfileImage = () => {
  return (
    <Image
      src={db.profileImage}
      alt="profile"
      width={120}
      height={120}
      className="rounded-full object-cover w-30 h-30"
      priority
    />
  );
};

export default ProfileImage;
