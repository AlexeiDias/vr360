# Getting Started with Create React with react-router-dom App

# index.js sample

import _ as React from 'react';
import _ as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
//import \* as serviceWorker from "./serviceWorker";
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root')
);

## App.js sample

import \* as React from "react";
import { Routes, Route, Link} from "react-router-dom"
import './App.css';

function App() {
return (

<div className="App">
<h1>Welcome to React Router!</h1>
<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
</Routes>
</div>
);
}

## home.js sample

import \* as React from "react";
import { Routes, Route, Link } from "react-router-dom";

const home = () => {
return (
<>
<main>
<h2>Welcome to the homepage!</h2>
<p>You can do this, I believe in you.</p>
</main>
<nav>
<Link to="/about">About</Link>
</nav>
</>
);
}

export default home

## about.js sample

import \* as React from "react";
import { Routes, Route, Link } from "react-router-dom";

const about = () => {
return (
<>
<main>
<h2>Welcome to the homepage!</h2>
<p>You can do this, I believe in you.</p>
</main>
<nav>
<Link to="/">Home</Link>
</nav>
</>
);
}

export default about
