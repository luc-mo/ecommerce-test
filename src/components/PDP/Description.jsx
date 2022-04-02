import React from 'react';
import styled from 'styled-components';
import { changeTitles } from 'utils';

class Description extends React.Component {
  render() {
    const { description } = this.props;
    const __html = changeTitles(description);
    return <DescSection>
      <Title>DESCRIPTION:</Title>
      <div
        dangerouslySetInnerHTML={{ __html }}>
      </div>
    </DescSection>
  }
}

export default Description;

const DescSection = styled.section`
  animation:
    translateLeft 0.7s ease-in-out,
    fadeIn 0.7s linear;
  min-width: 100%;
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

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;