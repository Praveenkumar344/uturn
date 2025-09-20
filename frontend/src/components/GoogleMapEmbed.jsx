import React, { useState } from "react";
const GoogleMapEmbed = () => {
  return (
    <div>
      <iframe
        className=" rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] p-3 bg-white shadow-[0_0_40px_rgba(0,0,0,0.50)]"
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=13.061274,80.161331&z=15&output=embed"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
