// Details.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((result) => 
      setDetail(result));
      console.log("Detail useEffect")
  }, [id]);

  return (
    <div>
      {/* <h2>Details for ID: {id}</h2>
      <p>Name: {detail.body}</p> */}
      {/* Add other details as needed */}
      <div className="container">
      <div className="card my-3 bg-dark text-white">
              {/* <h5 className="card-header">{comment.id}</h5> */}
              <div className="card-body">
                <h5 className="card-title">Body of : {detail.name}</h5>
                <h5 className="card-title">{detail.body}</h5>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
    </div>
      </div>
      
  );
}

export default Details;
