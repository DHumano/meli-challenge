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
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  width: 50%;
`;

const DataWrapper = styled.div`
  margin-left: 1em;
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

const Description = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
  color: grey;
  font-family: 'Roboto', sans-serif;
`;

const ImageWrapper = styled.div`
  margin-top: 15px;
  width: 50%;
  margin-bottom: 15px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

const Information = styled.div`
  margin-top: 15px;
  width: 50%;
  margin-bottom: 15px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

export { Container, Wrapper, Title, Price, DataWrapper, Description, ImageWrapper, Information };
