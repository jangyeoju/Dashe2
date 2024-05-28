import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import FilledBtn from '../../button/FilledBtn';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import ContainerBox from '@/app/components/layout/ContainerBox';
import theme from '@/app/style/theme';
import { ErrorMessage } from '@hookform/error-message';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';

const defaultValues = {
  description: '',
  concept: undefined,
  color: null,
  socialMedia: [],
  email: null,
};
export default function SubmitForm() {
  const form = useForm({
    defaultValues,
  });

  const { register, handleSubmit, reset } = form;

  const [image, setImage] = useState();
  const { edgestore } = useEdgeStore();

  async function onSubmitForm(data) {
    const imageUrl = image ? await uploadImage(image) : null;

    await sendToGoogleSheet([
      data.email,
      data.description,
      data.concept,
      data.color,
      data.socialMedia.join(', '),
      imageUrl,
    ]);

    resetFields();
  }

  async function uploadImage(file) {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  }

  function sendToGoogleSheet(values) {
    return fetch('/api/spreadsheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  }

  function resetFields() {
    reset(defaultValues);
    setImage(undefined);
  }

  return (
    <CreateWrap>
      <ContainerBox>
        <FormProvider {...form}>
          <form>
            <div>
              <h2>
                디자인 컨셉을 알려주세요. <span>* 필수</span>
              </h2>
              <input
                type="text"
                id="keywordInput"
                placeholder="원하는 컨셉을 문장으로 표현해주세요"
                {...register('description', {
                  required: {
                    value: true,
                    message: '원하는 컨셉을 입력해주세요',
                  },
                })}
              />
              <FormErrorMessage name="description" />
            </div>
            <div id={'concept'}>
              <h2>
                원하는 디자인 컨셉 이미지를 선택해주세요. <span>* 필수</span>
              </h2>
              <div className="checkbox-wrap2">
                <input
                  type="radio"
                  id="concept1"
                  value="실사"
                  {...register('concept')}
                />
                <label htmlFor="concept1">
                  <div className="concept-img" id="concept-img1"></div>
                  <h3>실사 이미지</h3>
                </label>
                <input
                  type="radio"
                  id="concept2"
                  value="일러스트"
                  {...register('concept')}
                />

                <label htmlFor="concept2">
                  <div className="concept-img" id="concept-img2"></div>
                  <h3>일러스트 이미지</h3>
                </label>
                <input
                  type="radio"
                  id="concept3"
                  value="3D"
                  {...register('concept')}
                />
                <label htmlFor="concept3">
                  <div className="concept-img" id="concept-img3"></div>
                  <h3>3D 이미지</h3>
                </label>
                <input
                  type="radio"
                  id="concept4"
                  value="아이콘"
                  {...register('concept')}
                />
                <label htmlFor="concept4">
                  <div className="concept-img" id="concept-img4"></div>
                  <h3>아이콘 이미지</h3>
                </label>
                <input
                  type="radio"
                  id="concept5"
                  value="라인"
                  {...register('concept', {
                    required: {
                      value: true,
                      message: '이미지를 선택해주세요',
                    },
                  })}
                />
                <label htmlFor="concept5">
                  <div className="concept-img" id="concept-img5"></div>
                  <h3>라인 이미지</h3>
                </label>
              </div>
              <FormErrorMessage name="concept" />
            </div>
            <div>
              <h2>원하는 컨셉의 이미지를 업로드 해주세요.</h2>
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files?.[0]);
                }}
              />
            </div>
            <div>
              <h2>
                원하는 컬러 코드를 입력해주세요. <span>* 필수</span>
              </h2>
              <div className="color-wrap">
                <input
                  type="text"
                  id="colorInput"
                  placeholder="Ex) #000000"
                  {...register('color', {
                    required: {
                      value: true,
                      message: '컬러 코드를 입력해주세요',
                    },
                  })}
                />
              </div>
              <FormErrorMessage name="color" />
            </div>
            <div>
              <h2>
                이미지 생성이 필요한 채널을 선택해주세요. <span>* 필수</span>
              </h2>
              <div className="checkbox-wrap">
                <input
                  type="checkbox"
                  id="youtube"
                  value="YouTube"
                  {...register('socialMedia')}
                />
                <label htmlFor="youtube">YouTube</label>
                <input
                  type="checkbox"
                  id="instagram"
                  value="Instagram"
                  {...register('socialMedia')}
                />
                <label htmlFor="instagram">Instagram</label>
                <input
                  type="checkbox"
                  id="facebook"
                  value="Facebook"
                  {...register('socialMedia')}
                />
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="checkbox"
                  id="LinkedIn"
                  value="LinkedIn"
                  {...register('socialMedia')}
                />
                <label htmlFor="LinkedIn">LinkedIn</label>
                <input
                  type="checkbox"
                  id="naverBlog"
                  value="Naver Blog"
                  {...register('socialMedia', {
                    validate: (selectedMedia) =>
                      selectedMedia.length > 0 ||
                      '최소 한 개 이상의 채널을 선택해 주세요',
                  })}
                />
                <label htmlFor="naverBlog">Naver Blog</label>
              </div>
              <FormErrorMessage name="socialMedia" />
            </div>
            <div>
              <h2>
                결과물을 받을 이메일 주소를 입력해주세요1. <span>* 필수</span>
              </h2>
              <input
                type="email"
                placeholder="email@naver.com"
                {...register('email', {
                  required: {
                    value: true,
                    message: '유효한 이메일을 입력해주세요.',
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: '유효한 이메일을 입력해주세요.',
                  },
                })}
              />
              <FormErrorMessage name="email" />
            </div>
          </form>
          <div className="center">
            <FilledBtn
              type="button"
              text="Create Image"
              onClick={handleSubmit(onSubmitForm)}
            />
          </div>
        </FormProvider>
      </ContainerBox>
    </CreateWrap>
  );
}

function FormErrorMessage({ name }) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <Message>{message}</Message>}
    />
  );
}

const Message = styled('div')`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: red;
`;

const CreateWrap = styled(Box)`
  margin: 5rem 0 10rem 0;
  form {
    display: flex;
    flex-direction: column;
    gap: 5rem;
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
    margin: 0;
    appearance: none;
  }
  input[type='checkbox'] + label {
    /* background-color: #fff; */
    border: 1px solid #ec34a3;
    color: #ec34a3;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 4px;
    transition: all 0.3s ease-in-out;
  }
  input[type='checkbox']:checked + label {
    background-color: #ec34a3;
    color: #fff;
  }

  input[type='radio'] {
    margin: 0;
    appearance: none;
  }
  input[type='radio'] + label {
    /* background-color: #fff; */
    border: 1px solid #ec34a3;
    color: #ec34a3;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 4px;
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
