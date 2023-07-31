import React from "react";
import { useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = new createApi({
  accessKey: "TX9oePDtS1ooX9FZNsYND_7Wh3O2EVf6hmJO55UlDhc",
});

export default function SeachPhoto() {
  const [Query, setQuery] = useState("");
  const [Pics, setPic] = useState([]);

  const searchP = async (e) => {
    e.preventDefault();
    try {
      const response = await unsplash.search.getPhotos({
        query: Query,
        perPage: 100,
      });

      const results = response.response.results;
      // console.log(results);
      setPic(results);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <a></a>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Search India, Anime, etc..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button" data-hover="click me!">
          <div>Search</div>
        </button>
      </form>
      <div className="card-list">
        {Pics.map((Pic) => (
          <div className="card" key={Pic.id}>
            <img
              src={Pic.urls.full}
              alt={Pic.alt_description}
              className="card-image"
              height="50%"
              width="50%"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
