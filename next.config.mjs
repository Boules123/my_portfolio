/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a deployable site to ./out
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  // For GitHub Pages project sites, uncomment and set your repo name:
  // basePath: "/your-repo-name",
};

export default nextConfig;
