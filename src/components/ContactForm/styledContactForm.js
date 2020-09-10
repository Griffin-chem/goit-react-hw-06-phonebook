import styled from 'styled-components';

const FormCSS = styled.form`
  margin-bottom: 10px
`;

const LabelCSS = styled.label`
  display: inline-block;
  width: 20%;
  font-size: 16px;
  margin-bottom: 8px
`;

const TextInputCSS = styled.input`
  display: inline-block;
  width: 70%;
  font-size: 16px;
  margin-bottom: 8px
`;

const SubmitCSS = styled.input`
  display: block;
  width: auto;
  font-size: 16px;
  padding: 5px
`;

export {
  FormCSS,
  LabelCSS,
  TextInputCSS,
  SubmitCSS
}