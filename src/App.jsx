import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <h1>Library Catalog</h1>
        Check out the &nbsp;
        <NavLink to="/books" exact>
          Book List
        </NavLink>
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
