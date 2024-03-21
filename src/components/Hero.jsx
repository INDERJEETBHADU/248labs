"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

function Hero() {
  const [show, setfirst] = useState(false);

  return (
    <>
      <header
        className=" hero_bg_img d-flex flex-column "
        id="home"
      >
        <div className="container_2 w-100">
          <nav className=" d-flex align-items-center justify-content-between  nav_box  ">
            <Image
              className=" cursor_pointer"
              src="/images/logoo.svg"
              width={206}
              height={42.3}
              alt="Picture of the author"
            />
            <h3></h3>
            <div className="gap_40 d-flex  align-items-center ">
              <ul
                className={` ${
                  show ? "end-0 " : "right_100"
                } d-flex align-items-center ff-roboto fw-400 text-16 lh-24 text-white  gap-4   mobile-view `}
              >
                <li>
                  <a className=" text-white opacity_7" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className=" text-white opacity_7" href="#team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className=" text-white opacity_7" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li>
                  {" "}
                  <button className=" hero_btn   d-md-none  ff-roboto fw-700 text-18 lh-27 text-white  ">
                    Contact Us
                  </button>
                </li>
              </ul>
              <button className=" hero_btn  d-none d-md-block ff-roboto fw-700 text-18 lh-27 text-white  ">
                Contact Us
              </button>
            </div>
            <div
              class="menu d-block d-lg-none z_9  "
              onClick={() => {
                setfirst(!show);
              }}
            >
              <span></span>
              <span class="my-2"></span>
              <span></span>
            </div>
          </nav>
        </div>
        <div className="container_2 d-flex flex-column flex-grow-1 justify-content-center">
          <h2 className="  fw-700 mb-0  text-72  lh-86  text-center text-white ff-roboto">
            Changing the way games <span className=" d-sm-block">are made</span>
          </h2>
          <p className=" mb-0 text-white ff-roboto fw-400 mt-2 mt-md-3 text-24 lh-28 text-center">
            Redefining the future of play
          </p>
        </div>
      
      </header>
    </>
  );
}

export default Hero;
