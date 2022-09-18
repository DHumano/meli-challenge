import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:2em;
  font-family: 'Roboto', sans-serif;
  font-size:20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

export {
  Box, ImageWrapper
};

