import React from "react";
import GoogleMap from "../../component/googleMap/GoogleMap";
import styled from "styled-components";
import cpm from "./ContactCpm";
// import data from "./data.json";

const Btn = styled.button`
  outline: none;
  padding: 0.5rem;
  min-width: 5rem;
  font-family: "Cairo";
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.nafbar};
  color: ${({ theme }) => theme.text};
`;

function Contact() {
  return (
    <cpm.BodyWarper>
      <GoogleMap />
      <Callme />
      adreess - google map - telephone - whatsup mailme
    </cpm.BodyWarper>
  );
}

export default Contact;

const Callme = () => {

  const makecall=() => {
    return (
    <>
    <a href="tel:055125230">fgf</a>
    </>
    )

  }


  return (
    <>
      <Btn  ><a href="tel:0502699023">call</a></Btn>
    </>
  );
};
