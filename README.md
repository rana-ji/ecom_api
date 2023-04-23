Ecommerce Inventory Management API:-
    This is a Node.js and MongoDB project that provides APIs for an ecommerce platform admin to manage product inventory.

Tech Stack:-
    Node.js
    MongoDB
    
Installation:-

    Clone the repository:
        "git clone https://github.com/rana-ji/ecom_api.git"
        
    Navigate to the project directory:
        "cd ecom_api"
        
    Install the dependencies:
        "npm install"
        
    Start the application:
        "npm start"
        
API Endpoints:-

    Adds a new product to the inventory.

        Method: POST

        URL: /products/create

    Lists all the products in the inventory.

        Method: GET

        URL: /products

    Deletes a product from the inventory.

        Method: DELETE

        URL: /products/:id

        URL Parameters:
        id (required): The ID of the product to be deleted
    
    Updates the quantity of a product in the inventory. The quantity can be incremented or decremented.

        Method: POST

        URL: /products/:id/update_quantity/?qty=10

        URL Parameters:
        id (required): The ID of the product to be updated

        Query Parameters:
        number (required): The number by which the quantity should be updated (can be positive or negative)
    
Testing
    You can test the APIs using Postman or any other API testing tool.
