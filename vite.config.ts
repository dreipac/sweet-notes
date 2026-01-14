import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  // Für GitHub Pages: Ersetze 'DEIN-REPO-NAME' mit deinem Repository-Namen
  // z.B. base: '/love-app/' wenn dein Repo 'love-app' heisst
  // Für Lovable/Vercel/Netlify: lass es auf '/'
  base: "/sweet-notes/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
VitePWA({
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "pwa-192x192.png", "pwa-512x512.png"],
  manifest: {
    name: "Sweet Notes",
    short_name: "SweetNotes",
    start_url: "/sweet-notes/",
    scope: "/sweet-notes/",
    display: "standalone",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      { src: "/sweet-notes/pwa-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/sweet-notes/pwa-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
}),

  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
