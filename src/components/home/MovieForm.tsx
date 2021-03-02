import React, { Component, useState } from 'react'
import { Form, Button, Col, ButtonGroup, Alert } from 'react-bootstrap';
import { MovieDetailsType } from '../../types';

type MovieFormTypes = {
  onCancelPress?: React.MouseEvent,
  onSuccess?: Function,
}


const MovieForm = ({ onCancelPress=()=>{}, onSuccess=()=>{} }: MovieFormTypes) => {
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msgs, setMsgs] = useState([]);

  const toggleAlertMsg = () => {
    setShowAlert(!showAlert);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    try {
      const name = e.target.elements.name.value;
      const tagline = e.target.elements.tagline.value;
      const image = e.target.elements.image.value;
      const description = e.target.elements.description.value;
      const genres = e.target.elements.genres.value;
      const shortDescription = e.target.elements.shortDescription.value;
      const releaseDate = e.target.elements.releaseDate.value;
      const contentRating = e.target.elements.contentRating.value;
      const movieLength = e.target.elements.movieLength.value;
      const totalEarning = e.target.elements.totalEarning.value;
      const vote = e.target.elements.vote.value;
      const errors: Array<string> = [];
      if(name.trim() == "") {
        errors.push('Please enter a movie name.');
      }
      if(image.trim() == "") {
        errors.push('Please add movie image url.');
      }
      if(description.trim() == "") {
        errors.push('Please add movie description.');
      }
      if(genres.trim() == "") {
        errors.push('Please add movie genres.');
      }
      if(shortDescription.trim() == "") {
        errors.push('Please enter movie\'s short description.');
      }
      if(releaseDate.trim() == "") {
        errors.push('Please select a release date.');
      }
      if(movieLength.trim() == "") {
        errors.push('Please add movie length.');
      }
      if(totalEarning.trim() == "") {
        errors.push('Please add total earning of the movie.');
      }
      if(contentRating.trim() == "") {
        errors.push('Please select content rating.');
      }
      if(vote.trim() == "" || typeof vote == 'number') {
        errors.push('Please enter vote of the movie.');
      }
      if(errors.length > 0) {
        setShowAlert(true);
        setSuccess(false);
        setMsgs(errors);
      } else {
        let allMovies = localStorage.getItem('movies');
        let movies: Array<MovieDetailsType> = [];
        let id = 1;
        if(allMovies != null) {
          movies = JSON.parse(allMovies);
          id = movies.length+1;
        }
        const data: MovieDetailsType = {id, name, tagline, image, description, genres, shortDescription,  releaseDate, contentRating, movieLength, vote, totalEarning };
        movies.push(data);
        localStorage.setItem('movies',JSON.stringify(movies));
        onSuccess();
      }     
    } catch (error) {
      console.log("error", error);
      setShowAlert(true);
      setSuccess(false);
      setMsgs(['Some error occured. Please try after sometime.'])
    }
  }

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Form.Group>
          <Form.Label>Movie Name</Form.Label>
          <Form.Control name="name" placeholder="Movie Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie Image</Form.Label>
          <Form.Control name="image" placeholder="Add movie image url" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tagline</Form.Label>
          <Form.Control name="tagline" placeholder="Tagline of the movie" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Genres</Form.Label>
          <Form.Control name="genres" placeholder="Action, Drama" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Short Description</Form.Label>
          <Form.Control name="shortDescription" as="textarea" rows={3} />
        </Form.Group>
       
        

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Release Date</Form.Label>
            <Form.Control name="releaseDate" type="date" placeholder="24-12-2020" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Movie Length(in minutes)</Form.Label>
            <Form.Control name="movieLength" type="number" placeholder="150" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Total Earning</Form.Label>
            <Form.Control name="totalEarning" type="currency" placeholder="123456" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Movie Content Rating</Form.Label>
            <Form.Control name="contentRating" as="select">
              <option>PG-13</option>
              <option>R</option>
              <option>TV-MA</option>
              <option>TV-14</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Movie Vote</Form.Label>
            <Form.Control name="vote" type="text" placeholder="7.7" />
          </Form.Group>
          
        </Form.Row>
        {
          showAlert && 
          <Alert variant="danger" onClose={toggleAlertMsg} dismissible>
            <Alert.Heading>{success ? 'Success!' : 'Oops!'}</Alert.Heading>
            {
              msgs.map((item: string, index: number)=><p key={index}>{item}</p>)
            }
          </Alert>
        }
        <hr />
        <ButtonGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="danger" type="button" onClick={onCancelPress}>
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
      
    </>
  )
}

export default MovieForm;