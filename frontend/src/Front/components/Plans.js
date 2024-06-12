import React from "react";
import PlansCard from "../layouts/PlansCard";

const Plans = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 bg-black text-cyan-50 md:px-32">
      <h1 className="text-4xl font-semibold text-center ">
        Premium Membership
      </h1>

      <div className="flex flex-col justify-between gap-8 mt-10 md:flex-row">
        <PlansCard title="1 Month Plan" price="10" />
        <PlansCard title="Plus Plan" price="20" />
        <PlansCard title="ProMax Plan" price="50" />
      </div>
    </div>
  );
};

export default Plans;
