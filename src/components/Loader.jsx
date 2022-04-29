import React from "react";

export default function Loader() {
  return (
    <div className="absolute top-0 left-0 bg-black/20 w-full h-1 overflow-x-hidden">
      <div className="bg-black h-full w-1/4 loader-animation"></div>
    </div>
  );
}
