import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const API_KEY = 'c75bf87f';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
    margin
    height: 352px;
    object-fit: cover;
`;

const InfoCol = styled.span`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;


const MovieName = styled.span`
    font-size: 18px;
    font-weight: 600;
    color:black;
    margin: 15px 0;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    & span{
        opacity: 0.8;
    }
`;

const MovieInfo = styled.span`
    font-size: 18px;
    font-weight: 600;
    color:black;
    margin: 4px 0;

    
    text-overflow: ellipsis;
    overflow: hidden;
    & span{
        opacity: 0.8;
    }
`;

const Close = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
    background: lightgray;
    height: fit-content;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
`;


export const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;
    useEffect(() => {
         axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`).then((response) => 
            {setMovieInfo(response.data)}
         )
    },[selectedMovie]);
    
    
    return (
        <>
        <Container>
            {movieInfo?<>
                <CoverImage src={movieInfo?.Poster}/>
            <InfoCol>
                <MovieName>{movieInfo?.Type} Name: <span> {movieInfo?.Title}</span></MovieName>   
                <MovieInfo>IMDB rating: <span>{movieInfo?.imdbRating}</span></MovieInfo>
                <MovieInfo>Runtime: <span>{movieInfo?.Runtime}</span></MovieInfo>
                <MovieInfo>Released: <span>{movieInfo?.Released}</span></MovieInfo>
                <MovieInfo>Year: <span>{movieInfo?.Year}</span></MovieInfo>
                <MovieInfo>Genre: <span>{movieInfo?.Genre}</span></MovieInfo>
                <MovieInfo>Director: <span>{movieInfo?.Director}</span></MovieInfo>
                <MovieInfo>Actors: <span>{movieInfo?.Actors}</span></MovieInfo>
                <MovieInfo>Language: <span>{movieInfo?.Language}</span></MovieInfo>
                <MovieInfo>Type: <span>{movieInfo?.Type}</span></MovieInfo>
                <MovieInfo>Plot: <span>{movieInfo?.Plot}</span></MovieInfo>
            </InfoCol>

            <Close onClick={() => props.onMovieSelect()}>X</Close>
            
            </> : "Loading....."}
            
        </Container>
        
        </>
    )
    
}
