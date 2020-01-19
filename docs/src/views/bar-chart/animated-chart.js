import React from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import { tsvParse } from 'd3-dsv';
import { max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';
import { easeCubicInOut } from 'd3-ease';
import { animateWithEase } from 'drrr';
import "../../pages/pages.css";

import dataTsv from './data';

import './chart.css';

const svgWidth = 960,
  svgHeight = 500;

const margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = svgWidth - margin.left - margin.right,
  height = svgHeight - margin.top - margin.bottom;

const x = scaleBand()
    .rangeRound([0, width])
    .padding(0.1),
  y = scaleLinear().rangeRound([height, 0]);

// The original data to be animated to
const originalData = tsvParse(dataTsv, d => {
  d.frequency = +d.frequency;
  return d;
});

x.domain(originalData.map(d => d.website));
y.domain([0, max(originalData, d => d.frequency)]);

const Bar = ({ data }) => (
  <svg width={svgWidth} height={svgHeight}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <g
        className="axis axis--x"
        transform={`translate(0, ${height})`}
        ref={node => select(node).call(axisBottom(x))}
      />
      <g className="axis axis--y">
        <g ref={node => select(node).call(axisLeft(y).ticks(20, 'k'))} />
		<text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
          Avg Daily Visitors(millions)
        </text>
        <text id="chartTitle" y="0" dx="21em" textAnchor="end">
        Shopping
        </text>
      </g>
      {data.map(d => (
        <rect
          key={d.website}
          className="bar"
          x={x(d.website)}
          y={y(d.frequency)}
          width={x.bandwidth()}
          height={height - y(d.frequency)}
        />
      ))}
    </g>
  </svg>
);

const easeData = (data, t) => {
  return data.map(x => ({
    website: x.website,
    frequency: x.frequency * easeCubicInOut(t),
  }));
};

export default animateWithEase(Bar, {
  easeData,
  duration: 4000,
  delay: 2000,
  interval: 5,
  data: originalData,
});