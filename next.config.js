/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com", "pbxt.replicate.delivery"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/varun-balani/product-shoots",
        permanent: false,
      },
    ];
  },
};
