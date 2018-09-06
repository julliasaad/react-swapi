import React from 'react';
import Card from './Card';
import API from '../api';
import styled from 'styled-components';

const PeopleListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class PeopleList extends React.Component {
  state = {
    people: []
  }

  componentDidMount() {
    API.getPeople()
      .then(res => {
        const people = res.results;
        this.setState({ people })
      });
  }

  render() {
    const people = this.state.people.map((p, key) => {
      return (
        <div key={key} className="people__item">
          <Card item={p}/>
        </div>
      );
    });

    return (
      <PeopleListWrapper>{people}</PeopleListWrapper>
    );
  }
}

export default PeopleList;
