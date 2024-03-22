import React from "react";

function Update() {
  return (
    <>
      <section className=" bg-black update_bg_img mt_neg_1 d-flex flex-column">
        <div className="container_2 d-flex flex-column flex-grow-1 justify-content-center">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="form_box w-100 br_30">
                <h2 className=" mb-0 ff-roboto fw-700 text-52 lh-62 text-white">
                  Get updated with us
                </h2>
                <div className=" row">
                  <div className="col-sm-6 col-12">
                    <h6 className="  ff-roboto fw-500 text-16 lh-18 text-white mt-4">
                      Frist Name
                    </h6>
                    <input
                      type="name"
                      //   style="outline: none;"
                      className="  ff-roboto fw-400 text-14 lh-20 text-white name_input w-100"
                      placeholder="Park Seijun"
                    />
                  </div>
                  <div className="col-sm-6 col-12">
                    <h6 className="  ff-roboto fw-500 text-16 lh-18 text-white mt-4">
                      Last Name
                    </h6>
                    <input
                      type="name"
                      //   style="outline: none;"
                      className="  ff-roboto fw-400 text-14 lh-20 text-white name_input w-100"
                      placeholder="Sejiun"
                    />
                  </div>
                </div>
                {/* phone-email */}
                <div className=" row pt-4">
                  <div className="col-sm-6 col-12">
                    <h6 className="  ff-roboto fw-500 text-16 lh-18 text-white mt-4">
                      Phone Number
                    </h6>
                    <input
                      type="tel"
                      //   style="outline: none;"
                      className="  ff-roboto fw-400 text-14 lh-20 text-white name_input w-100"
                      placeholder="+12 5858526478"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>
                  <div className="col-sm-6 col-12">
                    <h6 className="  ff-roboto fw-500 text-16 lh-18 text-white mt-4">
                      Email
                    </h6>
                    <input
                      type="email"
                      //   style="outline: none;"
                      className="  ff-roboto fw-400 text-14 lh-20 text-white name_input w-100"
                      placeholder="Park@458@Gmail.com"
                    />
                  </div>
                </div>
                <div className=" d-flex gap-14 mt-3  ">
                  <input type="checkbox" className=" tick_box" />
                  <p className="  mb-0 ff-roboto fw-400 text-18 lh-21 text-white">
                    By sending this form I confirm that I have read and accept
                    the Privacy <span className=" d-md-block">Policy</span>{" "}
                  </p>
                </div>
                <button className=" mb-0 ff-roboto fw-500 text-16 lh-18 text-white subs_btn mt-4">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-12 d-flex align-items-center pt-4 pt-lg-0">
              <div className="">
                <h5 className=" mb-0 text-capitalize ff-roboto fw-400 text-24  lh-2813 text-white">
                  Stay updated
                </h5>
                <div className=" pt-1">
                  <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt-2">
                    At 248 Labs, our constant pursuit is to build Engaging games
                    that spared joy. Don’t hesitate to Reach out to us with your
                    thoughts and messages - We are all ears!
                  </p>
                </div>
                <h4 className=" mb-0 ff-roboto fw-400 text-24 lh-2813 text-white mt_38">
                  Address
                </h4>
                <div className=" mt-2 pt-1">
                  <p className=" mb-0 ff-roboto fw-400 text-16 lh-24 text-white opacity_7 mt-2">
                    390 Orchard Road, 03-07, Palais Renaissance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Update;
