import React from 'react';
import Card from './Card';
import API from '../api';
import styled from 'styled-components';

const PlanetsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class PlanetsList extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    API.get('planets')
      .then(res => {
        const planets = res.results;
        this.setState({ planets })
      });
  }

  render() {
    const planets = this.state.planets.map((p, key) => {
      return (
        <div key={key} className="films__item">
          <Card item={p}/>
        </div>
      );
    });

    return (
      <PlanetsListWrapper>{planets}</PlanetsListWrapper>
    );
  }
}

export default PlanetsList;
