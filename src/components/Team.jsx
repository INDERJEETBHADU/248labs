import React from "react";
import Image from "next/image";

function Team() {
  return (
    <>
      <section className=" bg-black mt_neg_1 position-relative   " id="team">
        <div className="container_2 pt_48 pb-5">
          <div className=" d-flex justify-content-center ">
            <button className=" mb-0 ff-roboto fw-400 text-16 lh-192  team_btn  br_30">
              <span className=" text_gradient">Our Team</span>
            </button>
          </div>
          <h2 className=" mb-0 mt-3 ff-roboto fw-700  text-52 lh-62 text-center text-white">
            Behind our expertise
          </h2>
          {/* card----part--starts---here */}
          <div className="row pt_36  ">
            {/* 1 */}
            <div className="col-lg-6 d-flex justify-content-center col-12">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_1.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        James Vuong
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Co-CEO)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      James is a dynamic CEO leading two thriving companies. He
                      co-founded ROOMERANG, elevating it from $0 to $8 million
                      in annual net revenue in just 5 years. Additionally, as a
                      co-founder of KEYNINJA, James achieved an{" "}
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt_10">
                  impressive 50% year-over-year net revenue growth within the
                  same timeframe. With a background in property valuation,
                  sales, and technology, James brings a unique blend of skills
                  to drive innovation and success in both ventures.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14 pt-lg-0">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_2.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Tricia Yong
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Co-CEO)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Tricia is a Marketing Director with 15 years of expertise,
                      co-founded ROOMERANG and KEYNINJA with James Vuong,
                      bringing a wealth of knowledge from the tech industry,
                      property valuation, and consumer
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt-2">
                  products. With a background in consumer behavior, UI/UX
                  design, and marketing strategies, she adeptly navigates the
                  convergence of technology and marketing. Tricia is renowned
                  for crafting compelling narratives that deeply resonate with
                  both business clients and consumers, propelling the company to
                  success in the ever-evolving tech landscape.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_3.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Kevin Li
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (CFO)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Kev is a seasoned CFO with 15 years of expertise in the
                      Big Pharma sector, demonstrated his leadership by
                      establishing a successful branch office in Myanmar,
                      overseeing its growth to 70 employees in just 24 months.
                      His
                    </p>
                  </div>
                  <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt-2">
                  strategic pricing initiatives for life-saving medications not
                  only gained eligibility onto the government reimbursement list
                  in Singapore, Sri Lanka, and the Maldives but also
                  significantly alleviated the financial burden on patients
                  grappling with the costs of disease.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_4.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Ryan Ang
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Lorem Ipsum)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Experienced in investing in traditional equity markets and
                      blockchain companies. Early adopter of digital assets and
                      co-founded a decentralised finance application that
                      provides walletservices, swaps and DeFi
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt-2">
                  products. Previously in the private equity arm of one of
                  Singapore’s leading asset management funds, Dymon Asia
                  Capital. Previously the fund manager at Blockchain Ventures.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_5.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Dylan
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Executive Producer)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Lorem ipsum dolor sit amet consectetur. Quis in
                      ullamcorper molestie velit proin est. Vestibulum eget eu
                      in egestas. Consequat mi consequat eu eu id integer est.
                      Eget at egestas morbi vitae platea imperdiet sed egestas
                      dignissim.
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt_10">
                  Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 6 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 overflow-hidden position-relative">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_6.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Ralf
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Lorem Ipsum)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Lorem ipsum dolor sit amet consectetur. Cursus vulputate
                      facilisis mattis diam consectetur molestie ultrices.
                      Laoreet sagittis facilisis consequat dignissim viverra
                      etiam gravida. Eu cursus scelerisque purus pharetra enim.
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt_10">
                  Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit
                  fermentum. Cursus at sed commodo ac mattis feugiat vel
                  faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a
                  feugiat massa fringilla justo consectetur. Eu euismod viverra
                  ut porttitor sed leo. Eget viverra etiam sit nunc.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 7 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_7.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2  text-nowrap">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Jordan Stratford
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Creative Director)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Jordan is an international best-selling author of the
                      Wollstonecraft Detective Agency series with Penguin Random
                      House, which was adapted to a mobile game for iOS,
                      Android, and Nintendo Switch, and is in development
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt_10">
                  for television with the world’s largest streaming producer.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
            {/* 7 */}
            <div className="col-lg-6 d-flex justify-content-center col-12 pt_14">
              <div className="team_card_1 br_30 position-relative overflow-hidden">
                <div className=" d-flex flex-column flex-sm-row  align-items-center gap-3">
                  <Image
                    className="  br_30 "
                    src="/images/team_8.png"
                    width={236}
                    height={198.83}
                    alt="Picture of the author"
                  />
                  <div className="">
                    <div className="  d-flex align-items-center gap-2  text-nowrap">
                      <h6 className=" mb-0 ff-roboto fw-600 text-20 lh-24 text-white">
                        Jae Sik Choi
                      </h6>
                      <p className=" mb-0 ff-roboto fw-400 text-16 lh-192 text_gradient">
                        (Lorem Ipsum)
                      </p>
                    </div>
                    <p className=" ff-roboto fw-400 mb-0 text-16 lh-24 text-white opacity_7 mt-3">
                      Early adopter of digital assets since 2011, founded Garuda
                      Crypto, The Cryptocurrency Fund Project and Kalian
                      Cryptocurrency Fund, along with being deeply experienced
                      in DeFi and dApps since 2019. Previously an ex-NAB
                    </p>
                  </div>
                </div>
                <p className=" mb-0  ff-roboto fw-400 text-16 lh-24 text-white  opacity_7 mt_10">
                  Specialised Transaction Management Associate, experienced in
                  fixed income structured products, KYC/AML, FATCA and CRS
                  reporting. Holds a Master of Applied Finance from Monash
                  University.
                </p>
                <div className="hover_ellipse position-absolute hover_ellips_pos"></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" mb-0 ff-roboto fw-700 lh-224 text-187 text-white opacity_06 position-absolute text_pos_team d-none d-xl-block">
          Our Team
        </h2>
        <div className="team_ellipse_right position-absolute d-none d-xl-block "></div>
      </section>
    </>
  );
}

export default Team;
