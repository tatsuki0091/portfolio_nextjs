import styled from "styled-components";
import Image from "next/image";

export const Header = styled.h1`
  font-size: 4em;
  margin-bottom: 5%;
`;

export const Img = styled(Image)`
  max-width: 100%;
`;

export const Timeline = styled.div`
  text-align: center;
  .year {
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    span {
      display: inline-block;
      padding-bottom: 6px;
    }
    &:after {
      content: "";
      display: block;
      width: 80%;
      margin: auto;
      height: 1px;
      background: black;
    }
    &--end {
      &:before {
        content: "";
        display: block;
        width: 80%;
        margin: auto;
        height: 1px;
        background: black;
      }
      &:after {
        content: none;
      }
    }
  }
`;

export const Days = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    .day {
        width: 100%;
        float: left;
        .events {
          position: relative;
          float: left;
          border-right: 1px solid black;
          padding: 30px;
          text-align: right;
          width: 50%;
          &:after {
            content: "";
            width: 40%;
            display: inline-block;
            height: 1px;
            background: black;
            position: absolute;
            right: 0;
          }
          .date {
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            padding: 30px;
            text-align: left; 
            color: black;
            font-size: 24px;
            white-space: nowrap;
          }
          .day__img {
            margin-right: -30px;
            position: relative;
            overflow: hidden;
            img {
              display: block;
              float: right;
            }
            .caption {
              position: absolute;
              margin: 0;
              bottom: 0;
              right: 0;
              padding: 20px;
              background: rgba(#000, 0.7);
              color: #fff;
            }
          }
        }
        &:nth-child(odd) {
          .events {
            width: calc(50% + 1px);
            float: right;
            border-right: 0;
            border-left: 1px solid black;
            text-align: left;
            &:after {
              right: auto;
              left: 0;
            }
            .date {
              left: auto;
              right: 100%;
              text-align: right;
            }
            
            .day__img {
              margin-right: auto;
              margin-left: -30px;
  
              img {
                float: left;
              }
  
              .caption {
                right: auto;
                left: 0;
              }
            }
          }
        }
      }
    }
`;
