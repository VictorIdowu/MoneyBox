# MovieBox Web Application

## Table of Contents

- [Introduction](#introduction)
- Features
- Demo
- Getting Started
  - Prerequisites
  - Installation
- Usage
  - Viewing Top 10 Movies
  - Searching for Movies
  - Viewing Movie Details
- API Usage

## Introduction

The MovieBox web application is a user-friendly platform that allows movie enthusiasts to discover the top 10 movies, search for movies by name, and access detailed information about their favorite films. The application leverages the TMDB API to provide up-to-date movie data, including titles, ratings, release dates, and more.
(HNGx Stage-2 Task)

## Features

- View the top 10 trending movies.
- Search for movies by title.
- Access comprehensive movie details, including title, release date, runtime, and overview.
- A user-friendly and responsive interface for seamless navigation.

## Demo

You can access the live demo of the MovieFinder application <a href="https://www.movieBox.vercel.app" >here.</a>

## Getting Started

### Prerequisites

Before running the MovieBox web application locally, ensure you have the following prerequisites installed:

- Node.js and npm: You can download them from <a href="https://nodejs.org/" >nodejs.org.</a>

### Installation

Follow these steps to set up and run the application:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/VictorIdowu/movieBox.git
   ```

2. Navigate to the project directory:

   ```bash
   cd moviefinder
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the application at `http://localhost:3000`.

## Usage

### Viewing Top 10 Movies

On the home page, you'll find the top 10 trending movies displayed. Click on any movie card to view more details.

### Searching for Movies

To search for a specific movie, enter the movie's title in the search bar at the top of the page. The application will display matching results.

### Viewing Movie Details

Click on a movie card to access detailed information about the selected movie. This includes the movie's title, release date, runtime, and overview.

## API Usage

This application consumes data from the TMDB (The Movie Database) API. To use the TMDB API, you'll need to obtain an API key by signing up at https://www.themoviedb.org/
