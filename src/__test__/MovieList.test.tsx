/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow } from 'enzyme'
import MovieList from '../components/home/MovieList';

it("MovieList renders without crashing", () => {
  shallow(<MovieList />);
});

