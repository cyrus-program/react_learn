import { NavLink, Routes, Route } from "react-router-dom";
function Navigation() {
  return (
    <section className="navigation">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "white" } : { color: "black" }
        }
        className="Navigate"
        to="/"
      >
        Home
      </NavLink>
    </section>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is my Home page</p>
      <p>click the About button to go to about page</p>
      <Navigation />
    </div>
  );
}

function About() {
  console.log("abut");
  return (
    <div>
      <h1 className="submit">About me</h1>
      <p>this is my About page</p>

      <p>click Home button to go back to home page</p>

      <Navigation />
    </div>
  );
}
function Myout() {
  return (
    <div>
      <p>i am an outlet</p>
    </div>
  );
}

function Another() {
  return (
    <div>
      <p>i am another one</p>
    </div>
  );
}

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="out" element={<Myout />} />
        <Route path=":another" element={<Another />} />
      </Route>
    </Routes>
  );
}

export default Rout;
