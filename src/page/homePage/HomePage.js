import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Section1 } from "../../components/section1/Section1";
import { Section2 } from "../../components/section2/Section2";
import { Section3 } from "../../components/section3/Section3";
import { Section4 } from "../../components/section4/Section4";
import { ContactPopup } from "../../components/contactPopup/ContactPopup";

export const HomePage = () => {
  const [contactPopup, setcontactPopup] = useState({ show: false, data: {} });
  const setContact = (show, data) => {
    setcontactPopup({
      show: show,
      data: data,
    });
  };
  useEffect(() => {
    console.log(contactPopup);
  }, [contactPopup.show]);
  return (
    <div className="homePage-wrapper">
      <div style={{ margin: "0 auto", maxWidth: 1300, width: "100%" }}>
        <Section1 />
        <Section2 setcontactPopup={setContact} />
        <Section3 />
        <Section4 />
      </div>
      {contactPopup.show && (
        <ContactPopup
          contactPopup={contactPopup}
          setcontactPopup={setContact}
        />
      )}
    </div>
  );
};
