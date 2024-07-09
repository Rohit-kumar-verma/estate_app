**Overview**
This is a comprehensive estate web application that enables users to manage property listings, create and save posts, and engage in real-time chat. The application includes secure authentication using JWT tokens, CRUD operations for posts, real-time messaging with Socket.IO, and data storage using MongoDB.

**Features**
User Authentication: Secure authentication using JWT tokens.
CRUD Operations for Posts: Create, read, update, and delete posts.
Real-Time Chat: Real-time messaging functionality using Socket.IO.
MongoDB Integration: Data storage and retrieval using MongoDB.

**Usage**
  **Authentication**
    Register: /api/auth/register
    Login: /api/auth/login

**Post Management (CRUD)**
    Create Post: /api/posts (POST)
    Get All Posts: /api/posts (GET)
    Get Post by ID: /api/posts/:id (GET)
    Update Post: /api/posts/:id (PUT)
    Delete Post: /api/posts/:id (DELETE)

**Real-Time Chat**
Real-time chat functionality is implemented using Socket.IO. Connect to the Socket.IO server and start exchanging messages in real-time.

**Technologies Used**
    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JSON Web Tokens (JWT)
    Real-Time Communication: Socket.IO
    Others: Mongoose, dotenv, bcrypt
