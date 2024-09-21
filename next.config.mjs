/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
          },
        ],
      },
  };
  
  export default nextConfig;  // Use ES module syntax for .mjs files
  