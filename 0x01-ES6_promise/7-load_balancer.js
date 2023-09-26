// 7-load_balancer.js
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to resolve with the first resolved promise
  return Promise.race([chinaDownload, USDownload]);
}
