
# Blog API Documentation  

Welcome to the Blog API, the backend powerhouse of your blog project. This API is built using **Express.js** and **MongoDB**, offering a seamless way to manage your blog posts, comments, users, and authors. Designed with scalability and efficiency in mind, this API ensures your blog stays robust and flexible.

---

## Getting Started  

### Setup  

Clone the repository to your local machine:  

```bash
git clone <repository-url>
cd blog-api
```

Install the required dependencies:  


```bash
npm install
```

Set up your MongoDB Atlas connection:  

1. Open the `app.js` file (or `.env` if using environment variables).  
2. Update the `dbUrl` variable with your MongoDB connection string:  

```javascript
const dbUrl = "your-mongodb-atlas-url";
```

Start the server:  

```bash
npm start
```

By default, the server runs on `http://localhost:3000`.

---

## API Endpoints  

### Base URL  

```arduino
http://localhost:3000
```

---

From here you can checkout the functions.js api documentation, much better if your working with react or vanila js on the frontend

### Routes Overview  

The API exposes endpoints for CRUD operations on the following resources:  

- **Posts**  
- **Comments**  
- **Users**  
- **Authors**  

> **Note**: All item names are **singular** in the endpoint paths.

---

### Endpoints  

#### 1. Fetch All Items  
**GET** `/blog/get/{itemName}s`  
Fetches all items of the specified type.  

**Parameters:**  

- `itemName` (string): Resource type. Must be one of `post`, `comment`, `user`, or `author`.  

**Response:**  

```json
[
   { "id": 1, "title": "First Post", "content": "..." },
   { "id": 2, "title": "Second Post", "content": "..." }
]
```

**Example Usage:**  

```bash
curl http://localhost:3000/blog/get/posts
```

---

#### 2. Fetch Single Item  
**GET** `/blog/get/{itemName}/{id}`  
Fetches a single item by ID.  

**Parameters:**  

- `itemName` (string): Resource type.  
- `id` (string): Unique identifier of the item.  

**Response:**  

```json
{ "id": 1, "title": "First Post", "content": "..." }
```

**Example Usage:**  

```bash
curl http://localhost:3000/blog/get/post/1
```

---

#### 3. Add New Item  
**POST** `/blog/add/{itemName}`  
Creates a new item.  

**Parameters:**  

- `itemName` (string): Resource type.  
- `data` (object): JSON payload with the new item details.  

**Response:**  

```json
{ "message": "Item added successfully", "item": { ... } }
```

**Example Usage:**  

```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"title": "New Post", "content": "Content here"}' \
http://localhost:3000/blog/add/post
```

---

#### 4. Update Item  
**PUT** `/blog/update/{itemName}/{id}`  
Updates an existing item by its ID.  

**Parameters:**  

- `itemName` (string): Resource type.  
- `id` (string): Unique identifier of the item.  
- `data` (object): JSON payload with the updated fields.  

**Response:**  

```json
{ "message": "Item updated successfully", "item": { ... } }
```

**Example Usage:**  

```bash
curl -X PUT -H "Content-Type: application/json" \
-d '{"title": "Updated Post"}' \
http://localhost:3000/blog/update/post/1
```

---

#### 5. Delete Item  
**DELETE** `/blog/delete/{itemName}/{id}`  
Deletes an item by its ID.  

**Parameters:**  

- `itemName` (string): Resource type.  
- `id` (string): Unique identifier of the item.  

**Response:**  

```json
{ "message": "Item deleted successfully" }
```

**Example Usage:**  

```bash
curl -X DELETE http://localhost:3000/blog/delete/post/1
```

---

#### 6. Query Items  
**GET** `/blog/query/{itemName}/{field}/{filter}`  
Queries items based on a field and filter value.  

**Parameters:**  

- `itemName` (string): Resource type.  
- `field` (string): The field to query.  
- `filter` (string): The filter value.  

**Response:**  

```json
[
   { "id": 1, "title": "Filtered Post", "content": "..." }
]
```

**Example Usage:**  

```bash
curl http://localhost:3000/blog/query/post/author/JohnDoe
```

---

## Error Handling  

The API uses consistent error handling, with clear messages for debugging.  

### Error Types:  
- `400`: Bad Request  
- `404`: Resource Not Found  
- `500`: Server Error  

**Example Error Response:**  

```json
{
   "error": "Resource not found",
   "details": "No post with ID 1 exists"
}
```

---

## Pro Tips (Though am planning to add all these features when i get time)

### Authentication:  

- Add authentication middleware if your API will be public-facing.  
- Use JWT or OAuth2 for secure access.  

### Validation:  

- Ensure robust validation in your controllers to prevent invalid data entry.  

### MongoDB Performance:  

- Use indexes on frequently queried fields for optimal performance.  

### Environment Variables:  

- Store sensitive data like `dbUrl` in a `.env` file:  

```env
DB_URL=mongodb+srv://your-connection-string
```

Then access it using:  

```javascript
const dbUrl = process.env.DB_URL;
```

---

## Future Enhancements  

- Add pagination for `getAll` endpoints to handle large datasets.  
- Implement rate limiting to protect the API from abuse.  
- Include detailed API metrics for monitoring.



---

## Feedback  

I'd love to hear your thoughts on this API! If you have suggestions for improvements or encounter issues, feel free to raise them in the project's GitHub repository. 🚀  
Honestly ,I created this api to waste a little time, but if i get 10 stars I will make it the best it can be. (I dont think anyone will even read this far) 😅
