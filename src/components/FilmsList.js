import React from 'react';
import Card from './Card';
import API from '../api';
import styled from 'styled-components';

const FilmsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class FilmsList extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    API.getFilms()
      .then(res => {
        const films = res.results;
        this.setState({ films })
      });
  }

  render() {
    const films = this.state.films.map((p, key) => {
      return (
        <div key={key} className="films__item">
          <Card item={p}/>
        </div>
      );
    });

    return (
      <FilmsListWrapper>{films}</FilmsListWrapper>
    );
  }
}

export default FilmsList;
