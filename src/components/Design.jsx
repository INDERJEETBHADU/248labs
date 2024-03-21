"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function Design() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className=" bg-black mt_neg_1 position-relative overflow-hidden"
        id="about"
      >
        {/* slider---part */}
        <div className="container_2 ">
          <div className=" pt_52 pb_52">
            <Slider {...settings}>
              <div className=" d-flex align-items-end justify-content-center h-76 ">
                <Image
                  className=" gameson_opc  w-100  "
                  src="/images/gameson_1.svg"
                  width={229}
                  height={32}
                  alt="Picture of the author"
                />
              </div>
              <div className="d-flex align-items-end justify-content-center h-76 ">
                <Image
                  className=" gameson_opc w-100  "
                  src="/images/gameson_12svg.svg"
                  width={120}
                  height={74}
                  alt="Picture of the author"
                />
              </div>
              <div className="d-flex align-items-end justify-content-center h-76">
                <Image
                  className="gameson_opc  w-100  "
                  src="/images/gameson_3.svg"
                  width={235}
                  height={76}
                  alt="Picture of the author"
                />
              </div>
              <div className="d-flex align-items-end justify-content-center h-76">
                <Image
                  className=" gameson_opc  w-100 "
                  src="/images/gameson_4.svg"
                  width={232}
                  height={48}
                  alt="Picture of the author"
                />
              </div>
              <div className="d-flex align-items-end justify-content-center h-76">
                <Image
                  className="gameson_opc  w-100  "
                  src="/images/gameson_5.svg"
                  width={120}
                  height={74}
                  alt="Picture of the author"
                />
              </div>
              <div className="d-flex align-items-end justify-content-center h-76">
                <Image
                  className="gameson_opc  w-100  "
                  src="/images/gameson_5.svg"
                  width={120}
                  height={74}
                  alt="Picture of the author"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="container_2 position-relative">
          <div className="row pt_41 ">
            <div className="col-sm-6 col-12">
              <button className=" mb-0 ff-roboto fw-400 text-16 lh-192 position-relative z-1   team_btn  br_30">
                <span className=" text_gradient">DOERS OVER TALKERS</span>
              </button>
              <h1 className=" mb-0 ff-roboto fw-700 text-52  lh-62 text-white mt_18">
                Game <span className=" d-block">First.Always.</span>
              </h1>
            </div>
            <div className="col-sm-6 col-12">
              <h6 className=" mb-0 ff-roboto  fw-500 text-18 lh-21  text-white mt-md-4  mt-lg-5 mt-3 mt-sm-0 ">
                This is difficult
              </h6>
              <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt-sm-3 mt-2">
                {" "}
                Web3 Games have a notoriously high barrier-to-entry for casual
                gamers{" "}
                <span className=" d-xl-block">
                  who make up the vast majority of players. “Link your wallet”
                  before
                </span>
                gameplay is not just off-putting, it’s boring. We’re solving
                that with <span className=" fw-600">world-</span>
                <span className=" d-xl-block">
                  <span className=" fw-600">class storytelling,</span>
                  world-building, game design, art and sound. And fun.
                </span>
              </p>
            </div>
          </div>
          <div className="game_ellipse_left position-absolute d-none d-xl-block"></div>
        </div>
        <div className="container_2">
          <div className="  row pt_45 pb_47  ">
            <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center">
              <div className="design_card_1 cursor_pointer br_30 w-100 position-relative overflow-hidden">
                <h3 className="  mb-0 ff-roboto fw-700 text-32 lh-38  text-white">
                  World Building
                </h3>
                <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt_16">
                  Every pixel, every character, every puzzle is a testament to
                  the harmonious marriage of imagination and engineering
                  precision
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos2"></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-center pt-4 pt-sm-0">
              <div className="design_card_1 cursor_pointer br_30 w-100 position-relative overflow-hidden">
                <h3 className="  mb-0 ff-roboto fw-700 text-32 lh-38  text-white">
                  Game Design
                </h3>
                <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt_16">
                  Every frame becomes a brushstroke, every motion a
                  choreographed dance, contributing to a symphony of visuals
                  that captivate players&apos; senses and ignite their
                  imagination.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos2"></div>
              </div>
            </div>
            <div className="col-lg-4 col-12 d-flex justify-content-center pt-4 pt-lg-0">
              <div className="design_card_1 cursor_pointer br_30 w-100 position-relative overflow-hidden">
                <h3 className="  mb-0 ff-roboto fw-700 text-32 lh-38  text-white">
                  Art and Sound
                </h3>
                <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt_16">
                  In the realm of game design, art and animation are the
                  storytellers, whispering tales of wonder and excitement,
                  etching memories that linger long after the controller is set
                  down.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos2"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" mb-0 ff-roboto fw-700 lh-224 text-187 text-white opacity_06 position-absolute text_pos d-none d-xl-block">
          About Us
        </h2>
      </section>
    </>
  );
}

export default Design;
