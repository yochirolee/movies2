import React from "react";
import "./search.css";
import Loading from "./loading";
 

export default function Search(props) {

let searchRef=React.createRef();

const HandleSubmit=(event)=>{
    event.preventDefault();
    props.SearchData( searchRef.current.value);
}
console.log(props.isLoading,"isLoading");

  return (
    <section>
      <div className="container">
        <div class="jumbotron jumbotron-expand-lg bg-dark">
          
          <form onSubmit={(event)=>HandleSubmit(event)}>
            <div className="row row-expand-lg ">
              <div className="col-8 ">
                <div class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Search"
                    id="inputLarge"
                    ref={searchRef}
                  ></input>
                </div>
              </div>
              <div className="col-4 ">
                <div className="form-group">
                  <button
                    class="btn btn-primary btn-block  block btn-lg"
                    type="submit"
                  >
                    Search...
                  </button>
                </div>
              </div>
            </div>
          </form>
          {props.isLoading? (<Loading/>):(<div></div>)}
        </div>
      </div>
    </section>
  );
}
