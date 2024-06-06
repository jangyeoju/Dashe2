import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import FilledBtn from '../../button/FilledBtn';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import ContainerBox from '@/app/components/layout/ContainerBox';
import theme from '@/app/style/theme';
import { ErrorMessage } from '@hookform/error-message';
import { useEdgeStore } from '@/lib/edgestore';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const defaultValues = {
  description: '',
  concept: undefined,
  color: null,
  socialMedia: [],
  name: null,
  company: null,
  email: null,
};
export default function SubmitForm() {
  const router = useRouter();
  const form = useForm({
    defaultValues,
  });

  const { register, handleSubmit, reset } = form;

  const imageInputRef = useRef(null);
  const [image, setImage] = useState();
  const { edgestore } = useEdgeStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  async function onSubmitForm(data) {
    setIsSubmitting(true);

    try {
      const imageUrl = image ? await uploadImage(image) : null;
      await sendToGoogleSheet([
        data.name,
        data.company,
        data.email,
        data.description,
        data.concept,
        data.color,
        data.socialMedia.join(', '),
        imageUrl,
      ]);
      router.push('/result');
    } catch (e) {
      toast.error('전송에 실패하였습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
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
            <div>
              <h2>
                원하는 디자인 컨셉 이미지를 선택해주세요. <span>* 필수</span>
              </h2>
              <div className="checkbox-wrap2">
                <label>
                  <input type="radio" value="실사" {...register('concept')} />
                  <div className="concept-img" id="concept-img1"></div>
                  <h3>실사 이미지</h3>
                </label>
                <label>
                  <input
                    type="radio"
                    value="일러스트"
                    {...register('concept')}
                  />
                  <div className="concept-img" id="concept-img2"></div>
                  <h3>일러스트 이미지</h3>
                </label>
                <label>
                  <input type="radio" value="3D" {...register('concept')} />
                  <div className="concept-img" id="concept-img3"></div>
                  <h3>3D 이미지</h3>
                </label>
                <label>
                  <input type="radio" value="아이콘" {...register('concept')} />
                  <div className="concept-img" id="concept-img4"></div>
                  <h3>아이콘 이미지</h3>
                </label>
                <label>
                  <input
                    type="radio"
                    value="라인"
                    {...register('concept', {
                      required: {
                        value: true,
                        message: '이미지를 선택해주세요',
                      },
                    })}
                  />
                  <div className="concept-img" id="concept-img5"></div>
                  <h3>라인 이미지</h3>
                </label>
              </div>
              <FormErrorMessage name="concept" />
            </div>
            <div>
              <h2>원하는 컨셉의 이미지를 업로드 해주세요.</h2>
              <input
                ref={imageInputRef}
                type="file"
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
                <label>
                  <input
                    type="checkbox"
                    value="YouTube"
                    {...register('socialMedia')}
                  />
                  YouTube
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Instagram"
                    {...register('socialMedia')}
                  />
                  Instagram
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Facebook"
                    {...register('socialMedia')}
                  />
                  Facebook
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="LinkedIn"
                    {...register('socialMedia')}
                  />
                  LinkedIn
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Naver Blog"
                    {...register('socialMedia', {
                      validate: (selectedMedia) =>
                        selectedMedia.length > 0 ||
                        '최소 한 개 이상의 채널을 선택해 주세요',
                    })}
                  />
                  Naver Blog
                </label>
              </div>
              <FormErrorMessage name="socialMedia" />
            </div>
            <div>
              <h2>
                이름. <span>* 필수</span>
              </h2>
              <input
                type="text"
                placeholder="ex) 홍길동"
                {...register('name', {
                  required: {
                    value: true,
                    message: '이름을 입력해주세요.',
                  },
                })}
              />
              <FormErrorMessage name="name" />
            </div>
            <div>
              <h2>
                회사. <span>* 필수</span>
              </h2>
              <input
                type="text"
                placeholder="ex) 네이버"
                {...register('company', {
                  required: {
                    value: true,
                    message: '회사를 입력해주세요.',
                  },
                })}
              />
              <FormErrorMessage name="company" />
            </div>
            <div>
              <h2>
                이메일 <span>* 필수</span>
              </h2>
              <input
                type="email"
                placeholder="ex) email@naver.com"
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
              loading={isSubmitting}
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
  input[type='checkbox'],
  input[type='radio'] {
    appearance: none;
    margin: 0;
    padding: 0;
  }

  label {
    font-size: 16px;
  }

  .checkbox-wrap2 {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    align-items: flex-start;
    justify-content: space-between;
    row-gap: 10px;
    column-gap: 15px;
    label {
      border: 1px solid #ec34a3;
      color: #ec34a3;
      padding: 1rem;
      cursor: pointer;
      border-radius: 5px;
      display: inline-block;
      transition: all 0.3s ease-in-out;

      &:has(input:checked) {
        background-color: #ec34a3;
        color: #fff;
      }

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
    display: flex;
    margin-top: 20px;
    gap: 10px;

    label {
      border: 1px solid #ec34a3;
      color: #ec34a3;
      padding: 1rem 2rem;
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      &:has(input:checked) {
        background-color: #ec34a3;
        color: #fff;
      }
    }
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
        margin: 0;
        .concept-img {
          height: 20rem;
        }
      }
    }
    .checkbox-wrap {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    input[type='checkbox'] + label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media ${() => theme.device.mobile} {
    margin: 2rem 0 5rem 0;
  }
`;
