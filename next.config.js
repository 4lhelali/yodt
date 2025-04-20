/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["image.alhaymex.com", "lh3.googleusercontent.com", "utfs.io"],
  },
};

export default config;
