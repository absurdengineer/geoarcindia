import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 rounded-full bg-green-500 h-10 w-10 flex items-center justify-center cursor-pointer"
    >
      <p>
        <i className="fas fa-arrow-up text-lg text-white  "></i>
      </p>
    </div>
  );
};

export default BackToTop;
