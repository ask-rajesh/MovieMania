import React from 'react'
import styled from 'styled-components'

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width:280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;
`;

const CoverImage = styled.img`
    height: 362px;
    object-fit: cover;
`;

const MovieName = styled.span`
    font-size: 18px;
    font-weight: 600;
    color:black;
    margin: 15px 0;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const InfoCol = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
    text-transform: capitalize;
`;
export const MovieComponent = (props) => {
    let {Title, Year, imdbID, Type, Poster} = props.movie;
    let Poster1 = Poster;
    console.log(Poster);
    if (Poster1 === "N/A")
    {
        Poster1 = "No poster available."
        return (
            <>
            <MovieContainer>
                <div><h1>{Poster1}</h1></div>
                <MovieName>{Title}</MovieName>
                <InfoCol>
                    <MovieInfo>Year: {Year}</MovieInfo>
                    <MovieInfo>Type: {Type}</MovieInfo>
                </InfoCol>
            </MovieContainer>
          
            </>
          )
    }
    else
    {
        return (
            <>
            <MovieContainer onClick={()=>props.onMovieSelect(imdbID)}>
                <CoverImage src={Poster}/>
                <MovieName>{Title}</MovieName>
                <InfoCol>
                    <MovieInfo>Year: {Year}</MovieInfo>
                    <MovieInfo>Type: {Type}</MovieInfo>
                </InfoCol>
            </MovieContainer>
          
            </>
          )
    }         
  
}
