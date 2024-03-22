"use client";

import React from "react";
import Image from "next/image";

function Timeline() {
  return (
    <>
      <section
        className="  bg-black mt_neg_1 position-relative overflow-hidden"
        id="roadmap"
      >
        <div className="container_2">
          <div className=" d-flex justify-content-center pt_44 ">
            <button className=" mb-0 ff-roboto fw-400 text-16 lh-192  team_btn  br_30">
              <span className=" text_gradient">Road map</span>
            </button>
          </div>
          <div className="  mb-5 mb-sm-0 ">
            <h2 className=" mb-0 ff-roboto fw-700 text-52 lh-62 text-center text-white mt-3">
              Milestones and markers
            </h2>
          </div>
          {/* timeline */}
          <div class="timeline mt_49 position-relative">
            <Image
              className="  position-absolute kite_pos  "
              src="/images/kite_svg.svg"
              width={104.14}
              height={104.27}
              alt="Picture of the author"
            />

            <div class="container_rr ms-md-5 ms-lg-0  first_con right  pt-0 ">
              <div class="content   d-flex justify-content-center align-items-center br_30  position-relative overflow-hidden cursor_pointer">
                <div className="">
                  <h2 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-center text_gradient  ">
                    Oct 2014
                  </h2>
                  <p className=" text-center ff-roboto mt-1 mb-0 fw-400 text-24 lh-2813 text-white opacity_7">
                    Hired our first employee
                  </p>
                </div>
                <div className="content_gradient position-absolute contnt_pos"></div>
              </div>
            </div>
            <div class="container_rr ms-md-5 ms-lg-0  left">
              <div class="content  d-flex justify-content-center align-items-center br_30 position-relative overflow-hidden cursor_pointer">
                <div className="">
                  <h2 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-center text_gradient ">
                    Nov 2014
                  </h2>
                  <p className=" text-center  mt-1 ff-roboto mb-0 fw-400 text-24 lh-2813 text-white opacity_7">
                    Launched Bitcoin wallet
                  </p>
                </div>
                <div className="content_gradient position-absolute contnt_pos"></div>
              </div>
            </div>
            <div class="container_rr ms-md-5 ms-lg-0  right">
              <div class="content  d-flex justify-content-center align-items-center br_30 position-relative overflow-hidden cursor_pointer">
                <div className="">
                  <h2 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-center text_gradient ">
                    Oct 2015
                  </h2>
                  <p className=" text-center  mt-1 ff-roboto mb-0 fw-400 text-24 lh-2813 text-white opacity_7">
                    1st prize by Bit angels at Coin Agenda,{" "}
                    <span className=" d-block">Las Vegas</span>
                  </p>
                </div>
                <div className="content_gradient position-absolute contnt_pos"></div>
              </div>
            </div>
            <div class="container_rr ms-md-5 ms-lg-0  left">
              <div class="content  d-flex justify-content-center align-items-center br_30 position-relative overflow-hidden cursor_pointer">
                <div className="">
                  <h2 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-center text_gradient ">
                    Jan 2020
                  </h2>
                  <div className=" d-flex align-items-center gap-3  mt-1  flex-wrap justify-content-center">
                    <p className=" text-center ff-roboto mb-0 fw-400 text-24 lh-2813 text-white opacity_7">
                      launch On
                    </p>
                    <div className=" d-flex align-items-center gap-3">
                      <Image
                        className="    "
                        src="/images/india.svg"
                        width={21.79}
                        height={21.79}
                        alt="Picture of the author"
                      />
                      <Image
                        className="    "
                        src="/images/aus.svg"
                        width={21.79}
                        height={21.79}
                        alt="Picture of the author"
                      />
                      <Image
                        className="    "
                        src="/images/america.svg"
                        width={21.79}
                        height={21.79}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  ~{" "}
                  <div className="content_gradient position-absolute contnt_pos"></div>
                </div>
              </div>
            </div>
            <div class="container_rr ms-md-5 ms-lg-0  right">
              <div class="content  d-flex justify-content-center align-items-center br_30 position-relative overflow-hidden cursor_pointer">
                <div className="">
                  <h2 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-center text_gradient ">
                    Jan 2022
                  </h2>
                  <p className=" text-center  mt-1 ff-roboto mb-0 fw-400 text-24 lh-2813 text-white opacity_7">
                    Trusted by 10 Millions+ Users
                  </p>
                  <div className=" d-flex  justify-content-center mt-3">
                    <Image
                      className="    "
                      src="/images/starss.svg"
                      width={151.4}
                      height={30.95}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className="content_gradient position-absolute contnt_pos"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" mb-0 ff-roboto fw-700 lh-224 text-187 text-white opacity_06 position-absolute text_pos_roadmap d-none d-xl-block">
          Roadmap
        </h2>
        <div className="roadmap_ellipse_left position-absolute d-none d-xl-block "></div>
      </section>
    </>
  );
}

export default Timeline;
