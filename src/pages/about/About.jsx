import React from "react";
import cpm from "./Aboutcpm";
import data from "./data.json";

function About() {
  return (
    <cpm.BodyWarper>
      <cpm.ContentWarper>
        <cpm.HeroImageWarper>
          <HeroImage />
        </cpm.HeroImageWarper>

        <cpm.HeroTextWarper>
          <HeroText />
        </cpm.HeroTextWarper>
      </cpm.ContentWarper>
    </cpm.BodyWarper>
  );
}

export default About;

const HeroImage = () => {
  return (
    <>
      <cpm.Image src={data.heroimage} />
    </>
  );
};
const HeroText = () => {
  return (
    <>
      <cpm.HeroTitleHeader>{data.heroTextTitle}</cpm.HeroTitleHeader>
      <cpm.HeroSubTitleWraper>
        <cpm.HeroSubTitle>{data.heroTextDetail}</cpm.HeroSubTitle>
      </cpm.HeroSubTitleWraper>
    </>
  );
};
