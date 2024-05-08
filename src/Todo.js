import React from "react";
import { useState } from "react";

const Todo = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let [upId, setUpId] = useState(null);
  let[upin,setUpin]=useState("")
  console.log(data);
  let HanleInput = () => {
    if (input !== "") { 
      setData([...data, input]);
      setInput("");
    }
  };
  let HanleUpdate=()=>{
    let UpdateCred=[...data]
    UpdateCred[upId]=upin
    setData([...UpdateCred])
    setUpin("")
    setUpId(null)
  }

  let HanleEdit=(i)=>{
    setUpId(i)
    setUpin(data[i])
  }

  let HanleDelete=(i)=>{
    let DeleteCred=[...data]
    DeleteCred.splice(i,1)
    setData([...DeleteCred])
  }
  return (
    <div className="container w-75">
      <div class="input-group mb-3 my-3   ">
        <input
          type="text"
          class="form-control"
          placeholder="Add Your Todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={HanleInput}
        >
          Button
        </button>
      </div>
      <ul class="list-group list-group-flush">
        {data.length > 0 ? (
          <>
            {data.map((e, i) => {
              return (
                <li
                  class="list-group-item bg-secondary text-white my-2 container w-75"
                  key={i}
                >
                  {upId == i ? (
                    <>
                    <div class="cointainer input-group mb-3 my-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Add Your Todo"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={upin}
                        onChange={(e) => setUpin(e.target.value)}
                      />
                      <button
                        class="btn btn-inline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={HanleUpdate}
                      >
                        Update
                      </button>
                      </div>
                    </>
                  ) : (
                    <>

                      {e}
                      <button
                        class="btn btn-inline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={()=>HanleEdit(i)}
                      >
                        Edit
                      </button>
                      
                      <button
                        class="btn btn-inline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={()=>HanleDelete(i)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              );
            })}
          </>
        ) : (
            <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        )}
      </ul>
    </div>
  );
};

export default Todo;
