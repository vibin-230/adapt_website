import React from "react";
import { RiUserLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { ContentWrapper } from "../../components/contentWrapper/ContentWrapper";
import "./Section2.css";

export const Section2 = (props) => {
  const contacts = [
    {
      id: "12344sf",
      name: "Louis Napoletani",
      role: "Product Owner",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
    {
      id: "123sads",
      name: "Anant Srivastava",
      role: "Dep General Manager",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
    {
      id: "ac64344",
      name: "Sean Watson",
      role: "Managing Director",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
    {
      id: "ak2a578",
      name: "Annette Donnelly",
      role: "Managing Director",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
    {
      id: "ru24sf8",
      name: "Gordon Pitt",
      role: "General Manager, Leagal & Business Affairs",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
    {
      id: "34a5sr8",
      name: "Ismary Rodriguez",
      role: "Vice President, International Marketing/Masterworks",
      department: "Finance & Administration",
      email: "*******@sonymusic.com",
      phone: "** *** *** ****",
    },
  ];
  return (
    <section className="section2">
      <span className="section2_title">Top Contacts</span>
      <div>
        {contacts.map((contact) => (
          <ContentWrapper onClick={() => props.setcontactPopup(true, contact)}>
            <div className="contact_card">
              <span className="card_name">
                {" "}
                <RiUserLine
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "15px" }}
                />
                {contact.name}
              </span>
              <span
                style={{
                  margin: "0 0 36px 31px",
                  color: "#6d6d6d",
                  fontSize: "17px",
                  fontWeight: 500,
                }}
              >
                {contact.role}
              </span>
              <span>
                {" "}
                <IoBriefcaseOutline
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "15px" }}
                />
                {contact.department}
              </span>
              <span>
                {" "}
                <FiMail
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "15px" }}
                />
                {contact.email}
              </span>
              <span>
                {" "}
                <FiPhone
                  size={16}
                  color={"#9d9d9d"}
                  style={{ marginRight: "15px" }}
                />
                {contact.phone}
              </span>
              <button className="contact_button">GET CONTACT</button>
            </div>
          </ContentWrapper>
        ))}
      </div>
      <div>
        <button style={{ margin: "0 auto" }} className="contact_see_all_button">
          See all Sony Music Contacts
        </button>
      </div>
    </section>
  );
};
