# VectorShift Pipeline Builder

A full-stack pipeline builder that lets you visually create, connect, and validate workflows using a node-based interface.

## Overview

This project is a React + FastAPI application where users can drag and drop nodes, connect them into pipelines, and validate whether the structure forms a valid DAG (Directed Acyclic Graph).

It was built as part of the VectorShift technical assessment and focuses on clean architecture, usability, and scalability.

---

## Tech Stack

**Frontend**

* React (with React Flow)
* Zustand for state management
* CSS (custom theming + animations)

**Backend**

* FastAPI
* Python
* Pydantic

---

## Features

* Drag-and-drop pipeline builder
* Node abstraction system for fast development
* Dynamic text node with variable detection (`{{variable}}`)
* Automatic handle generation
* Real-time pipeline validation
* Cycle detection using Kahn’s algorithm
* Dark/light theme toggle
* Responsive UI with sidebar layout

---

## Getting Started

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Runs at: http://localhost:8000

---

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Runs at: http://localhost:3000

---

## How to Use

1. Drag nodes from the sidebar onto the canvas
2. Connect nodes to build a pipeline
3. Configure node inputs if needed
4. Click **Submit Pipeline**
5. View validation results (node count, edge count, DAG status)

---

## Project Structure

```
vector/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   └── components/
│
└── backend/
    └── main.py
```

---

## API

### POST `/pipelines/parse`

Validates the pipeline structure.

**Request**

```json
{
  "num_nodes": 5,
  "num_edges": 4
}
```

**Response**

```json
{
  "is_dag": true
}
```

---

## Notes

* Designed to make adding new node types simple and consistent
* Focused on readability over over-engineering
* Built with scalability in mind

---

## License

MIT
