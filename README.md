
# Project Name: **GText Movie Search Test Application**

## Overview

This is a movie search application that allows users to search for movies, view details, and save their favorite movies in a bookmark list. The application utilizes the OMDB API to fetch movie data and uses React for building the user interface.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Key Decisions](#key-decisions)
- [Folder Structure](#folder-structure)
- [License](#license)

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static typing and enhanced development experience.
- **Axios**: For making API requests to fetch movie data.
- **Tailwind CSS**: For utility-first CSS styling.
- **OMDB API**: For fetching movie data.
- **ESLint & Prettier**: For code quality and consistent formatting.
- **Vite**: For fast bundling and development.

## Features

- **Search Movies**: Users can search for movies by title.
- **Movie Details**: Users can view detailed information about a selected movie, including its title, plot, ratings, etc.
- **Bookmark Movies**: Users can bookmark their favorite movies for easy access later.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.
- **Accessibility**: ARIA tags and keyboard navigation support for better accessibility.

## Setup and Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org) installed. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your OMDB API key:

```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

You can obtain an API key from [OMDB API](http://www.omdbapi.com/).

### 4. Start the Application
After installing dependencies and setting up the environment variables, you can start the development server:

```bash
npm start
```

The application should now be running at `http://localhost:3000`.

## Running Tests

If you've written tests (e.g., using Jest or React Testing Library), you can run them with the following command:

```bash
npm test
```

## Key Decisions

### 1. **Why React and TypeScript?**
We chose React for its component-based architecture and ease of creating dynamic user interfaces. TypeScript was used to ensure type safety and enhance developer productivity by catching errors early and providing better autocompletion.

### 2. **Why Axios for API Requests?**
Axios was chosen over the native `fetch` API for its ease of use, built-in support for request cancellation, and more powerful handling of errors and response data.

### 3. **Why Tailwind CSS?**
Tailwind CSS was selected for its utility-first approach to styling. It allows for rapid development and custom designs without the need for a large number of custom CSS classes.

### 4. **Bookmarking Feature Implementation**
For the bookmark functionality, we used the local storage to persist the user's bookmarked movies. This allows users to keep their bookmarks even after refreshing the page.

### 5. **Responsive Design Considerations**
The app uses Tailwind CSS's responsive utilities to ensure that the application provides a good user experience across different screen sizes, from mobile phones to large desktop monitors.

### 6. **Accessibility**
We followed accessibility best practices by using semantic HTML, ARIA roles, and keyboard navigation. This ensures the application is usable by a wider audience, including people who rely on screen readers.

## Folder Structure

Here is the structure of the project:


movie-search-app/
├── public/                # Static assets (images, icons, etc.)
├── src/                   # Source code
│   ├── assets/            # Static assets (e.g., images, icons)
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (e.g., Home, MovieDetails)
│   ├── services/          # API calls and logic
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for the app
│   └── styles/            # Custom styles (if needed)
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation