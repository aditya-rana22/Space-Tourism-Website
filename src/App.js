// fetchData();
import { useState } from "react";
import "./App.scss";

const data = require("./data.json");

function App() {
  const [activePage, setActivePage] = useState("technology");
  function handleChangePage(id) {
    if (id === activePage) {
      console.log("current page");
      return;
    }
    setActivePage(id);
  }
  return (
    <div
      className={
        activePage === "home"
          ? "home-page page-body"
          : activePage === "destination"
          ? "destination-page page-body"
          : activePage === "crew"
          ? "crew-page page-body"
          : "technology-page page-body"
      }
    >
      <NavBar onChangePage={handleChangePage} activePage={activePage} />
      <Main activePage={activePage} />
    </div>
  );
}

function NavBar({ onChangePage, activePage }) {
  return (
    <div className="nav-bar">
      <img className="nav-logo" src="./shared/logo.svg" alt="logo" />
      <div className="nav-line"></div>
      <NavMenu onChangePage={onChangePage} activePage={activePage} />
    </div>
  );
}

function NavMenu({ onChangePage, activePage }) {
  return (
    <div className="nav-menu">
      <div
        onClick={() => onChangePage("home")}
        className={
          activePage === "home" ? "nav-item active-nav-item" : "nav-item"
        }
      >
        <span className="nav-item-number nav-bold">00</span>
        <span className="nav-item-text nav-text">HOME</span>
      </div>
      <div
        onClick={() => onChangePage("destination")}
        className={
          activePage === "destination" ? "nav-item active-nav-item" : "nav-item"
        }
      >
        <span className="nav-item-number nav-bold">01</span>
        <span className="nav-item-text nav-text">DESTINATIONS</span>
      </div>
      <div
        onClick={() => onChangePage("crew")}
        className={
          activePage === "crew" ? "nav-item active-nav-item" : "nav-item"
        }
      >
        <span className="nav-item-number nav-bold">02</span>
        <span className="nav-item-text nav-text">CREW</span>
      </div>
      <div
        onClick={() => onChangePage("technology")}
        className={
          activePage === "technology" ? "nav-item active-nav-item" : "nav-item"
        }
      >
        <span className="nav-item-number nav-bold">03</span>
        <span className="nav-item-text nav-text">TECHNOLOGY</span>
      </div>
    </div>
  );
}

function Main({ activePage }) {
  if (activePage === "home") {
    return (
      <div className="main">
        <div className="main-1">
          <span className="home-1 heading-xs">So, you want to travel to</span>
          <h1 className="home-heading-1 heading-xl">SPACE</h1>
          <p className="home-para body">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="main-2">
          <button className="explore-btn heading-s">EXPLORE</button>
        </div>
      </div>
    );
  }
  if (activePage === "destination") {
    return <DestinationPage />;
  }
  if (activePage === "crew") {
    return <CrewPage />;
  }
  if (activePage === "technology") {
    return <TechnologyPage />;
  }
}

function DestinationPage() {
  const [activePlanet, setActivePlanet] = useState(0);

  function handleActivePlanet(id) {
    if (id === activePlanet) {
      return;
    }
    setActivePlanet(id);
  }

  return (
    <div className="main">
      <div className="destination-main-1">
        <div className="sub-heading">
          <span className="content-number heading-xs">01</span>
          <span className="content-name heading-xs">PICK YOUR DESTINATION</span>
        </div>
        <img
          className="planet-image"
          alt="moon"
          src={data.destinations[activePlanet].images.png}
        />
      </div>
      <div className="destination-main-2">
        <div className="planet-nav ">
          <span
            onClick={() => handleActivePlanet(0)}
            className={
              activePlanet === 0
                ? "nav-text planet-nav-item planet-nav-item-active"
                : "nav-text planet-nav-item"
            }
          >
            MOON
          </span>
          <span
            onClick={() => handleActivePlanet(1)}
            className={
              activePlanet === 1
                ? "nav-text planet-nav-item planet-nav-item-active"
                : "nav-text planet-nav-item"
            }
          >
            MARS
          </span>
          <span
            onClick={() => handleActivePlanet(2)}
            className={
              activePlanet === 2
                ? "nav-text planet-nav-item planet-nav-item-active"
                : "nav-text planet-nav-item"
            }
          >
            EUROPA
          </span>
          <span
            onClick={() => handleActivePlanet(3)}
            className={
              activePlanet === 3
                ? "nav-text planet-nav-item planet-nav-item-active"
                : "nav-text planet-nav-item"
            }
          >
            TITAN
          </span>
        </div>
        <h1 className="planet-name heading-l">
          {data.destinations[activePlanet].name}
        </h1>
        <p className="planet-para body">
          {data.destinations[activePlanet].description}
        </p>
        <div className="line"></div>
        <div className="planet-details">
          <div className="planet-distance">
            <span className="subheading-s planet-distance-heading">
              AVG. DISTANCE
            </span>
            <span className="subheading-l planet-distance-value">
              {data.destinations[activePlanet].distance}
            </span>
          </div>
          <div className="planet-travel-time">
            <span className="subheading-s planet-travel-time-heading">
              EST. TRAVEL TIME
            </span>
            <span className="subheading-l planet-travel-time-value">
              {data.destinations[activePlanet].travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrewPage() {
  const [activeCrew, setActiveCrew] = useState(0);

  function handleActiveCrew(id) {
    if (id === activeCrew) {
      return;
    }
    setActiveCrew(id);
  }

  return (
    <div className="main">
      <div className="crew-main-1">
        <div className="sub-heading">
          <span className="content-number heading-xs">02</span>
          <span className="content-name heading-xs">MEET YOUR CREW</span>
        </div>
        <div className="crew-member-info">
          <span className="crew-member-designation heading-s">
            {data.crew[activeCrew].role}
          </span>
          <h1 className="crew-member-name heading-m">
            {data.crew[activeCrew].name}
          </h1>
          <p className="crew-member-para body">{data.crew[activeCrew].bio}</p>
        </div>
        <div className="crew-nav">
          <button
            className={
              activeCrew === 0
                ? "crew-nav-button crew-nav-button-active"
                : "crew-nav-button"
            }
            onClick={() => handleActiveCrew(0)}
          ></button>
          <button
            className={
              activeCrew === 1
                ? "crew-nav-button crew-nav-button-active"
                : "crew-nav-button"
            }
            onClick={() => handleActiveCrew(1)}
          ></button>
          <button
            className={
              activeCrew === 2
                ? "crew-nav-button crew-nav-button-active"
                : "crew-nav-button"
            }
            onClick={() => handleActiveCrew(2)}
          ></button>
          <button
            className={
              activeCrew === 3
                ? "crew-nav-button crew-nav-button-active"
                : "crew-nav-button"
            }
            onClick={() => handleActiveCrew(3)}
          ></button>
        </div>
      </div>
      <div className="crew-main-2">
        <img
          className="crew-member-image"
          alt="crew-member"
          src={data.crew[activeCrew].images.webp}
        />
      </div>
    </div>
  );
}

function TechnologyPage() {
  const [activeTech, setActiveTech] = useState(0);
  function handleActiveTech(id) {
    if (id === activeTech) {
      return;
    }
    setActiveTech(id);
  }

  return (
    <div className="main">
      <div className="tech-main-1">
        <div className="sub-heading">
          <span className="content-number heading-xs">03</span>
          <span className="content-name heading-xs">SPACE LAUNCH 101</span>
        </div>
        <div className="tech-div">
          <div className="tech-nav">
            <button
              onClick={() => handleActiveTech(0)}
              className={
                activeTech === 0
                  ? "tech-nav-button heading-s tech-nav-button-active"
                  : "tech-nav-button heading-s"
              }
            >
              1
            </button>
            <button
              onClick={() => handleActiveTech(1)}
              className={
                activeTech === 1
                  ? "tech-nav-button heading-s tech-nav-button-active"
                  : "tech-nav-button heading-s"
              }
            >
              2
            </button>
            <button
              onClick={() => handleActiveTech(2)}
              className={
                activeTech === 2
                  ? "tech-nav-button heading-s tech-nav-button-active"
                  : "tech-nav-button heading-s"
              }
            >
              3
            </button>
          </div>
          <div className="tech-info">
            <span className="tech-sub-heading heading-s">
              THE TERMINOLOGY...
            </span>
            <h1 className="tech-name heading-m">
              {data.technology[activeTech].name}
            </h1>
            <p className="tech-para body">
              {data.technology[activeTech].description}
            </p>
          </div>
        </div>
      </div>
      <div className="tech-main-2">
        <img
          className="tech-image"
          alt="technology"
          src={data.technology[activeTech].images.portrait}
        />
      </div>
    </div>
  );
}

export default App;
