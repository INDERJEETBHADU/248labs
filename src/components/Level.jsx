import React from "react";
import Image from "next/image";

function Level() {
  return (
    <>
      <section className=" level_up_bg d-flex flex-column   ">
        <div className="container_2 w-100 d-flex flex-column flex-grow-1  align-items-end justify-content-center">
          <div className="level_up_box">
            <h3 className=" ff-roboto mb-0 fw-700 text-52 lh-67 text-white">
              Level up your gaming experience
            </h3>
            <button className=" ply_btn mb-0 mt_20  ff-roboto fw-700 text-18 lh-27 text-white  ">
              Play Unvilled
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-black">
        {/* another---images--prt */}
        <div className="container_2 ">
          <div className=" position-relative">
            <Image
              className=" w-100 position-relative xavier_img_cover z-1 br_30 mt_48"
              src="/images/xavier_big_img.png"
              width={1140}
              height={422.27}
              alt="Picture of the author"
            />
            <div className=" level_ellipse_pos position-absolute d-none d-xl-block"></div>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-12">
              <div className=" d-flex  flex-column flex-sm-row flex-md-column  gap-md-4 gap-3   align-items-start">
                <button className=" mb-0 ff-roboto fw-700  text-18 lh-27 text-white mail_btn">
                  name@domain.com
                </button>
                <button className=" mb-0 ff-roboto fw-700   text-18 lh-27 text-white move_btn">
                  Make Your Move
                </button>
              </div>
            </div>
            <div className="col-md-8 col-12 pt-3 pt-md-0">
              <p className="  ff-roboto mb-0 fw-400 text-16  lh-24 color_grey   ">
                Unveiled is a unique{" "}
                <span className=" mb-0 fw-600  text-white text-capitalize ">
                  collectible card game{" "}
                </span>
                in which you gain fervour for your ventures, spending it on
                mercenaries, spies, automata, and influence. What’s your next
                move?
              </p>
              <p className="  ff-roboto mb-0 fw-400 text-16  lh-24 color_grey mt-3   ">
                {" "}
                You play{" "}
                <span className=" mb-0 fw-600  text-white text-capitalize ">
                  a rogue merchant trader
                </span>{" "}
                allied to a noble house, alongside your{" "}
                <span className=" mb-0 fw-600  text-white text-capitalize ">
                  cryptid-humanoid companions
                </span>{" "}
                in a game of ambition and alliance, deception and miracles,
                manipulation and annihilation. Bells chime in the harbour, and
                markets are opening. Guards have swept the streets of the more
                obvious .
              </p>
              <p className=" mb-0 mt-3 ff-roboto fw-600 text-16 lh-24n text-white">
                What’s your next move?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Level;
