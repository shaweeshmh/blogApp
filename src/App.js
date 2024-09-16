import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import Wrong from './wrongUrl';

function App() {


  return (
    <Router>
    <div className="App">
     
      {/* navbar component: */}
      <Navbar/>

      <div className="content">
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/create">
            <Create/>
          </Route>
          <Route path ="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path ="*">
            <Wrong/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
