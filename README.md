# My Express API

This project is a simple Express.js application that serves as a template for creating RESTful APIs. It includes a basic structure with controllers, routes, and models.

## Project Structure

```
my-express-api
├── src
│   ├── app.js               # Entry point of the application
│   ├── controllers          # Contains controller files
│   │   └── index.js        # Controller for handling API requests
│   ├── routes               # Contains route definitions
│    └── app.js        # Route definitions for the application
├── db.json             # Database file
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd devtalks-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Execute "npm run start:db" to start database server,

2. Execute "npm start" to start application


## API Endpoints

- `GET /carrinho` - Product list in cart
- `POST /carrinho` - Add new item to cart
- `POST /carrinho/clear` - Clear items from cart
- `Delete /carrinho/:id` - Remove custom item from cart