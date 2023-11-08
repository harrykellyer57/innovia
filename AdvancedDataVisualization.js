/* Filename: AdvancedDataVisualization.js
   Description: This code demonstrates advanced data visualization using JavaScript.
                It generates a complex and sophisticated interactive chart.
*/

// Import necessary libraries
import * as d3 from 'd3'; // d3.js for data manipulation and visualization

// Set up the canvas
const canvas = d3.select('body')
                .append('svg')
                .attr('width', 800)
                .attr('height', 600);

// Define data
const data = [
  { month: 'Jan', value: 10 },
  { month: 'Feb', value: 20 },
  { month: 'Mar', value: 15 },
  { month: 'Apr', value: 25 },
  { month: 'May', value: 30 },
  { month: 'Jun', value: 18 },
  { month: 'Jul', value: 22 },
  { month: 'Aug', value: 16 },
  { month: 'Sep', value: 28 },
  { month: 'Oct', value: 12 },
  { month: 'Nov', value: 24 },
  { month: 'Dec', value: 19 }
];

// Create scales
const xScale = d3.scaleBand()
                 .domain(data.map(d => d.month))
                 .range([0, 750])
                 .paddingInner(0.1);

const yScale = d3.scaleLinear()
                 .domain([0, d3.max(data, d => d.value)])
                 .range([550, 0]);

// Create axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Append axes to canvas
canvas.append('g')
      .attr('transform', 'translate(50, 50)')
      .call(xAxis);

canvas.append('g')
      .attr('transform', 'translate(50, 50)')
      .call(yAxis);

// Create bars
canvas.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.month) + 50)
      .attr('y', d => yScale(d.value) + 50)
      .attr('width', xScale.bandwidth())
      .attr('height', d => 550 - yScale(d.value))
      .attr('fill', 'steelblue');

// Add interactive behavior
canvas.selectAll('rect')
      .on('mouseover', function(d) {
        d3.select(this).attr('fill', 'orange');
      })
      .on('mouseout', function(d) {
        d3.select(this).attr('fill', 'steelblue');
      })
      .on('click', function(d) {
        console.log(`Value for ${d.month}: ${d.value}`);
      });

// Add labels
canvas.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d.value)
      .attr('x', d => xScale(d.month) + 70)
      .attr('y', d => yScale(d.value) + 65)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '14px')
      .attr('fill', 'white');

// Add chart title
canvas.append('text')
      .attr('x', 400)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .attr('font-size', '20px')
      .attr('font-weight', 'bold')
      .text('Monthly Values');

// Add legend
const legend = canvas.append('g')
                     .attr('transform', 'translate(600, 10)');

legend.append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', 'steelblue');

legend.append('text')
      .attr('x', 40)
      .attr('y', 25)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '14px')
      .attr('fill', 'black')
      .text('Value');

// Done!