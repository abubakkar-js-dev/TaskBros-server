# TaskBros Server

## Overview
TaskBros Server is the backend service for the TaskBros application, which manages tasks and user interactions. This server is built using Node.js and Express, and it connects to a MongoDB database.

## Features
- User authentication and authorization
- Task creation, retrieval, updating, and deletion
- Real-time task updates using WebSockets
- RESTful API endpoints

## Requirements
- Node.js (v14 or higher)
- MongoDB

## Installation
1. Clone the repository:
    ```sh
    git clone "copied url here"
    ```
2. Navigate to the project directory:
    ```sh
    cd taskBros-server
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    JWT_SECRET_KEY=your_jwt_secret
    ```

## Running the Server
1. Start the server:
    ```sh
    npm run dev
    ```
2. The server will be running at `http://localhost:5000`.



## Contributing
Contributions are welcome! Please open an issue or submit a pull request.


## Contact
For any inquiries, please contact [mdabubakkars182@gmail.com](mailto:mdabubakkars182@gmail.com).