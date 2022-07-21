import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { MovieComponent } from './MyComponent/MovieComponent';
import { useState } from 'react';
import { MovieInfoComponent } from './MyComponent/MovieInfoComponent';

const API_KEY = 'c75bf87f';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight:bold;
  box-shadow: 0 3px 6px 0 #555;
  letter-spacing:2px;
  font-family: 'Edu SA Beginner', cursive;
  justify-content: space-between;
  align-items: center;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.img`
  width: 48px;
  margin: 15px;
`;
const SearchBox = styled.div`
  display:flex;
  flex-direction:row;
  padding:10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 50px;
  width: 50%;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchInput = styled.input`
    outline: none;
    border:none;
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
    
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
`;

const Placeholder = styled.img`
  width: 400px;
  height: 400px;
  margin 150px;
  opacity: 500%;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutID, updateTimeoutID] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async(searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    updateMovieList(response.data.Search);
  }
  

  const onTextChange =(event) =>
  {
    onMovieSelect("");
    clearTimeout(timeoutID);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutID(timeout);
  }

  return (
    <>
    <Container>
      <Header>

        <AppName>
        <Icon src="/movieicon.jpg"></Icon>
          MovieMania
        </AppName>

        <SearchBox>
            <SearchIcon src="/search_icon.png"></SearchIcon>
            <SearchInput placeholder='movie name...' value ={searchQuery} onChange={onTextChange}/>
        </SearchBox>

      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <MovieListContainer>
        {movieList?.length ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />) : <Placeholder src="/movieicon.jpg"/>}
      </MovieListContainer>
   </Container>  
  
   </>
  );
}

export default App;
