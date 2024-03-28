## Table of Contents
1. [Introduction](#introduction)
2. [Live Access(Deployed)](#live-access)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)

## Introduction
Review-System provides a seamless experience for users to submit reviews and ratings for events they've attended. It leverages the Model-View-Controller (MVC) architecture to ensure a well-structured and organized codebase, enhancing maintainability and scalability. It offers an extensive authentication system to ensure secure access and enables organizers to manage reviews effectively.

## Live-Access
    You can access the live version of this project [here](https://fitpage-review-system.onrender.com/).

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


## Installation
To install and run BlogNest locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/KamleshChandel04/Fitpage-Review-System.git
```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

```bash
cd Fitpage-Review-System
npm install
```
3. **Set Up Environment Variables**: Rename example.env to .env and fill in the required variables like database connection URI, session secret, etc.

```bash
CONNECTION_URL = Your MongoDb Connection String
PORT = 3000
SECRET_KEY = Your Secret Key
```
4. **Start the Application**: Run the following command to start the Review System application:

```bash
npm start or npm run dev
```
5. **Access**:Open your web browser and navigate to http://localhost:3000 to access Review System.

## Usage

### Getting Started

1. **Home Page:**
   - Navigate to the home page to view all available events.
   - Each event card displays the event title, date, time, and venue.

2. **View Event Details:**
   - Unauthenticated users can click on an event card to view its details on the event page.
   - Event details include the title, body, reviews, and ratings associated with the event.

3. **Authentication:**
   - Unauthenticated users can sign up for a new account or sign in if they already have one using the options provided in the navbar.

### Sign Up Page

1. **Create Account:**
   - Fill out the registration form with full name, email, password, and role (user or organizer).
   - If the email already exists, a warning message will be displayed.
   - Passwords are hashed using the crypto library with salt.
   - Successful account creation redirects to the sign-in page.

### Sign In Page

1. **Authenticate:**
   - Sign in with valid credentials.
   - Incorrect or non-existent email displays an error message.
   - Successful authentication redirects to the home page.

### Event Page

1. **Event Details:**
   - View details of the event including title, body, reviews, and ratings.
   - Organizers have the ability to delete the event they created.

2. **Reviews and Ratings:**
   - Authenticated users can write reviews and give ratings for events they registered for.
   - Unauthenticated users can only view reviews and ratings posted by others.

### Organizer Functionality

1. **Create Events:**
   - Organizers can add new events using the "Add event" option in the navbar.
   - Fill out the event details form on the add event page.
   - Newly added events will be displayed on the home page.

2. **Register for Events:**
   - Organizers can register for events they created or events posted by other organizers.
   - The "Register" button turns green upon successful registration and can be clicked again to deregister.

3. **View Event Details:**
   - Clicking on an event redirects to its specific event page.
   - Organizers can view event details, reviews, and ratings posted by users.

4. **Review Management:**
   - Organizers can like, report, and respond to reviews of their own events.

### User Functionality

1. **Registered Users:**
   - Register for events and view event details.
   - Like, report, and write reviews and ratings for events they registered for.

### Reviews and Ratings

1. **Flagging System:**
   - Reviews reported more than five times are automatically flagged.

### Logout

1. **Logout:**
   - Users can log out from the web application, which redirects them to the home page.

