# User-Management-API

This API allows you to manage user details through CRUD operations.

## Base URL

http://localhost:3000/

## Endpoints

### Get All Users

- **URL**: `/get`
- **Method**: `GET`
- **Description**: Retrieves all users.
- **Response**: Array of user objects.

### Get User by ID

- **URL**: `/get/:id`
- **Method**: `GET`
- **Description**: Retrieves a user by ID.
- **Response**: User object.

### Create User

- **URL**: `/add`
- **Method**: `POST`
- **Description**: Creates a new user.
- **Request Body**: User data (name, email, age).
- **Response**: Created user object.

### Update User

- **URL**: `/update/:id`
- **Method**: `PUT`
- **Description**: Updates a user by ID.
- **Request Body**: Updated user data.
- **Response**: Updated user object.

### Delete User

- **URL**: `/delete/:id`
- **Method**: `DELETE`
- **Description**: Deletes a user by ID.
- **Response**: Success message.

## Error Responses

- **400 Bad Request**: Invalid request data.
- **404 Not Found**: User not found.
- **500 Internal Server Error**: Server error.

## Sample Request

### Create User

```json
POST /add
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30
}
```

## Sample Response

### Get User by ID

```json
GET /get/1234567890
{
    "_id": "1234567890",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30
}
```

## Running the application

**Prerequisites:**

- Node.js and npm installed on your system.

**Steps:**

- Clone or download the application codebase.

- Navigate to the project directory in your terminal.

- Install dependencies:

```
npm install
```

```
npm start
```

This will typically start the server on a port like localhost:3000 (check the code for the specific port).

**API Usage**

Once the server is running, you can use tools like Postman or make API requests directly from your code to interact with the contact management endpoints. Refer to the codebase for specific API endpoint definitions and request/response structures.
