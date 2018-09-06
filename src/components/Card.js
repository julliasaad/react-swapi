import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px;
  margin: 10px 10px 0 0;
  border: 1px solid #e3b336;
  border-radius: 2px;
`;

const HeaderTitle = styled.h3`
  margin-top: 0;
  text-align: center;
`;

class Card extends React.Component {
  render() {
    return (
      <CardWrapper>
        <div className="card__header">
          <HeaderTitle>{this.props.item.name || this.props.item.title}</HeaderTitle>
        </div>
      </CardWrapper>
    );
  }
}

export default Card;
