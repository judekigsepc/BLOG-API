### Documentation for Blog API Client

This documentation describes the functions and structure of the Blog API client module written in JavaScript. The module provides utility functions to interact with a RESTful API, allowing operations such as fetching, adding, updating, deleting, and querying blog-related items.
This was tested with react and vaniila js.
---

### **Base URL**
All API requests are prefixed with:
```
http://localhost:3000
```

### **Acceptable Item Names**
The following item names are valid and must be used in singular form:
- `post`
- `comment`
- `user`
- `author`

---

## **Functions**

### 1. **getAll(itemName)**
Fetches all records for a given item type.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.

#### **Returns**
- A promise resolving to the data of all items, or an error if the request fails.

#### **Example Usage**
```javascript
const posts = await getAll('post');
```

---

### 2. **getSingle(itemName, id)**
Fetches a single record by its ID.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.
- `id` (string | number): The unique identifier of the item.

#### **Returns**
- A promise resolving to the item data, or an error if the request fails.

#### **Example Usage**
```javascript
const post = await getSingle('post', 123);
```

---

### 3. **addItem(itemName, data)**
Adds a new item to the server.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.
- `data` (object): The data object representing the item to add.

#### **Returns**
- A promise resolving to the added item's data, or an error if the request fails.

#### **Example Usage**
```javascript
const newPost = await addItem('post', { title: 'New Post', content: 'Content here...' });
```

---

### 4. **updateItem(itemName, id, data)**
Updates an existing item by its ID.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.
- `id` (string | number): The unique identifier of the item to update.
- `data` (object): The updated data for the item.

#### **Returns**
- A promise resolving to the updated item's data, or an error if the request fails.

#### **Example Usage**
```javascript
const updatedPost = await updateItem('post', 123, { title: 'Updated Title' });
```

---

### 5. **deleteItem(itemName, id)**
Deletes an item by its ID.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.
- `id` (string | number): The unique identifier of the item to delete.

#### **Returns**
- A promise resolving to the deletion confirmation, or an error if the request fails.

#### **Example Usage**
```javascript
const result = await deleteItem('post', 123);
```

---

### 6. **queryDoc(itemName, field, filter)**
Queries documents based on a specific field and filter value.

#### **Parameters**
- `itemName` (string): The singular name of the item. Must be one of the valid items.
- `field` (string): The field to query on.
- `filter` (string | number): The value to filter by.

#### **Returns**
- A promise resolving to the queried data, or an error if the request fails.

#### **Example Usage**
```javascript
const results = await queryDoc('post', 'author', 'John Doe');
```

---

### **Error Handling**
Errors are handled by the `handleError` function, which logs appropriate error messages based on the type of issue.

#### **Error Scenarios**
1. **Server Response Error**:
   - Logs the HTTP status code and server error message.
   - Example: 
     ```
     Error: 404
     Error: Not Found
     ```
2. **No Response**:
   - Indicates no response was received from the server.
   - Example:
     ```
     Error: No response was received from server
     ```
3. **Request Setup Error**:
   - Logs errors in setting up the request.
   - Example:
     ```
     Error in setting up request: Network Error
     ```

---

### **Exports**
The module exports the following functions for external use:
- `getAll`
- `getSingle`
- `addItem`
- `updateItem`
- `deleteItem`
- `queryDoc`

---

### **Example Import**
```javascript
import { getAll, getSingle, addItem, updateItem, deleteItem, queryDoc } from './blogApiClient';
```

Use these functions to interact with your API seamlessly while handling errors gracefully.
