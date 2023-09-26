// 0-promise.js

export default function getResponseFromAPI() {
  // Create and return a Promise
  return new Promise((resolve, reject) => {
    // Simulate an API call (you would replace this with your actual API call)
    setTimeout(() => {
      const response = "API response data"; // Replace with your actual data
      // Resolve the Promise with the response data
      resolve(response);
    }, 1000); // Simulating a delay
  });
}
