function isTokenExpired(token) {
  if (!token) throw new Error("You do not have a token.");
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  } catch (e) {
    console.error(e.message);
  }
}

export { isTokenExpired };
