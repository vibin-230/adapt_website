import React from "react";
import { BsBuilding } from "react-icons/bs";
import { ContentWrapper } from "../contentWrapper/ContentWrapper";

import "./Section3.css";

export const Section3 = () => {
  const data = [
    {
      distance: 49,
      name: "Sales",
      colors: "#0d5fa3",
    },
    {
      distance: 171,
      name: "Marketing",
      colors: "#2076b8",
    },
    {
      distance: 41,
      name: "Engineering",
      colors: "#32a3ff",
    },
    {
      distance: 62,
      name: "IT & IS",
      colors: "#89caff",
    },
    {
      distance: 54,
      name: "Operations",
      colors: "#a4d6ff",
    },
    {
      distance: 104,
      name: "Finance",
      colors: "#c1e3ff",
    },
    {
      distance: 148,
      name: "Other",
      colors: "#dbefff",
    },
  ];
  const companies = [
    {
      name: "Topgolf Usa Inc.",
      address: "1717 McKinney Ave Site 800, Dallas, United States.",
    },
    {
      name: "Equinox Holsings Inc.",
      address: "895 Broadway, New York, United States.",
    },
    { name: "Uiowa", address: "201 N Madison St, Iowa City, United States." },
  ];
  return (
    <section className="section3">
      <span className="section3_title">Contacts By Department</span>
      <ContentWrapper>
        <div style={{ padding: "36px", display: "flex", width: "100%" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <div className="container">
              <span className="container_total">
                Total Contacts: {data.reduce((a, b) => a + b.distance, 0)}
              </span>
              <span className="mainContainer">
                {data.map(({ distance, colors }, i) => {
                  return (
                    <div className="barChartContainer" key={i}>
                      <div className="number" style={{ color: "#2076b8" }}>
                        {distance}
                      </div>
                      <div
                        className="chart"
                        style={{
                          height: `${(distance / 171) * 100}%`,
                          background: colors,
                        }}
                      />
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
          <div className="container_data">
            {data.map((a) => (
              <div>
                <span
                  className="colored_box"
                  style={{ background: a.colors }}
                ></span>
                <span>{a.name}</span>
                <span style={{ marginLeft: "10px" }}>({a.distance})</span>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
      <span className="section3_title">Similar Companies</span>
      <div className="companies_container">
        {companies.map((company) => (
          <ContentWrapper>
            <span className="card_name">
              {" "}
              <BsBuilding
                size={16}
                color={"#9d9d9d"}
                style={{ marginRight: "15px" }}
              />
              {company.name}
            </span>
            <span>{company.address}</span>
          </ContentWrapper>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <button style={{ margin: "0 auto" }} className="contact_see_all_button">
          View all
        </button>
      </div>
    </section>
  );
};
