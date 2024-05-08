// Card.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Cardrout() {
  const [data, setdata] = useState([]);
  // const[userinput,setUseruserinput]=useState("")
  // console.log(userinput);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((result) => setdata(result));
      console.log("Card useEffect")
  }, []);

  // let fill=data.filter((e,i)=>{

  //   e.name.toLowerCase().includes(userinput.toLowerCase)
  //})
  return (
    <div className="container w-50">
      {/* <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
      <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          // value={userinput}
          // onChange={(e)=>setUseruserinput(e.target.value)}
        />
      </div> */}
      {/* {data.slice(0,5).map((comment) => (
        <div key={comment.id}>
          <Link to={`/details/${comment.id}`}>
            <div className="card my-3 bg-secondary text-white">
              <h5 className="card-header">{comment.id}</h5>
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">{comment.name}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))} */}

      <li>{data.map((comment,index)=>{
        return(
          <ul key={index}>
            <Link to={`details/${comment.id}`}>
            <div className="card my-3 bg-secondary text-white">
              <h5 className="card-header">{comment.id}</h5>
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">{comment.name}</h5>
              </div>
            </div>
          </Link>
          </ul>
        )
      })}</li>
    </div>
  );
}

export default Cardrout;

