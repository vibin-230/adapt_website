import React from "react";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";
import { RiUserLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

import "./ContactPopup.css";

export const ContactPopup = (props) => {
  return (
    <div
      className="popup_model"
      onClick={() => props.setcontactPopup(false, {})}
    >
      <ContentWrapper>
        <div className="contact_card">
          <span className="card_name">
            {" "}
            <RiUserLine
              size={16}
              color={"#9d9d9d"}
              style={{ marginRight: "15px" }}
            />
            {props.contactPopup.data.name}
          </span>
          <span
            style={{
              margin: "0 0 36px 31px",
              color: "#6d6d6d",
              fontSize: "17px",
              fontWeight: 500,
            }}
          >
            {props.contactPopup.data.role}
          </span>
          <span>
            {" "}
            <IoBriefcaseOutline
              size={16}
              color={"#9d9d9d"}
              style={{ marginRight: "15px" }}
            />
            {props.contactPopup.data.department}
          </span>
          <span>
            {" "}
            <FiMail
              size={16}
              color={"#9d9d9d"}
              style={{ marginRight: "15px" }}
            />
            {props.contactPopup.data.email}
          </span>
          <span>
            {" "}
            <FiPhone
              size={16}
              color={"#9d9d9d"}
              style={{ marginRight: "15px" }}
            />
            {props.contactPopup.data.phone}
          </span>
          <button className="contact_button">GET CONTACT</button>
        </div>
      </ContentWrapper>
    </div>
  );
};
