import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] border-t border-[#dadce0] text-sm text-[#70757a]">
      <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div>
          &copy; {new Date().getFullYear()} Sneha Vishwakarma. All rights reserved.
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;