/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/emily-website",
    output:"export",
    reactStrictMode:true,
    images:{
        unoptimized: true,
    },
};

export default nextConfig;