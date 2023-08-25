# Wagon
## _Apartments sales website_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Wagon is an apartment seal website made with MERN Stack technologies. Maintaining apartments, booking and users is the main key of the website.

### Live Demo

This project is deployed using the firebase hosting service. To visit the demo [Click](https://wagon-apartments-sales.web.app/) here or manually visit the URL https://wagon-apartments-sales.web.app/.

#### Demo Accounts

| Role | Email | Password |
| ------ | ------ | ------ |
| Admin | admin@wagon.com | Admin1234# |
| User | demo@wagon.com | Demo1234# |

> **Note:** The website may be slow because of the free hosting server.

## Features

- Dynamic website
- Responsive webpages
- REST API
- Authentication and authorization
- Apartments, bookings and reviews management
- Email and password authentication system
- User and role management

This website is a fully responsive application. Attempts have been made to implement all basic concepts/services. 

## Tech

This project uses a number of open-source projects/packages to work properly:

### _Frontend_
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js.
- [Bootstrap](https://getbootstrap.com/) - Bootstrap is a powerful, feature-packed frontend toolkit.
- [Firebase](https://firebase.google.com/) - Firebase is an app development platform that helps to build apps and games.
- [Fortawesome](https://fortawesome.com/) - Build and manage icons and typefaces in a single place, then serve them with a single line of code.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React-bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework.
- [React-hook-form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [React-rating-stars-component](https://www.npmjs.com/package/react-rating-stars-component) - A simple star rating component for your React projects (now with half stars and custom characters).
- [React-router](https://reactrouter.com/) - React Router is a standard library for routing in React.

### _Backend_
- [Colors](https://github.com/Marak/colors.js) - get colors in your node.js console.
- [CORS](https://github.com/expressjs/cors#readme) - Node.js CORS middleware.
- [Dotenv](https://github.com/motdotla/dotenv#readme) - Loads environment variables from .env for nodejs projects.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.
- [Validator](https://github.com/validatorjs/validator.js) - A library of string validators and sanitizers.

## Installation and Development

Wagon requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start.

### _Frontend_

```sh
# client
cd wagon/client/
npm install
npm start
```

### _Backend_

```sh
# server
cd wagon/server/
npm install
```

For development environments...

```sh
npm run dev

# or
nodemon server.js
```

### Environment variables

Before starting, the servers must set up some environment variables on both the `wagon/client` and `wagon/server`.

#### _Frontend_

Enter all variables in the `client/.env.local` file.

| Variables | Description |
| ------ | ------ |
| REACT_APP_API_KEY | Firebase api key |
| REACT_APP_AUTH_DOMAIN | Firebase auth domain |
| REACT_APP_PROJECT_ID | Firebase project ID |
| REACT_APP_STORAGE_BUCKET | Firebase storage bucket |
| REACT_APP_MESSAGING_SENDER_ID | Firebase messaging sender ID |
| REACT_APP_APP_ID | Firebase APP ID |
| REACT_APP_SERVER_BACKEND_API_URL | Server side URL |


#### _Backend_

Enter all variables in the `server/.env` file.

| Variables | Description |
| ------ | ------ |
| FIREBASE_SERVICE_ACCOUNT | Firebase service account private key |
| MONGODB_URI | Mongodb connection string |
| PORT | Port number for local server |

**Thank you!**
