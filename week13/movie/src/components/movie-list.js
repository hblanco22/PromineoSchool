import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: "Fast and Furious",
                image: "/movieimages/fast1.jpg",
                plot: "Cars go fast",
                reviews: []
            },
            {
                title: "2Fast and 2Furious",
                image: "/movieimages/fast2.jpg",
                plot: "Cars go fast, again",
                reviews: []
            },
            {
                title: "The Fast and the Furious: Tokyo Drift",
                image: "/movieimages/fast3.jpg",
                plot: "Cars go fast in Japan, sideways",
                reviews: []
            },
        ]
        let arr;
        arr = movies.map((movie, index) =>
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />

        )

        return(
            <div>
                {arr}
            </div>
        )
    }
}