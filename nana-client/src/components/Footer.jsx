import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} SODIUM
        </p>

        <p className="text-sm text-gray-400">For Creatives by Creatives</p>
      </div>
    </footer>
  );
}

export default Footer;
