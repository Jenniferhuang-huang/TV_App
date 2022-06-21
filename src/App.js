import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,  
  Outlet,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path=":slug" element={<Child />} />
        </Routes>
      </Router>
    );
  }

const Apps = {
  'Netflix': {
    id: 'Netflix',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg'
  },
  'HBO': {
    id: 'HBO Max',
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'
  },
  'Hulu': {
    id: 'Hulu',
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
  },
  'Prime': {
    id: 'Prime Video',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png'
  }
}

function Home() {
  return (
<div>
  <div>
    <h2 className="appname">
      TV APPS
    </h2>
  </div>
    <ul>    
      {Object.entries(Apps).map(([slug, { src }]) => (
        <li key={slug}>
          <Link to={`/${slug}`}>
            <img src={src} />
          </Link>
        </li>
      ))}
    </ul></div>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  const { slug } = useParams();
  const child = Apps[slug];
  const { id } = child;
  return (
    <div>
      <Home />
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}