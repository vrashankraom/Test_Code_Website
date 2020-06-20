//jshint esversion:6
import React from 'react';
import "./App.css";
import axios from "axios";

class App extends React.Component{
    state = {
    firstname: '',
    lastname: '',
    email:'',
    phonenumber:'',
    query:'',
  };
handleChange = (event)=>{
  const target =event.target;
  const name =target.name;
  const value =target.value;

  this.setState({
    [name]:value
  });
}

submit =(event)=>{
  event.preventDefault();
  const detail ={
    firstname:this.state.firstname,
    lastname: this.state.lastname,
    email:this.state.email,
    phonenumber :this.state.phonenumber,
    query :this.state.query
  };

axios({
  url:'http://localhost:5000/details/add',
  method:'POST',
  data:detail
})
.then(()=>{
  console.log("Data has been sent to the server!");
})
.catch(()=>{
  console.log("Internal server error!");
});

};


//JSX
render() {
  console.log("state",this.state);
  return(
    <div className="App">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text"
                          required
                          className="form-control mt-2"
                          placeholder="First Name"
                          name="firstname"
                          value={this.state.firstname}
                          onChange={this.handleChange}
                          />
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text"
                     className="form-control mt-2"
                      placeholder="Last Name"
                       required
                       name="lastname"
                       value={this.state.lastname}
                       onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email"
                    className="form-control mt-2"
                    placeholder="Email"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="number"
                     className="form-control mt-2"
                      placeholder="Phone Number"
                      required
                      name="phonenumber"
                      value={this.state.phonenumber}
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control"
                     id="exampleFormControlTextarea1"
                      placeholder="Queries or Feedback?"
                      rows="3"
                       required
                       name="query"
                       value={this.state.query}
                       onChange={this.handleChange}
                       ></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-light" style={{"color":"black"}} type="submit">SUBMIT</button>
                </div>
              </div>
              </form>
      </div>
  );
}

}
export default App;
