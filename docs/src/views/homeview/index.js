import React from 'react';
import { Link } from 'react-router-dom';
import Container from "../../components/Container/Index";
import "../../pages/pages.css";

export default () => (
  <Container>
 <div className="pure-g center">
 <div className="splash-container l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
  <div className="App-intro">
    <h3>Standard Examples:</h3>
    <ul>
      <li>
        <Link to="/bar-chart">Bar Chart</Link>
      </li>
      <li>
        <Link to="/donut-chart">Donut Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart">Multi-Series Line Chart</Link>
      </li>
    </ul>

    <h3>Animated Examples:</h3>
    <ul>
      <li>
        <Link to="/bar-chart/animated">Bar Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart/animated">
          Multi-Series Line Chart
        </Link>
      </li>
    </ul>
  </div>
  </div>
  </div>

  </Container>
);