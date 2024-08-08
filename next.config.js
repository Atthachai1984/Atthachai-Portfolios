/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    },
    trailingSlash: true, // Resolve uri issue with routing to '/path' when server is expecting '/path.html'
    }
    
module.exports = nextConfig;