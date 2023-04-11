import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

declare let $: any;

const Header = (props:any) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={``}> Reveal BI React Client</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link" to={`view`}>View Dashboards</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={`create`}>Create Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;