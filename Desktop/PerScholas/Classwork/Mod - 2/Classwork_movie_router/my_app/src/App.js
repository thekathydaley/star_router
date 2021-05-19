import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Movies from './components/Movies';
import Actors from './components/Actors';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/Movies" component={Movies}/>
      <Route path="/Actors" component={Actors}/>
    </Switch>
      

    </div>
    </Router>
  );
}

export default App;


/* 
requirements:
3 routes DONE
1 stateless component
2/m- stateful components
1/- api call
use CSS
app.js as nav component

fn: 
to search a database of movies
search by title to find movies
search by actor 


web structure:
#of pages         : 3
  welcome page: 
    C- header with title  DONE
    2 button with link   DONE
  movie by title page:
    C - header with title  DONE
    search box
    submit button
    C - box containing data
  actor page:
    C - header with title
    search box
    submit button
    C - box containing data
    
#Components: 
  Nav    -    DONE
    link for home
    link for actor
    link for movie
    router tags
    switch tags
  Header
    home link DONE
    link to actor DONE
    link to movie DONE
  movie page
    search form
      handleChange fn DONE
        lets you enter data into the form
      submit button 
        handleSubmit fn
          where we make the API request
    api call FN(in handleSubmit)
  actor page
    search form
      handleChange fn
        lets you enter data into the form
      submit button
        handleSubmit fn
          where we make the API request
    api call FN(in handleSubmit)
  
  home/main
    nav link to other pages 
      movies
      actors
  actor data box
    display info from api
  movie data box
    display info from api

api data:
  movie by title 
    /movie/{movie_id}  && /movie/{movie_id}/credits
      Name
      Actors - name
      Plot
      Picture   
  actor page
    /person/{person_id} && /person/{person_id}/movie_credits
      Name
      Bio
      Movie List -mv titleaq


set up react app  - single action                

*/