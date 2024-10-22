from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  
    allow_headers=["*"],  
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: dict):
    nodes = pipeline.get("nodes", [])
    edges = pipeline.get("edges", [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)

    graph = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
        in_degree[target] += 1

    queue = deque([node['id'] for node in nodes if in_degree[node['id']] == 0])
    processed_count = 0

    while queue:
        current = queue.popleft()
        processed_count += 1
        
        
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    
    is_dag = processed_count == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
