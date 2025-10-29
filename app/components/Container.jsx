import React from "react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const Container = ({ filter }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="hidden md:block">
          <DesktopLayout filter={filter} />
        </div>

        <div className="block md:hidden">
          <MobileLayout filter={filter} />
        </div>
      </div>
    </>
  );
};
export default Container;
