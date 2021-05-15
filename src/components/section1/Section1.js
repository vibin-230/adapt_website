import React from "react";
import SonyLogo from "../../assets/sony_logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { MdPeopleOutline } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import AdaptLogo from "../../assets/adapt_logo.png";
import { ContentWrapper } from "../../components/contentWrapper/ContentWrapper";
import "./Section1.css";

export const Section1 = () => {
  return (
    <section className="section1">
      <ContentWrapper>
        <div className="container_1_left">
          <div className="contianer_1_title">
            <img
              src={SonyLogo}
              style={{ width: "60px", height: "60px", marginRight: "20px" }}
              alt="sony_logo"
            />
            Sony Music Entertainment
          </div>
          <div className="container_1_left_content">
            <span>
              <span className="container_1_left_subtitle">
                <IoLocationOutline
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "5px" }}
                />
                Location
              </span>
              <span>550 Madison Avenue, 23rd Floor, New York, US</span>
            </span>
            <span>
              <span className="container_1_left_subtitle">
                <BiPhoneCall
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "5px" }}
                />
                Phone Number
              </span>
              <span>+1 212-833-8000</span>
            </span>
            <span>
              <span className="container_1_left_subtitle">
                <VscGlobe
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "5px" }}
                />
                Website
              </span>
              <span>sonymusic.com</span>
            </span>
          </div>
        </div>
        <div className="container_1_right">
          <ContentWrapper>
            <div>
              <span className="logo">
                <img
                  src={AdaptLogo}
                  style={{
                    width: "42px",
                    height: "42px",
                    marginRight: "5px",
                  }}
                  alt="adapt_logo"
                />
                adapt
              </span>
              <span className="container_1_right_text">
                Adapt's data is orgnically compiled and validated by our
                community of 150,000+ active users who use Adapt.
              </span>
              <button>REQUEST A DEMO</button>
            </div>
          </ContentWrapper>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div className="box2_stats_parent">
          <span className="box2_stats">
            <span>
              <span className="box2_stats_title">1K - 10K</span>
              <span>
                <span className="container_1_left_subtitle">
                  <MdPeopleOutline
                    size={16}
                    color={"#9d9d9d"}
                    style={{ marginRight: "5px" }}
                  />
                  Head Count
                </span>
              </span>
            </span>
            <span>
              <span className="box2_stats_title">$50 - 100M</span>
              <span className="container_1_left_subtitle">
                <RiMoneyDollarCircleLine
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "5px" }}
                />
                Revenue
              </span>
            </span>
            <span>
              <span className="box2_stats_title">TRAVEL, RECREATION</span>
              <span className="container_1_left_subtitle">
                <BsBuilding
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "5px" }}
                />
                Industry
              </span>
            </span>
          </span>
          <span>
            Adapt has contact details of 629 people working at Sony Music
            Entertainment includes 99 decition makers, 144 champions and 175
            influencers
          </span>
        </div>
      </ContentWrapper>
    </section>
  );
};
