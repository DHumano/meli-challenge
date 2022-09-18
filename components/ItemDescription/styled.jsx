import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: white;
  padding: 20px;
  width: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: auto;
`;

const Title = styled.div`
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

const DataWrapper = styled.div`
  margin-left: 3em;
  width: 100%;
`;

const Price = styled.div`
  color: rgba(0, 0, 0, 0.9);
  display: grid;
  font-weight: 700;
  letter-spacing: normal;
  margin-top: 15px;
  font-size: 1.2em;
  cursor: pointer;
`;

const Paragraph = styled.div`
  width: 30%;
  text-align: right;
  margin-top: 15px;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
`;

export {
  Container,
  Wrapper,
  Title,
  Price,
  DataWrapper,
  Paragraph,
};
