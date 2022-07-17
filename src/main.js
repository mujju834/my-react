import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <>    <BrowserRouter>

          <Link to='/'>Home</Link> <br />
          <Link to='/About'>About</Link>
 

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
         
        </Routes>
      
    </BrowserRouter>
    
    </>

  );
}

// You can think of these components as "pages"
// in your app.




