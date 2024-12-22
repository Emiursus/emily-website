/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/emily-website",
    output:"export",
    reactStrictMode:true,
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
        ],
    },
};

export default nextConfig;