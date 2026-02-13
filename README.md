# Simple CRUD Blogging API

A simple **RESTful API** for managing blog posts. 

---

## Features

- Create – Add new posts
- Read – Fetch all posts or a single post by ID or post filtered by term
- Update – Edit existing posts
- Delete – Remove posts

---

## Tech Stack

**Node.js / Express**    
**DB for storage (or any DB you prefer, like MongoDB/PostgreSQL)**

---

 ## API Endpoints

| Method  | Endpoint    | Description                                      |
|---------|------------|-------------------------------------------------|
| GET     | /posts     | Get all posts (optionally filter using the "term" query) |
| GET     | /posts/:id | Get a post by ID                                |
| POST    | /posts     | Create a new post                               |
| PUT     | /posts/:id | Update a post                                   |
| DELETE  | /posts/:id | Delete a post                                   |

---

## Post Structure    
`{   
  "title": string,  
  "content": string,         
  "category": string,      
  "tags": array with strings,   
}`  

---

## Installtion

`git clone https://github.com/sectoruu/basic-blogging-api.git`   
`cd BlogAPI`  
`npm install`  

## DB structure

| Column    | Type           | Description                                       |
| --------- | -------------- | ------------------------------------------------- |
| id        | Integer        | Unique identifier for the post                    |
| title     | String         | Title of the post                                 |
| content   | Text / String  | Main content of the post                          |
| category  | String         | Category of the post (e.g., Technology)           |
| tags      | Array / String | Tags for the post (e.g., ["Tech", "Programming"]) |
| createdAt | Timestamp      | Date and time when the post was created           |
| updatedAt | Timestamp      | Date and time when the post was last updated      |
