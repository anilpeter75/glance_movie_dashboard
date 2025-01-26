# React + Vite

- Project Structure
  * src: Contains the source code for the application.
  * components: Reusable UI components.
  * context: Context providers for state management.
  * pages: Different pages of the application (Home, MovieDetails, AllMovies).
  * styles: Global styles and CSS files.

- Key Dependencies
  * React: JavaScript library for building user interfaces.
  * Vite: Fast development server and build tool.
  * react-router-dom: Client-side routing library.
  * recharts: Charting library for creating responsive charts.
  * @testing-library/react: Testing utilities for React components.
  * vitest: Testing framework for running tests.

- Example Commands
  * pnpm install, pnpm run test, pnpm run dev

1. Setup and Configuration:
   Initialized the project using Vite for fast development and build times.
   Configured the project structure to separate concerns and improve maintainability.

2. Designed reusable components such as
   NavBar, Footer, Loading, Heading, and ProductCard.
   Used react-router-dom for client-side routing to navigate between different pages like Home, Movie Details, and All Movies.

3. State Management:
   Utilized React's Context API to manage global state, specifically for fetching and storing movie data.
   Created a FetchContext to handle data fetching and provide the data to various components.

4. Responsive Design:
   Implemented responsive layouts using CSS Grid and Flexbox.
   Used media queries to adjust the layout and styles based on the screen size.
   Ensured that components like the pie chart and movie list adapt to different screen sizes.

5. Lazy Loading:
   Used React's lazy and Suspense for code-splitting and lazy loading of components to improve performance.
   Displayed a loading spinner while the components are being loaded.
