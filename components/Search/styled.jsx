import styled from 'styled-components';

const Input = styled.input`
  padding: 20px;
  margin-left: 25px;
  height: 45px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  border: none;
  outline: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const Wrapper = styled.div`
  background: #dfdfdf;
  display: flex;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  padding: 9px;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 700px;
`;

export { Input, Wrapper, Form, Container };
