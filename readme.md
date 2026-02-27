# Aves Explorer This is a simple React app that shows bird pictures from an API. 
The app loads and dispatches fetchBirds() from a Redux Toolkit slice.

fetchBirds calls the Aves API (https://aves.ninjas.cl/api/birds).

The list of birds is stored in Redux state.

BirdList maps through the list and renders a BirdCard for each bird.