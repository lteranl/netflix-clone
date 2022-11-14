import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/Row.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        // async function to fetch data from the API
        async function fetchData() {
            // fetchUrl is the prop passed from App.js
            const request = await axios.get(fetchUrl);
            // set the movies state to the results from the API
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // if [fetchUrl], run once when the row loads, and run again when fetchUrl changes
    }, [fetchUrl]);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container -> poster */}
            <div className="row__posters">
                {/* // map through the movies array */}
                {movies.map((movie) => (
                    <img
                        className="row__poster"
                        src={`${imgBaseUrl}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;