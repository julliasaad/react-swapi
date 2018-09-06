import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

const Header = (props) => {
  return (
    <header>
      <Title>{props.title}</Title>
    </header>
  );
}

export default Header;
