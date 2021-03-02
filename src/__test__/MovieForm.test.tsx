/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount } from 'enzyme'
import MovieForm from '../components/home/MovieForm';

const movieData = {
  contentRating: "PG-13",
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  genres: "Action, Crime, Drama",
  id: 1,
  image: "https://resizing.flixster.com/gG9jEpn7NVg5pYWwQidlxiBJ3HA=/206x305/v2/https://flxt.tmsimg.com/NowShowing/48435/48435_aa.jpg",
  movieLength: 160,
  name: "Batman Begins",
  releaseDate: "2021-03-02",
  shortDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  tagline: "Evil fears the knight",
  totalEarning: 12345,
  vote: "7.7",
};

it("MovieForm test working fine", () => {
  const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
  const wrapper = mount(<MovieForm />);
  const nameInput = wrapper.find('input').at(0);
  nameInput.simulate('change', { target: { value: movieData.name } });

  const imageInput = wrapper.find('input').at(1);
  imageInput.simulate('change', { target: { value: movieData.image } });

  const taglineInput = wrapper.find('input').at(2);
  taglineInput.simulate('change', { target: { value: movieData.tagline } });
 /*  taglineInput.instance().value = movieData.tagline;
  taglineInput.simulate('change'); */
  const descriptionInput = wrapper.find('textarea').at(0);
  descriptionInput.simulate('change', { target: { value: movieData.description } });

  const genresInput = wrapper.find('input').at(3);
  genresInput.simulate('change', { target: { value: movieData.genres } });

  const shortDescriptionInput = wrapper.find('textarea').at(1);
  shortDescriptionInput.simulate('change', { target: { value: movieData.shortDescription } });

  const releaseDateInput = wrapper.find('input').at(4);
  releaseDateInput.simulate('change', { target: { value: movieData.releaseDate } });

  const movieLengthInput = wrapper.find('input').at(5);
  movieLengthInput.simulate('change', { target: { value: movieData.movieLength } });

  const totalEarningInput = wrapper.find('input').at(6);
  totalEarningInput.simulate('change', { target: { value: movieData.totalEarning } });

  const contentRatingInput = wrapper.find('select').at(0);
  contentRatingInput.simulate('change', { target: { value: movieData.contentRating } });

  const voteInput = wrapper.find('input').at(7);
  voteInput.simulate('change', { target: { value: movieData.vote } });
 
  const form = wrapper.find('form');
  form.simulate('submit');
});

