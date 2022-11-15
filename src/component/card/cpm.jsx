import styled from "styled-components";
const Container = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0 solid;
  gap: 10px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 100%);
  border-radius: 8px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height:100% ;
  /* height: auto; */
  vertical-align: bottom;
  object-fit: contain;
`;

const imageWarper = styled.div`
  width: 100%;
  height: 50%;
  background-color: hsl(210, 8%, 95%);
`;
const subTitleWarper = styled.div`
  width: 100%;
  height: 100px;
  background-color: hsl(210, 8%, 97.5%);
  overflow-y: auto;
`;
const actionWarper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  /* background-color: red; */
  background-color: rgb(220, 220, 220);
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const footeIconWarper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
  background-color: inherit;
  /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15); */
  font-size: 15px;
`;

const footeIconTextWarper = styled.div`
font-size: 10px;
font-weight: lighter;
font-style: italic;
color: inherit;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const footeIconWithTextWarper = styled.div`

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`;

const ServicePrice = styled.h4`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  background-color: ${({ color }) => color};
  color: #fff;
  font-weight: bold;
  border-radius: 0px 8px 8px 0px;
  padding: 12px 8px 12px 8px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const TextDetail = styled.p`
  margin-top: 10px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubTextDetail = styled.li`
  margin-top: 5px;
  text-align: right;
  font-family: "Cairo", sans-serif;
  font-weight: 300;
  line-height: 1.9rem;
  width: 100%;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export default {
  Container,
  Image,
  ServicePrice,
  TextDetail,
  SubTextDetail,
  imageWarper,
  subTitleWarper,
  actionWarper,
  footeIconWarper,
  footeIconTextWarper,
  footeIconWithTextWarper,
};
