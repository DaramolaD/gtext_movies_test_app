
# Project Name: **GText Movie Search Test Application**

## Overview

This is a movie search application that allows users to search for movies, view details, and save their favorite movies in a bookmark list. The application utilizes the OMDB API to fetch movie data and uses React, Tailwindcss for building the user interface.

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
- **Vite**: For fast bundling and development.
- **Atomic Design**: A methodology used for building UI components. The components are organized in a hierarchical structure for reusability and scalability. The app is divided into:
    - Atoms: Basic building blocks (e.g., buttons, inputs).
    - Molecules: Combinations of atoms that form functional UI elements (e.g., movie cards, search bar).
    - Organisms: Complex UI components made up of molecules (e.g., movie section, header section).

## Features

- **Search Movies**: Users can search for movies by title.
- **Movie Details**: Users can view detailed information about a selected movie, including its title, plot, ratings, etc.
- **Bookmark Movies**: Users can bookmark their favorite movies for easy access later.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices. It also features a user-friendly UI/UX.

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

Note: I have included my OMDb API key temporarily for your testing convenience. However, please ensure you obtain your own API key from the OMDb platform, as this one will be deactivated soon. OMDb offers free access for initial use.

You can obtain an API key from [OMDB API](http://www.omdbapi.com/).

### 4. Start the Application
After installing dependencies and setting up the environment variables, you can start the development server:

```bash
npm start
```

The application should now be running at `http://localhost:5173/`.