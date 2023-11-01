/*
Filename: complex_code.js

Description: This code demonstrates a complex algorithm for finding the optimal path in a weighted directed graph using Dijkstra's algorithm. It includes advanced data structures and various helper functions.

Author: [Your Name]

Date: [Current Date]
*/

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.queue.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (element.distance < this.queue[i].distance) {
          this.queue.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(element);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyMatrix = [];
  }

  addVertex(name) {
    this.vertices.push(name);
    this.adjacencyMatrix[name] = [];
  }

  addEdge(source, destination, weight) {
    this.adjacencyMatrix[source][destination] = weight;
  }

  dijkstra(source) {
    const distances = {};
    const visited = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    this.vertices.forEach((vertex) => {
      distances[vertex] = vertex === source ? 0 : Infinity;
      priorityQueue.enqueue({ vertex, distance: distances[vertex] });
      previous[vertex] = null;
    });

    while (!priorityQueue.isEmpty()) {
      const { vertex } = priorityQueue.dequeue();
      visited[vertex] = true;

      this.vertices.forEach((neighbor) => {
        if (this.adjacencyMatrix[vertex][neighbor] && !visited[neighbor]) {
          const newDistance =
            distances[vertex] + this.adjacencyMatrix[vertex][neighbor];
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = vertex;
            priorityQueue.enqueue({ vertex: neighbor, distance: newDistance });
          }
        }
      });
    }

    return { distances, previous };
  }
}

// Usage
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 4);
graph.addEdge("E", "F", 1);

const source = "A";
const { distances, previous } = graph.dijkstra(source);

console.log(`Shortest paths from ${source}:`);
Object.keys(distances).forEach((vertex) => {
  console.log(`to ${vertex}: ${distances[vertex]}, path: ${getPath(vertex)}`);
});

function getPath(vertex) {
  let path = [];
  while (vertex) {
    path.unshift(vertex);
    vertex = previous[vertex];
  }
  return path.join(" -> ");
}

// More complex code goes here...