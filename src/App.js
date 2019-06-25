
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// import JokeSearch from './components/layout/JokeSearch'
import JokeList from './jokes/JokeList'
import JokeSearch from './components/search/JokeSearch'
import './css/App.css';
import "./components/search/SearchForm.css"



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <JokeSearch />
      <Switch>
        <Route path = '/' exact component={JokeList} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route path='/search' exact component={JokeSearch} />
      </Switch>  
      </div>
     
      </BrowserRouter>
    )
  }
}
        
        


export default App;
