import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  background: white;
  padding: 20px;
  width: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: auto;
  margin-bottom: 50px;
`;

const Title = styled.div`
  cursor: pointer;
  margin-top: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
`;

const DataWrapper = styled.div`
  margin-left: 1em;
`;

const Price = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-weight: 500;
  letter-spacing: normal;
  margin-top: 15px;
  font-size: 2em;
  margin-bottom: 10px;
`;

const Description = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  color: grey;
  font-family: 'Roboto', sans-serif;
  width: 60%;
`;

const ImageWrapper = styled.div`
  width: 60%;
  margin-bottom: 15px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

const Information = styled.div`
  padding-left: 40px;
  width: 40%;
  margin-bottom: 15px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
`;

const Decimals = styled.div`
  display: inline;
  font-size: 12px;
  vertical-align: text-top;
`;

export {
  Container,
  Wrapper,
  Title,
  Price,
  DataWrapper,
  Description,
  ImageWrapper,
  Information,
  Decimals,
};
