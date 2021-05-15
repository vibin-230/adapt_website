import React from "react";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";
import "./Section4.css";

export const Section4 = () => {
  const data = [
    {
      format: "first '.' last",
      email: "jane.doe@sonymusic.com",
      percent: "80.233%",
    },
    {
      format: "first last",
      email: "janedoe@sonymusic.com",
      percent: "4.651%",
    },
    {
      format: "last first_initial",
      email: "doej@sonymusic.com",
      percent: "3.488%",
    },
    {
      format: "last",
      email: "doe@sonymusic.com",
      percent: "3.488%",
    },
    {
      format: "first",
      email: "jane@sonymusic.com",
      percent: "2.326%",
    },
    {
      format: "first_initial last",
      email: "jdoe@sonymusic.com",
      percent: "2.326%",
    },
  ];
  return (
    <section className="section4">
      <span className="section4_title">Email Pattern</span>
      <ContentWrapper>
        <div className="table_title">
          <span>Sony Music Email Format</span>
          <span></span>
          <span>Percentage</span>
        </div>
        {data.map((a) => {
          return (
            <div className="table_content">
              <span>{a.format}</span>
              <span>{a.email}</span>
              <span>{a.percent}</span>
            </div>
          );
        })}
      </ContentWrapper>
      <div style={{ display: "flex" }}>
        <button style={{ margin: "0 auto" }} className="contact_button">
          GET FREE CONTACTS
        </button>
      </div>
    </section>
  );
};
