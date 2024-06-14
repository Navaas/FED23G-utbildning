/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.desenio.com",
      "plus.unsplash.com",
      "example.com",
      "media.istockphoto.com",
    ], // Lägg till din domän här, utan "https://"
  },
};

export default nextConfig;
