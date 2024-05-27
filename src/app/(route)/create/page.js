'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '@/app/style/theme';
import Nav from '@/app/components/nav/Nav';
import ContainerBox from '@/app/components/layout/ContainerBox';
import SolidBtn from '@/app/components/button/SolidBtn';
import AddIcon from '@mui/icons-material/Add';
import Footer from '@/app/components/footer/Footer';
import FilledBtn from '@/app/components/button/FilledBtn';

export default function Create() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
    palette: {
      primary: {
        main: '#EC34A3',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav select={'create'} />
        <SubBanner>
          <h1>
            You can create <br />
            the image you want
          </h1>
          <h3>원하는 SNS 채널별 이미지를 사이즈에 맞게 생성해드립니다.</h3>
        </SubBanner>
        <CreateWrap>
          <ContainerBox>
            <ul>
              <li>
                <h2>
                  디자인 컨셉을 알려주세요. <span>* 필수</span>
                </h2>
                <input
                  type="text"
                  id="keywordInput"
                  placeholder="원하는 컨셉을 문장으로 표현해주세요"
                  required
                />
              </li>
              <li>
                <h2>
                  원하는 디자인 컨셉 이미지를 선택해주세요. <span>* 필수</span>
                </h2>
                <div class="checkbox-wrap2">
                  <input
                    type="radio"
                    id="concept1"
                    name="concept"
                    value="concept1"
                  />
                  <label for="concept1">
                    <div className="concept-img" id="concept-img1"></div>
                    <h3>실사 이미지</h3>
                  </label>
                  <input
                    type="radio"
                    id="concept2"
                    name="concept"
                    value="concept2"
                  />
                  <label for="concept2">
                    <div className="concept-img" id="concept-img2"></div>
                    <h3>일러스트 이미지</h3>
                  </label>
                  <input
                    type="radio"
                    id="concept3"
                    name="concept"
                    value="concept3"
                  />
                  <label for="concept3">
                    <div className="concept-img" id="concept-img3"></div>
                    <h3>3D 이미지</h3>
                  </label>
                  <input
                    type="radio"
                    id="concept4"
                    name="concept"
                    value="concept4"
                  />
                  <label for="concept4">
                    <div className="concept-img" id="concept-img4"></div>
                    <h3>아이콘 이미지</h3>
                  </label>
                  <input
                    type="radio"
                    id="concept5"
                    name="concept"
                    value="concept5"
                  />
                  <label for="concept5">
                    <div className="concept-img" id="concept-img5"></div>
                    <h3>라인 이미지</h3>
                  </label>
                </div>
              </li>
              <li>
                <h2>원하는 컨셉의 이미지를 업로드 해주세요.</h2>
                <input type="file" id="imageUpload" accept="image/*" />
              </li>
              <li>
                <h2>
                  원하는 컬러 코드를 입력해주세요. <span>* 필수</span>
                </h2>
                <div class="color-wrap">
                  {/* <div id="colorPalette"></div> */}
                  <input
                    type="text"
                    id="colorInput"
                    placeholder="Ex) #000000"
                    required
                  />
                </div>
              </li>
              <li>
                <h2>
                  이미지 생성이 필요한 채널을 선택해주세요. <span>* 필수</span>
                </h2>
                <div class="checkbox-wrap">
                  <input
                    type="checkbox"
                    id="youtube"
                    name="socialMedia"
                    value="YouTube"
                  />
                  <label for="youtube">YouTube</label>
                  <input
                    type="checkbox"
                    id="instagram"
                    name="socialMedia"
                    value="Instagram"
                  />
                  <label for="instagram">Instagram</label>
                  <input
                    type="checkbox"
                    id="facebook"
                    name="socialMedia"
                    value="Facebook"
                  />
                  <label for="facebook">Facebook</label>
                  <input
                    type="checkbox"
                    id="linkedin"
                    name="socialMedia"
                    value="LinkedIn"
                  />
                  <label for="linkedin">LinkedIn</label>
                  <input
                    type="checkbox"
                    id="naverBlog"
                    name="socialMedia"
                    value="Naver Blog"
                  />
                  <label for="naverBlog">Naver Blog</label>
                </div>
              </li>
              <li>
                <h2>
                  결과물을 받을 이메일 주소를 입력해주세요. <span>* 필수</span>
                </h2>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@naver.com"
                  required
                />
              </li>
              <div className="center">
                <FilledBtn text={'Create Image'} />
              </div>
            </ul>
          </ContainerBox>
        </CreateWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const SubBanner = styled(Box)`
  background-image: url(../img/subBanner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 6rem;
    color: #fff;
    line-height: 130%;
    text-align: center;
    margin: 0 0 2rem 0;
    letter-spacing: -1.5px;
  }
  h3 {
    color: #fff;
    line-height: 130%;
    text-align: center;
    font-size: 2.4rem;
  }
  @media ${() => theme.device.mobile} {
    height: 35rem;
    padding: 5rem 2rem 0 2rem;
    h1 {
      font-size: 3.5rem;
    }
  }
`;

const CreateWrap = styled(Box)`
  margin: 5rem 0 10rem 0;
  ul {
    li {
      margin-bottom: 5rem;
    }
  }
  h2 {
    font-size: 1.6rem;
    color: #fff;
    & > span {
      font-size: 1.4rem;
      color: #ec34a3;
      font-weight: 400;
    }
  }
  .color-wrap {
    display: flex;
    align-items: center;
  }
  input[type='text'],
  input[type='file'],
  input[type='email'] {
    width: 100%;
    padding: 1.5rem 2rem;
    margin-top: 10px;
    font-size: 1.6rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
  input[type='file'] {
    background-color: #fff;
  }
  input[type='checkbox'] {
    margin-right: 5px;
    display: none;
  }
  input[type='checkbox'] + label {
    /* background-color: #fff; */
    border: 1px solid #ec34a3;
    color: #ec34a3;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;
  }
  input[type='checkbox']:checked + label {
    background-color: #ec34a3;
    color: #fff;
  }

  input[type='radio'] {
    margin-right: 5px;
    display: none;
  }
  input[type='radio'] + label {
    /* background-color: #fff; */
    border: 1px solid #ec34a3;
    color: #ec34a3;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;
  }
  input[type='radio'] + label:last-of-type {
    margin: 0;
  }
  input[type='radio']:checked + label {
    background-color: #ec34a3;
    color: #fff;
  }
  label {
    margin-right: 20px;
    font-size: 16px;
  }

  .checkbox-wrap2 {
    margin-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    label {
      width: 19%;
      padding: 1rem !important;
      .concept-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 30rem;
      }
      #concept-img1 {
        background-image: url(../img/concept/concept1.png);
      }
      #concept-img2 {
        background-image: url(../img/concept/concept2.png);
      }
      #concept-img3 {
        background-image: url(../img/concept/concept3.png);
      }
      #concept-img4 {
        background-image: url(../img/concept/concept4.png);
      }
      #concept-img5 {
        background-image: url(../img/concept/concept5.png);
        background-position: left;
      }
      h3 {
        text-align: center;
        font-size: 1.6rem;
        padding: 1rem 0 0 0;
      }
    }
  }
  .checkbox-wrap {
    margin-top: 20px;
  }
  .concept-img {
    height: 15rem;
  }
  #colorPalette {
    width: 40px;
    height: 40px;
    border: 1px dashed #ec34a3;
    margin-top: 10px;
    background-color: #000;
    display: inline-block;
    border-radius: 100px;
    margin-right: 20px;
  }

  #spinner {
    color: #007bff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
  }

  #output {
    margin-top: 30px;
    width: 100%;
    overflow: scroll;
    padding: 0 10%;
  }
  #output h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #3b3b3b;
    font-weight: bold;
  }
  .outputDiv {
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .outputDiv:not(:last-child) {
    margin-bottom: 20px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  }

  @media ${() => theme.device.tablet} {
    .checkbox-wrap2 {
      flex-wrap: wrap;
      label {
        width: 49%;
        margin: 0;
        .concept-img {
          height: 20rem;
        }
      }
    }
    .checkbox-wrap {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    input[type='checkbox'] + label {
      width: 49%;
      margin: 0 0 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media ${() => theme.device.mobile} {
    margin: 2rem 0 5rem 0;
  }
`;
