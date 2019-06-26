
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import JokeList from './jokes/JokeList'
import SearchForm from './components/search/SearchForm'
import './css/App.css';







class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
      <Switch>
        <Route exact path = '/' component={JokeList} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/search' component={SearchForm} />
        <SearchForm onSubmit={this.onSearchSubmit} />
      </Switch>  
      </div>
      </BrowserRouter>
    )
  }
}
     
        
        


export default App;
