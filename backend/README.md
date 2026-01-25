# VectorShift Pipeline Backend

FastAPI backend for pipeline validation and analysis.

## Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run Server

```bash
uvicorn main:app --reload --port 8000
```

### 3. Test

Open http://localhost:8000 - you should see:
```json
{"Ping": "Pong"}
```

## API Endpoints

### GET /
Health check endpoint.

**Response:**
```json
{"Ping": "Pong"}
```

### POST /pipelines/parse
Analyze a pipeline and check if it's a valid DAG.

**Request Body:**
```json
{
    "nodes": [
        {"id": "node-1", ...},
        {"id": "node-2", ...}
    ],
    "edges": [
        {"source": "node-1", "target": "node-2", ...}
    ]
}
```

**Response:**
```json
{
    "num_nodes": 2,
    "num_edges": 1,
    "is_dag": true
}
```

## DAG Detection

The backend uses **Kahn's algorithm** for topological sorting to detect cycles:

1. Build adjacency list from edges
2. Calculate in-degree for each node
3. Use BFS to process nodes with in-degree 0
4. If all nodes processed → DAG
5. If some nodes remain → Contains cycles

**Time Complexity:** O(V + E)
**Space Complexity:** O(V + E)

## CORS Configuration

CORS is enabled for frontend communication:
- **Allowed Origins:** http://localhost:3000
- **Allowed Methods:** All
- **Allowed Headers:** All

For production, update to your domain.

## Dependencies

- **FastAPI**: Web framework
- **Uvicorn**: ASGI server
- **Pydantic**: Data validation

## Development

Run with auto-reload:
```bash
uvicorn main:app --reload
```

View API docs:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Testing Examples

### Valid DAG
```bash
curl -X POST http://localhost:8000/pipelines/parse \
  -H "Content-Type: application/json" \
  -d '{
    "nodes": [
      {"id": "A"},
      {"id": "B"},
      {"id": "C"}
    ],
    "edges": [
      {"source": "A", "target": "B"},
      {"source": "B", "target": "C"}
    ]
  }'
```

### With Cycle
```bash
curl -X POST http://localhost:8000/pipelines/parse \
  -H "Content-Type: application/json" \
  -d '{
    "nodes": [
      {"id": "A"},
      {"id": "B"}
    ],
    "edges": [
      {"source": "A", "target": "B"},
      {"source": "B", "target": "A"}
    ]
  }'
```

## Production Deployment

1. **Install in production environment:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run with Gunicorn:**
   ```bash
   gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
   ```

3. **Update CORS origins** to your domain

4. **Add authentication** if needed

5. **Set up reverse proxy** (nginx/Apache)

## License

MIT
