const { InjectManifest } = require("workbox-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new InjectManifest({
          swSrc: "./service-worker.js",
          swDest: "../public/sw.js",
          modifyURLPrefix: { "static/": "/_next/static/" },
          exclude: [/^(build-manifest\.json|react-loadable-manifest\.json)$/],
        })
      );
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
