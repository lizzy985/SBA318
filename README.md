# Task Management Application

## Objectives

- Create a server application with Node and Express.
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.
- Interact with a self-made API through HTML forms.

## Project Overview

This project is a simple Task Management Application that allows users to create, update, and delete tasks. The application is built using Node.js and Express, with MongoDB and Mongoose for data storage, and EJS as the template engine.

## Features

- **CRUD Operations:** Create, Read, Update, and Delete tasks.
- **Template Engine:** Use EJS to render views.
- **HTML Forms:** For adding and editing tasks.
- **RESTful API:** For managing tasks.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI and port number:

    ```plaintext
    MONGO_URI=mongodb+srv://lizzy:lizzy@mongopractice.owdfrgn.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice
    PORT=3000
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.
