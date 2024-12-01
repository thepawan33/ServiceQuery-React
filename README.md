# ServiceQuery - Frontend

## Project Link

You can access the live version of the project [https://ps-servicequery.onrender.com].

## Project Description

**ServiceQuery** is a platform designed for service providers, specifically electricians, to interact with customers via a query submission system. The platform allows customers to submit service requests (such as faulty fans or switches), which are then received and managed by the admin. The system ensures secure communication, and only authorized admins can view customer queries.

Electricians or businesses can provide their company details, services offered, and contact information on the platform, allowing customers to easily access the required information and submit queries directly.

## Features

- **Service Provider Information**: Electricians can display their company details, services offered, and contact information.

- **Customer Query Submission**: Customers can submit queries with their name, contact details, and a description of the issue they are facing (e.g., "Fan not working," "Switch malfunction").

- **Admin Panel**: The admin can view all incoming queries securely, manage them, and take the necessary steps to contact customers.

- **JWT Authentication**: Secure routes are implemented using JSON Web Tokens (JWT) to ensure that only authorized users (admins) can access and manage queries.

- **Redux for State Management**: Redux and Redux Toolkit are used for global state management. This includes managing and displaying alerts.

- **Alert Management**: Redux is utilized to handle global alerts across the app, allowing the display of success, error, or info messages for the users, ensuring clear communication and user-friendly experience.

- **Axios Interceptors**: Axios is configured with interceptors to automatically handle token expiration. If the admin’s JWT token has expired, the system will automatically use a refresh token to obtain a new JWT, ensuring the admin doesn't have to log in again.

- **Token Handling**: The system sends the JWT in the authorization header as a **Bearer Token** for secure API requests. If the token is expired, the Axios interceptor will initiate the refresh process without requiring the admin to manually log in again.

- **Responsive Design**: The frontend is designed to be mobile-friendly and responsive, ensuring usability across different devices.

## Technologies Used

- **React**: The frontend is built using React for a dynamic and responsive user interface.

- **JWT Authentication**: JSON Web Tokens are used for securing routes and ensuring that only authenticated users (admins) can view and manage queries.

- **Axios**: Axios is used to make API calls to communicate with the backend for query submission and management. Axios interceptors are implemented to handle token refresh automatically when the JWT expires.

- **React Router**: React Router is used for navigation between different pages of the platform, such as the home page and the admin panel.

- **CSS**: The project uses CSS for styling the user interface and making it responsive across different screen sizes.
