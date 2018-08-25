import * as d3 from 'd3';
import forceDiagramConfig from '../baseD3Config';

const config = forceDiagramConfig();

// function click(d) {
//   // Collapse the node and all it's children
//   // getChildren(d);

//   // updateReport();
// }

function createForceDiagram(element, graph) {
  const d3Element = d3.select(element);
  d3Element.html(null);

  const width = 600;
  const height = width;

  const svg = d3Element
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 600 600')
    .append('g');

  const simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(d => d.id).distance(100).strength(0.1))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2));

  /* eslint-disable no-param-reassign */
  function dragstarted(d) {
    d.fx = d.x;
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fy = d.y;
  }
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  /* eslint-enable no-param-reassign */

  const link = svg.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(graph.links)
    .enter()
    .append('line')
    .attr('stroke-width', 2)
    .attr('stroke', config.textColour);

  const node = svg.append('g')
    .attr('class', 'nodes')
    .selectAll('path')
    .data(graph.nodes, d => d.id)
    .enter()
    .append('path')
    .attr('d', d => config.groupIcon[d.group])
    .attr('fill', d => (d.colour ? d.colour : config.clearColour))
    .attr('stroke', config.borderColour)
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  function ticked() {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node
    // .attr('transform', d => `translate(${d.x - 12},${d.y - 12})`);
      .attr('transform', d => `translate(${d.x - 35},${d.y - 35}) scale(3)`);
  }
  node.append('title')
    .text(d => d.name);

  simulation
    .nodes(graph.nodes)
    .on('tick', ticked);

  simulation.force('link')
    .links(graph.links);
}

export default createForceDiagram;
