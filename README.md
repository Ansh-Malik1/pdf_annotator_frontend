# PDF Annotator Application

## Overview

The **PDF Annotator** application allows users to upload, view, rename, and delete PDF documents with an easy-to-use interface. The project is split into **frontend** (React) and **backend** (Node.js + Express + MongoDB) for a clean separation of concerns.

### Architecture

Frontend (React + TailwindCSS)
```
│
├─ Components
│ ├─ Dashboard.jsx
│ ├─ FileUpload.jsx
│ └─ DocumentCard.jsx
│
├─ Context
│ └─ AuthContext.js
│
└─ Routes
└─ /dashboard, /viewer
```
Backend (Node.js + Express + MongoDB)
```
│
├─ Routes
│ ├─ /api/dashboard
│ ├─ GET /my-pdfs # List user's PDFs
│ ├─ POST /upload # Upload new PDF
│ ├─ PUT /:uuid/rename # Rename PDF
│ └─ DELETE /:uuid # Delete PDF
│
├─ Models
│ └─ PDF.js # MongoDB schema for PDF documents
│
├─ Middleware
│ └─ verifyToken.js # JWT authentication
│
└─ Utils
└─ multer config for file uploads
```

### Features

- User authentication (JWT-based)  
- Upload PDF documents with drag-and-drop or file picker  
- List all uploaded PDFs  
- Inline rename of PDF files  
- Delete PDFs  
- Open PDFs in a viewer  
- Responsive frontend UI with React + TailwindCSS  

## Setup Instructions


1. Clone the repository:

```
git clone https://github.com/Ansh-Malik1/pdf_annotator_frontend
```
Install dependencies:

```
npm install
Create a .env file in the root directory (see sample below).
```
Start the server:

```
npm run dev
The frontend will run at http://localhost:5173.
```

Sample .env / Config Setup
```
VITE_API_BASE_URL=http://localhost:5000/api
Note: Replace placeholders with your actual
```
