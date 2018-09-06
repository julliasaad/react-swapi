import React from 'react';
import Card from './Card';
import API from '../api';
import styled from 'styled-components';

const SpeciesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class SpeciesList extends React.Component {
  state = {
    species: []
  }

  componentDidMount() {
    API.get('species')
      .then(res => {
        const species = res.results;
        this.setState({ species })
      });
  }

  render() {
    const species = this.state.species.map((p, key) => {
      return (
        <div key={key} className="films__item">
          <Card item={p}/>
        </div>
      );
    });

    return (
      <SpeciesListWrapper>{species}</SpeciesListWrapper>
    );
  }
}

export default SpeciesList;
