# Review-System - A Review Application

Review-System is a powerful Review and Rating platform built with EJS and Bootstrap for the frontend, and Node.js, Express, and MongoDB for the backend. It offers complete CRUD (Create, Read, Update, Delete) operations securely, along with a robust authentication system.

(<img src="/assets/images/Home%20Page%20After%20Login.png" alt="Review-System-Image" title="Home Page" width="300" height="200"/>


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)

## Introduction

Review-System provides a seamless experience for users to submit reviews and ratings for events they've attended. It offers an extensive authentication system to ensure secure access and enables organizers to manage reviews effectively.

## Features

### Core Functionality
- **REST APIs:** Facilitate functionalities for submitting reviews, rating various aspects of events, and managing reviews securely.
- **Rating Criteria:** Users can rate aspects such as Registration experience, Event experience, and Breakfast experience, along with providing an overall event rating.
- **Authentication:** Only authorized users can submit reviews, ensuring data integrity and security.
- **Likes and Reports:** Users can like reviews and report inappropriate content, with automatic flagging for reviews reported more than 5 times.
- **Organizer Responses:** Organizers have the ability to respond to reviews, fostering engagement and communication.
- **Data Retrieval:** APIs for retrieving ratings and reviews, with support for pagination for efficient handling of large datasets.
- **Password Security**: User passwords are securely stored in the database. Review-System employs salting and hashing techniques using the Crypto module to protect user data.
- **Public Access**: Anyone can view and Events and read Reviews without the need to authenticate, promoting an open and accessible environment.

## Technologies Used

Review-System utilizes the following technologies:
- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web application framework for Node.js, facilitating API development.
- **EJS (Embedded JavaScript):** Templating engine for server-side rendering.
- **MongoDB:** NoSQL database for storing review data.
- **JWT:** JSON Web Tokens for authentication and authorization.
- **Other Node.js packages:** Various npm packages for additional functionalities.

