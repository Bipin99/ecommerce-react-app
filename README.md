# E-Commerce Web Application

This is a fully functional e-commerce web application built with React, Firebase, and Stripe for handling payments. The app provides a modern shopping experience with features like product browsing, cart management, checkout process, user authentication, order history, and profile management.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Firebase Setup](#firebase-setup)
- [Stripe Integration](#stripe-integration)
- [Contributing](#contributing)


## Technologies Used

- **Frontend:** React, Vite
- **Backend (for payment processing):** Firebase Firestore
- **Authentication:** Firebase Authentication (Google, Email/Password login)
- **Payment Gateway:** Stripe
- **State Management:** React Context API
- **Routing:** React Router
- **Styling:** SCSS, CSS Modules


## Features

- **Product Listing:** Displays products fetched from a backend API.
- **Product Details:** Each product has a detailed page with descriptions, images, and price.
- **Shopping Cart:** Users can add, remove, and update quantities of items in the cart.
- **Checkout Process:** A multi-step checkout form with shipping info and Stripe payment integration.
- **User Authentication:** Sign-up, login, and logout functionality using Firebase Authentication (supports Google login).
- **Profile & Order History:** After login, users can view their profile and order history.
- **Order Persistence:** Orders are stored in Firebase Firestore and can be viewed by the user in their profile.
- **Responsive Design:** Fully responsive for mobile and desktop views.

## Setup and Installation

To run this project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

### 2. Install Dependencies

Make sure you have Node.js installed. Then, run the following command to install the project dependencies:

```bash
npm install



Apologies for the confusion earlier. Below is the entire content in markdown format which you can directly copy and paste into your README.md file:

markdown
Copy code
# E-Commerce Web Application

This is a fully functional e-commerce web application built with React, Firebase, and Stripe for handling payments. The app provides a modern shopping experience with features like product browsing, cart management, checkout process, user authentication, order history, and profile management.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Firebase Setup](#firebase-setup)
- [Stripe Integration](#stripe-integration)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:** React, Vite
- **Backend (for payment processing):** Firebase Firestore
- **Authentication:** Firebase Authentication (Google, Email/Password login)
- **Payment Gateway:** Stripe
- **State Management:** React Context API
- **Routing:** React Router
- **Styling:** SCSS, CSS Modules
- **Testing:** Jest, React Testing Library

## Features

- **Product Listing:** Displays products fetched from a backend API.
- **Product Details:** Each product has a detailed page with descriptions, images, and price.
- **Shopping Cart:** Users can add, remove, and update quantities of items in the cart.
- **Checkout Process:** A multi-step checkout form with shipping info and Stripe payment integration.
- **User Authentication:** Sign-up, login, and logout functionality using Firebase Authentication (supports Google login).
- **Profile & Order History:** After login, users can view their profile and order history.
- **Order Persistence:** Orders are stored in Firebase Firestore and can be viewed by the user in their profile.
- **Responsive Design:** Fully responsive for mobile and desktop views.

## Setup and Installation

To run this project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
## 2. Install Dependencies

Make sure you have Node.js installed. Then, run the following command to install the project dependencies:

```bash
npm install


## 3. Create .env File

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_STRIPE_PUBLIC_KEY=your-stripe-public-key
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id


## 4. Run the Application

Once the setup is complete, start the development server:

```bash
npm run dev
The application will be running at http://localhost:5173.

## 5. Firebase Setup

### Create a Firebase Project:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing project.
3. Set up Firebase Authentication (Email/Password and Google sign-in).
4. Set up Firebase Firestore for storing orders.
5. Set up Firebase Storage (if you plan to store images).

### Enable Authentication:

In the Firebase console, enable Google and Email/Password sign-in under the Authentication section.

### Add Firebase Configuration:

In your Firebase project, get the Firebase config from the "Project settings" and add it to your `.env` file:

## 6. Stripe Integration

### Set up a Stripe Account:

1. Go to [Stripe](https://stripe.com) and create an account if you don’t have one.
2. Get your publishable key from the Stripe dashboard and add it to your `.env` file as `VITE_STRIPE_PUBLIC_KEY`.

### Create a Payment Intent (Backend):

1. A backend route is used to create a Stripe PaymentIntent for processing the payments.
2. The payment information is securely passed to Stripe using their API for final payment processing.

### Stripe Payment Integration with Node.js

To securely process payments, you need a backend server to handle Stripe API interactions. This ensures sensitive payment information is not directly exposed in the frontend and provides better security for transactions.

---

### Setting Up a Node.js Server for Stripe

Follow the steps below to set up a Node.js server for handling Stripe payments:

1. **Create a Node.js Server**  
   This server creates a secure endpoint to generate a Stripe PaymentIntent. PaymentIntent helps initialize the payment process with the order amount and currency.

   ```javascript
   // Install dependencies: express, stripe, cors, dotenv
   const express = require('express');
   const Stripe = require('stripe');
   const cors = require('cors');
   require('dotenv').config(); // To use environment variables

   const app = express();
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Securely load your Stripe Secret Key

   // Middleware
   app.use(cors());
   app.use(express.json()); // Parse incoming JSON data

   // Endpoint to create a PaymentIntent
   app.post('/create-payment-intent', async (req, res) => {
     try {
       const { amount, currency } = req.body; // Expect amount in cents and currency (e.g., 'usd')

       // Create a PaymentIntent with the specified amount and currency
       const paymentIntent = await stripe.paymentIntents.create({
         amount,
         currency,
       });

       // Send the PaymentIntent client secret to the frontend
       res.status(200).json({ clientSecret: paymentIntent.client_secret });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });

   // Start the server
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Server running on http://localhost:${PORT}`);
   });

## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow the steps below to submit your changes:

1. **Fork the Repository**
   - Navigate to the repository on GitHub and click on the **Fork** button in the top-right corner. This creates a personal copy of the repository in your GitHub account.

2. **Create a New Branch**
   - After forking the repository, clone it to your local machine:
     ```bash
     git clone https://github.com/your-username/your-repository-name.git
     cd your-repository-name
     ```
   - Create a new branch for your feature or fix:
     ```bash
     git checkout -b feature/your-feature
     ```

3. **Make Your Changes**
   - Make your changes in the codebase. Ensure that your code adheres to the project's style guidelines and passes existing tests.

4. **Commit Your Changes**
   - After making the changes, commit them with a descriptive message:
     ```bash
     git commit -am 'Add new feature or fix description'
     ```

5. **Push Your Changes**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature/your-feature
     ```

6. **Submit a Pull Request**
   - After pushing your changes, go to your fork on GitHub and click on the **Pull Request** button. Select the branch you've worked on and submit the pull request.

7. **Code Review**
   - Once you submit your pull request, the project maintainers will review your code. They may provide feedback or request changes.

8. **Merge**
   - Once the pull request is approved, your changes will be merged into the main repository.

Thank you for contributing to this project!
