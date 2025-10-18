import styled from "styled-components";


const ContactMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const FormContact = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 960px;
  background-color: white;
  padding: 25px;
  border: 4px solid #FB1317;
  border-radius: 10px;
  box-shadow: 0 30px 30px -30px #1b1a1a50;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }
`;

const FormTitle = styled.h2`
  color: #a51c1cff;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const FormLabel = styled.label`
  font-size: 24px;
  font-weight: 500;
  color: #a51c1cff;
  margin-top: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FormInput = styled.input`
  outline: 0;
  border: 2px solid #FB1317;
  padding: 8px 14px;
  border-radius: 8px;
  width: 100%;
  height: 45px;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  align-items: center;
  text-align: center;

  &:focus {
    border-color: #96282894;
    box-shadow: 0 0 10px #f00404ab;
  }

  @media (max-width: 480px) {
    height: 40px;
    padding: 6px 10px;
  }
`;

const FormText = styled.textarea`
  border-radius: 8px;
  height: 100px;
  width: 100%;
  resize: none;
  outline: 0;
  padding: 8px 14px;
  border: 2px solid #FB1317;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  text-align: center;

  &:focus {
    border-color: #96282894;
    box-shadow: 0 0 10px #f00404ab;
  }

  @media (max-width: 480px) {
    height: 80px;
    padding: 6px 10px;
  }
`;

const FormBtn = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  outline: 0;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: #FB1317;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #FB1317;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;


export {
  ContactMain,
  FormContact,
  FormTitle,
  FormLabel,
  FormInput,
  FormText,
  FormBtn
};
