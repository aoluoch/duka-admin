# Duka Admin Panel

This is a simple `React-based Admin Panel` for managing products. You can `add`, `update`, `delete`, and `view products`. The panel interacts with a `backend API` for data management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of products.
- Add new products with details including name, price, description, and image URL.
- Edit existing products.
- Delete products.

## Technologies Used

- **Frontend:** React, Axios
- **Styling:** Tailwind CSS
- **Backend:** Flask (for example API endpoints, not included in this repo)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Npm installed on your machine.
- A running backend API that supports the required endpoints.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/product-admin-panel.git
   cd product-admin-panel

2. Install the dependencies:
    - npm install

## Running the Application
 Start the development server:
   - npm start
2. Open your browser and go to http://localhost:3000.

## API Endpoints

Ensure your backend API has the following endpoints:

- GET /products: Fetch all products.
- POST /products: Add a new product.
- PATCH /products/:id: Update an existing product.
- DELETE /products/:id: Delete a product.

## Usage
- Add Product: Fill out the form with product details and click "Add Product."
- Edit Product: Click the "Edit" button on a product card to modify its details.
- Delete Product: Click the "Delete" button to remove a product from the list.

### Contributing📓

Contributions are welcome! Please follow these steps:

- Fork the project.
- Create your feature branch (git checkout -b feature/MyFeature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/MyFeature).
- Open a pull request.

## Authors😀
[Sharon Kahira](https://github.com/Her-Code)
[Vincent Irungu](https://github.com/Phoenixvince)
[Edwin Ng'anga](https://github.com/Programer-Ed)
[Amos Oluoch](https://github.com/aulouch)
[John Muchiri](https://github.com/MUCHIRIJOHN1990)


# Plugin
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
