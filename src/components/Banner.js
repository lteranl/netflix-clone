import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
    const [movie, setMovie] = React.useState([]);

    useEffect(() => {
        // async function to fetch data from the API
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    console.log(movie);
    return (
        <header>
            {" "}
            {/* background img */}
            {/* title */}
            {/* div > 2 buttons */}
            {/* description */}
        </header>
    );
}

export default Banner;
