"use client";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Hearts
          height="100"
          width="100"
          color="red"
          ariaLabel="hearts-loading"
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
