import React from "react";
import "./Test.css"
export const Test = () => {
  return (
    <div>
      {/* <div class="container-sm">100% wide until small breakpoint</div>
    <div class="container-md">100% wide until medium breakpoint</div>
    <div class="container-lg">100% wide until large breakpoint</div>
    <div class="container-xl">100% wide until extra large breakpoint</div>
    <div class="container-xxl">100% wide until extra extra large breakpoint</div>
    <div class="container">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
  <div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50"></div>
  <div class="position-absolute bottom-50 end-50"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div> */}
<div class="container" style={{display:"flex", alignItems:"center" , justifyContent:"center",flexDirection:"column", margin:"20px"}}>
  <h1>Bootstrap Form Example</h1>
  <form>
    <div class="mb-3 row">
      <label for="exampleInputName" class="form-label">Name</label>
      <input type="text" class="form-control " id="exampleInputName" placeholder="Enter your name"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter your email"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword" placeholder="Enter your password"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck"/>
      <label class="form-check-label" for="exampleCheck">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

      {/* <section id="intro">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-1">Black-Belt</div>
                <div className="display-5 text-muted">Your Codeing Skills</div>
              </h1>
              <p className="lead my-4 text-muted">lorem10</p>

              <a href="#pricing" className="btn btn-secondary btn-lg">
                Buy Now
              </a>
            </div>

            <div className="col-md-5 text-center d-none d-md-block">
              <img
                className="img-fluid"
                src="C:\React\project1\public\asset\download (2).jpeg"
                alt="ebook cover"
              />
            </div>
          </div>
        </div>
      </section>



      // {/* -----------------From ----------------- */}

      {/* <section id="contact">
        <div className="container-lg my-5">
          <div className="text-center">
            <h2>
              Hai im chandru
              <p className="lead">
                Question to ask ? Fill out the form to contact me directly....
              </p>
            </h2>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">
                    Name
                  </label>
                  <div></div>
                  <input
                    type="text"
                    class="form-control "
                    id="exampleInputName"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
