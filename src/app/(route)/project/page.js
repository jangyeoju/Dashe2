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
export default function Project() {
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
        <Nav select={'projects'} />
        <ProjectWrap>
          <ContainerBox>
            <Col id="col1">
              <div className="img-wrap w-4">
                <a href="">
                  <ImgBox>
                    <img src="/img/1box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>GoodFriendsPay</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-6">
                {/* <ImgBox > */}
                <img src="/img/1box-2.png" width="100%" />
                {/* </ImgBox> */}
              </div>
            </Col>
            <Col>
              <div className="img-wrap w-3 mb-2">
                <a href="">
                  <ImgBox>
                    <img src="/img/2box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>후기부등본</h3>
                  <h5>UIUX Design</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-3">
                <a href="">
                  <ImgBox>
                    <img src="/img/3box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>SEGO PUMP</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-3">
                <a href="">
                  <ImgBox>
                    <img src="/img/4box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>aegis AI</h3>
                  <h5>UIUX Design</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-5">
                <a href="">
                  <ImgBox>
                    <img src="/img/5box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>Togle</h3>
                  <h5>UIUX Design</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-5">
                <a href="">
                  <ImgBox>
                    <img src="/img/6box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>DailyCon</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-3">
                <a href="">
                  <ImgBox>
                    <img src="/img/7box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>블루핀</h3>
                  <h5>UIUX Design</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-3">
                <a href="">
                  <ImgBox>
                    <img src="/img/8box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>Electronic Nursing Education Book</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-3">
                <a href="">
                  <ImgBox>
                    <img src="/img/9box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>WEJ</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
            </Col>
            <Col className="mb-4">
              <div className="img-wrap w-6 mb-2">
                <img src="/img/10box-2.png" width="100%" />
              </div>
              <div className="img-wrap w-4">
                <a href="">
                  <ImgBox>
                    <img src="/img/10box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>SAMKOO</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
            </Col>
            <Col>
              <div className="img-wrap w-5 mb-2">
                <a href="">
                  <ImgBox>
                    <img src="/img/11box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>PrimeQA</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
              <div className="img-wrap w-5">
                <a href="">
                  <ImgBox>
                    <img src="/img/12box.png" width="100%" />
                  </ImgBox>
                </a>
                <TextBox>
                  <h3>Chat UI</h3>
                  <h5>UIUX Design | Admin Dashboard</h5>
                  <p>
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </TextBox>
              </div>
            </Col>
          </ContainerBox>
        </ProjectWrap>
        <Footer />
      </ThemeProvider>
    </>
  );
}

const ProjectWrap = styled(Box)`
  padding-top: 13rem;
  padding-bottom: 10rem;
  .mb-4 {
    margin-bottom: 4rem;
  }
  @media ${() => theme.device.mobile} {
    .mb-4 {
      margin: 0;
    }
    #col1 {
      flex-direction: column-reverse;
    }
    .mb-2 {
      margin-bottom: 2rem !important;
    }
  }
`;

const Col = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    overflow: hidden;
    display: inline-block;
    border-radius: 8px;
  }
  .w-3 {
    width: 32%;
  }
  .w-5 {
    width: 49%;
  }
  .w-6 {
    width: 58%;
  }
  .img-wrap {
    margin-bottom: 4rem;
    img {
      border-radius: 8px;
    }
  }
  .img-wrap:first-of-type {
    margin: 0;
  }
  @media ${() => theme.device.tablet} {
    &:first-of-type {
      margin-bottom: 2rem;
    }
    .w-3 {
      width: 49%;
    }
    .w-6 {
      width: 49%;
    }
    .w-4 {
      width: 49%;
    }
  }
  @media ${() => theme.device.tablet} {
    .w-3 {
      width: 100%;
    }
    .w-6 {
      width: 100%;
    }
    .w-4 {
      width: 100%;
    }
    .w-5 {
      width: 100%;
    }
    .img-wrap {
      margin-bottom: 2rem;
    }
  }
`;

const ImgBox = styled(Box)`
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  img {
    border-radius: 8px;
  }
  &:hover {
    transform: scale(1.15);
  }

  @media ${() => theme.device.tablet} {
  }

  @media ${() => theme.device.mobile} {
  }
`;

const TextBox = styled(Box)`
  margin-top: 2rem;
  h3 {
    font-size: 2rem;
    color: #fff;
    line-height: 150%;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  h5 {
    font-size: 1.6rem;
    color: #fff;
    font-weight: 500;
  }
  p {
    font-size: 1.4rem;
    color: #bcbbbb;
    font-weight: 300;
    line-height: 150%;
    margin-top: 1rem;
  }
  @media ${() => theme.device.tablet} {
    margin-top: 1rem;
    p {
      display: none;
    }
  }
`;
