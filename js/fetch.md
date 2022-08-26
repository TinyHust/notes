## fetching JSON

```javascript
async function fetchMoviesJSON() {
  const response = await fetch("/movies");
  const movies = await response.json();
  return movies;
}
fetchMoviesJSON().then((movies) => {
  movies; // fetched movies
});
```

## handling fetch errors

```javascript
async function fetchMovies404() {
  const response = await fetch("/oops");

  response.ok; // => false
  response.status; // => 404
  const text = await response.text();
  return text;
}
fetchMovies404().then((text) => {
  text; // => 'Page not found'
});

async function fetchMoviesBadStatus() {
  const response = await fetch("/oops");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const movies = await response.json();
  return movies;
}
fetchMoviesBadStatus().catch((error) => {
  error.message; // 'An error has occurred: 404'
});
```

## canceling a fetch request

```javascript
let controller = null;
fetchMoviesButton.addEventListener("click", async () => {
  controller = new AbortController();
  try {
    const response = await fetch("/movies", {
      signal: controller.signal,
    });
  } catch (error) {
    console.log("Fetch error: ", error);
  }
  controller = null;
});
cancelFetchButton.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});
```

## parallel fetch requests

```javascript
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([fetch("/movies"), fetch("/categories")]);
  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();
  return [movies, categories];
}
fetchMoviesAndCategories()
  .then(([movies, categories]) => {
    movies; // fetched movies
    categories; // fetched categories
  })
  .catch((error) => {
    // /movies or /categories request failed
  });
```
