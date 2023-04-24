import styled from "styled-components";

export const WhySingleItem = styled("div")``;

export const HowToLaunchIcon = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  position: relative;
  margin-right: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(99.72deg, #2c69d1 7.35%, #0abcf9 86.94%);
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const HowToLaunchContent = styled("div")`
  min-height: 90px;
  margin-left: 7px;
  padding-left: 18px;
  padding-top: 5px;
  line-height: 17.86px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 90%;
    background-color: black;
    border-radius: 0 2px 2px 0;
  }

  &:hover::before {
    background-color: #2c69d1;
  }
`;

export const DisputeBox = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 9px 19px;
  border-radius: 30px;
  margin-bottom: 9.74px;

  &:nth-child(1) {
    background: linear-gradient(
      92.5deg,
      #3971ff 0%,
      #000000 98.89%,
      #333333 98.89%
    );
  }

  &:nth-child(1) {
    background: linear-gradient(
      92.5deg,
      #3971ff 0%,
      #000000 98.89%,
      #333333 98.89%
    );
  }

  &:nth-child(2) {
    background: linear-gradient(
      97.59deg,
      .timeline {display: flex; flex-direction: row;} .timeline-item {display: flex;
        flex-direction: row; align-items: flex-start; margin-bottom: 20px;}
        .timeline-item-date {font-size: 24px; font-weight: bold; margin-right: 20px;}
        .timeline-item-content {margin-left: 20px;} .timeline-item-content h3 {font-size:
        20px; margin-bottom: 10px;} .timeline-item-content p {font-size: 16px; line-height:
        1.5; margin-bottom: 0;} #333333 0%,
      #333333 0.01%,
      #0053ff 100%
    );
  }

  &:nth-child(3) {
    background: linear-gradient(110.28deg, #074fe4 24.99%, #7d1993 99.95%);
    border-radius: 30.4256px;
  }

  &:nth-child(4) {
    background: linear-gradient(
      97.59deg,
      #333333 0%,
      #333333 0.01%,
      #0053ff 100%
    );
  }

  &:nth-child(5) {
    background: linear-gradient(
      92.5deg,
      #3971ff 0%,
      #000000 98.89%,
      #333333 98.89%
    );
  }
`;
