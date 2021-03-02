/**
 * @jest-environment jsdom
*/
import React from 'react';
import { mount } from 'enzyme'
import MovieListItem from '../components/home/MovieListItem';

const testData = {
  id: 1,
  name: "Batman Begins",
  image: "https://resizing.flixster.com/gG9jEpn7NVg5pYWwQidlxiBJ3HA=/206x305/v2/https://flxt.tmsimg.com/NowShowing/48435/48435_aa.jpg",
  year: 2017,
  contentRating: "PG-17",
  movieLength: "2h 40m"

}

test('MovieListItem component test', () => {
  const wrapper = mount(<MovieListItem movieItem={testData} />);
  
  expect(wrapper.props().movieItem).toEqual(testData);
});
