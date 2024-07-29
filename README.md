# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



<!-- Mission & Vision - [20 MIN] -->
<!-- Cancel Booking - [20 MIN]  -->
<!-- FAQs - [30 MIN] -->
<!-- Terms & Conditions - [20 MIN] -->

<!-- SIGN up and sign in -->
<!-- Price page -->

<!-- Driver Policy -->
<!-- Privacy Policy --> 
Auth Setup
web hosting
testing
APi hosting

DB Design
Table bookings {
  id integer [primary key]
  pickup_location varchar
  drop_location varchar
  phone_number varchar
  date_of_journey date
  message text
  booking_id varchar [unique]
  status varchar
  created_at timestamp
}

Table contacts {
  id integer [primary key]
  name varchar
  phone varchar
  email varchar
  subject varchar
  message text
  created_at timestamp
}

Table users {
  id integer [primary key]
  name varchar
  email varchar [unique]
  password varchar
  created_at timestamp
}

Table booking_users {
  user_id integer
  booking_id varchar
  created_at timestamp
}

Ref: bookings.booking_id < booking_users.booking_id // many-to-one
Ref: users.id < booking_users.user_id // many-to-one





Backend API


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const uuid = require('uuid');

app.use(bodyParser.json());

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 5432,
});

// Booking API
app.post('/api/book', async (req, res) => {
  const { pickup_location, drop_location, phone_number, date_of_journey, message } = req.body;
  const booking_id = uuid.v4();
  try {
    await pool.query(
      'INSERT INTO Bookings (pickup_location, drop_location, phone_number, date_of_journey, message, booking_id) VALUES ($1, $2, $3, $4, $5, $6)',
      [pickup_location, drop_location, phone_number, date_of_journey, message, booking_id]
    );
    res.status(200).json({ booking_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancellation API
app.post('/api/cancel', async (req, res) => {
  const { booking_id } = req.body;
  try {
    await pool.query('UPDATE Bookings SET status = $1 WHERE booking_id = $2', ['cancelled', booking_id]);
    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Contact Us API
app.post('/api/contact', async (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO Contacts (name, phone, email, subject, message) VALUES ($1, $2, $3, $4, $5)',
      [name, phone, email, subject, message]
    );
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




SELECT 
  b.date_of_journey, 
  b.pickup_location, 
  b.drop_location, 
  b.booking_id
FROM 
  booking_users bu
JOIN 
  bookings b ON bu.booking_id = b.booking_id
WHERE 
  bu.user_id = <user_id>;




  AUTH 
  DB
  BACKEND APIS
  DEPLOYMENT
  LEGAL
  BUSINESS REGISTRATION
  TESTING
  Logo Generation


  APIS---------------
  Booking
  Contact
  Cancel Booking
  