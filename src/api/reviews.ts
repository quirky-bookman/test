import http from "./http";

// Get all user's library folders
export function getReviews() {
  return http.get("/reviews");
}
