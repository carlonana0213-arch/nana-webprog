import React from "react";
import Button from "../components/Button";
import notFound from "../assets/images/system/pageNotFound.png";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <img src={notFound} alt="Page not found" className="max-w-sm" />

      <Button to="/" variant="primary">
        Return to Home
      </Button>
    </div>
  );
}

export default NotFoundPage;
