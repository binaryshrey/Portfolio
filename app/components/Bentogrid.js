"use client";

import BentoDesktopLayout from "./BentoDesktopLayout";
import BentoMobileLayout from "./BentoMobileLayout";

const BentoGrid = () => {
  return (
    <>
      <div className="block md:hidden">
        <BentoMobileLayout />
      </div>

      <div className="hidden md:block">
        <BentoDesktopLayout />
      </div>
    </>
  );
};

export default BentoGrid;
