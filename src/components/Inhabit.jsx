import React from "react";
import Image from "next/image";

function Inhabit() {
  return (
    <>
      <section className=" bg-black  mt_neg_1 overflow-hidden">
        <div className="container_2">
          <div className=" pt_48 pb-0 pb-sm-5">
            <h2 className=" mb-0 ff-roboto  fw-700 text-52  lh-62  text-center  text-white  ">
              A rich, inhabited, and licensable world.
            </h2>
            <div className=" position-relative">
              <Image
                className=" cursor_pointer position-relative z-1  inhabit_img_1  br_30 mt_40 w-100"
                src="/images/inhabit_large_img.png"
                width={1140}
                height={458}
                alt="Picture of the author"
              />
              <div className=" position-absolute z-2 play_pos">
                <svg
                  width="76"
                  height="77"
                  viewBox="0 0 76 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="37.9999"
                    cy="38.3456"
                    r="37.7616"
                    fill="white"
                    fill-opacity="0.41"
                  />
                  <path
                    d="M51.8164 37.48C52.4831 37.8649 52.4831 38.8272 51.8164 39.2121L32.0976 50.5968C31.4309 50.9817 30.5976 50.5005 30.5976 49.7307L30.5976 26.9614C30.5976 26.1916 31.4309 25.7105 32.0976 26.0954L51.8164 37.48Z"
                    fill="url(#paint0_linear_2003_456)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2003_456"
                      x1="52.4509"
                      y1="23.2002"
                      x2="17.6861"
                      y2="41.9989"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#D4145A" />
                      <stop offset="1" stop-color="#FBB03B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="background_ellipse_inhabit position-absolute d-none d-xl-block"></div>
            </div>
            <p className=" ff-roboto fw-400 text-16 lh-24 mb-0  text-center  text-white opacity_7 mt-4">
              {" "}
              Illustrated with original artwork and a cinematic score, destined
              not only for mobile and desktop gaming but{" "}
              <span className=" d-md-block">
                also for film and television, events, merchandising, and
                partnerships.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inhabit;
