

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import "./Movie.css";
function Movie() {
  const[text,setText] = useState('');
  const[movie,setMovie] =useState([])
  const changeText =(event)=>{
    // console.log(event);
    setText(event.target.value)
  }
const getMovie =() => {
  axios.get(`https://www.omdbapi.com/?s=${text}=tt3896198&apikey=763a01fb`)
  .then ((response)=>{
  console.log(response);

  setMovie(response)
})
.catch(err =>console.log(err))
}
// useEffect(()=>getMovie(),[text])
  
  return (
   <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
       
       
      </ul>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} on onChange={(e)=>setText(e.target.value)} />
      <button class="btn btn-outline-success" type="submit" on onSubmit={()=>getMovie()}>Search</button>
    </form>
    </div>
  </div>
</nav>


</>
  )
}

export default Movie;
