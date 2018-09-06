import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Header from './Header';
import PeopleList from './PeopleList';
import FilmsList from './FilmsList';
import SpeciesList from './SpeciesList';
import PlanetsList from './PlanetsList';

import c3po from '../assets/c3po.png';
import luke from '../assets/luke.png';
import yoda from '../assets/yoda.png';
import chewie from '../assets/chewie.png';

const HomeWrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: #000000;
  color: #e3b336;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  width: 200px;
  padding: 15px;
  margin: 10px 10px 0 0;
  border: 1px solid #e3b336;
  border-radius: 2px;
  text-align: center;

  .link-wrapper {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 600;
    color: #e3b336;
    text-decoration: none;

    span {
      display: block;
    }
  }

  .thumb {
    height: 100px;
    width: auto;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Router>
        <HomeWrapper>
          <Header title="Star Wars Wiki"/>
          <Items>
            <Item>
              <Link className="link-wrapper" to="/people">
                <img src={c3po} className="thumb" alt="logo" />
                <span>People</span>
              </Link>
            </Item>
            <Item>
              <Link className="link-wrapper" to="/films">
                <img src={luke} className="thumb" alt="logo" />
                <span>Films</span>
              </Link>
            </Item>
            <Item>
              <Link className="link-wrapper" to="/species">
                <img src={yoda} className="thumb" alt="logo" />
                <span>Species</span>
              </Link>
            </Item>
            <Item>
              <Link className="link-wrapper" to="/planets">
                <img src={chewie} className="thumb" alt="logo" />
                <span>Planets</span>
              </Link>
            </Item>
          </Items>
          <Route exact path="/people" component={PeopleList} />
          <Route exact path="/films" component={FilmsList} />
          <Route exact path="/species" component={SpeciesList} />
          <Route exact path="/planets" component={PlanetsList} />
        </HomeWrapper>
      </Router>
    );
  }
}

export default Home;
