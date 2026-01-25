from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict, deque

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Check if the graph is a Directed Acyclic Graph (DAG)
    Uses Kahn's algorithm (topological sort with BFS)
    """
    # Build adjacency list and in-degree count
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize all nodes with in-degree 0
    node_ids = {node['id'] for node in nodes}
    for node_id in node_ids:
        in_degree[node_id] = 0
    
    # Build graph and calculate in-degrees
    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1
    
    # Find all nodes with in-degree 0
    queue = deque([node_id for node_id in node_ids if in_degree[node_id] == 0])
    processed_count = 0
    
    # Process nodes in topological order
    while queue:
        node = queue.popleft()
        processed_count += 1
        
        # Reduce in-degree for neighbors
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If all nodes are processed, it's a DAG
    # If not all nodes are processed, there's a cycle
    return processed_count == len(node_ids)

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    """
    Parse the pipeline and return:
    - num_nodes: number of nodes in the pipeline
    - num_edges: number of edges in the pipeline
    - is_dag: whether the pipeline forms a DAG
    """
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_status = is_dag(nodes, edges) if num_nodes > 0 else True
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': dag_status
    }
