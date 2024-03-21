import React from "react";

function whats() {
  return (
    <>
      <section className=" whats_bg_img  bg-black d-flex  flex-column mt_neg_1">
        <div className="container_2 d-flex flex-column flex-grow-1 justify-content-center">
          <div className="">
            <h2 className=" mb-0 ff-roboto fw-700 text-52 lh-62  text-center text-white">
              What’s Next
            </h2>
            <p className=" mb-0  ff-roboto fw-600 text-16 lh-24 text-center mt-3 text-white">
              92% of gamers have never even tried a Web3 game. We’re going to
              change that.
            </p>
            <p className=" m ff-roboto fw-400  text-16 lh-24 text-center  text-white opacity_7 mt-3">
              {" "}
              248Labs The market is worth about a gazillion dollars, so whatever
              those stats were, that goes here.
            </p>
            <div className=" d-flex justify-content-center mt_34">
              <button className=" mb-0 ff-roboto fw-700 lh-24 lh-288 text-center text-white keep_btn">
                Try to keep up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default whats;
