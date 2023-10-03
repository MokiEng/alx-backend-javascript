// Create a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// Function to query the API
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    const queryCount = weakMap.get(endpoint) + 1;

    // Update the query count for the endpoint
    weakMap.set(endpoint, queryCount);

    // Check if the query count is >= 5
    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the WeakMap, add it with a count of 1
    weakMap.set(endpoint, 1);
  }
}
