import styled from 'styled-components';
import * as S from 'styles';

export const DescSection = styled.section`
  min-width: 100%;
  animation:
    translateLeft 0.7s ease-in-out,
    fadeIn 0.7s linear;
  & * {
    font-size: 18px;
  }
  & h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
  & p {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  & ul {
    list-style: square;
  }
  & li {
    margin-bottom: 12px;
  }
`;

export const H2 = styled(S.H2)`
  margin-bottom: 20px;
`;