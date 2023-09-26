export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = "API response data"; // Replace with your actual data
      resolve(response);
    }, 1000); // Simulating a delay
  });
}
