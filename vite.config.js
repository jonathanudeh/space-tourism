import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          fontFamily: {
            sans: ["Bellefair", "serif"],
          },
          extends: {
            height: {
              screen: "100dvh",
            },
          },
        },
      },
    }),
  ],
  // plugins: [
  //   react(),
  //   tailwindcss({
  //     config: {
  //       theme: {
  //         fontFamily: {
  //           sans: ["Bellefair", "serif"],
  //         },
  //         extend: {
  //           height: {
  //             screen: "100dvh",
  //           },
  //         },
  //       },
  //     },
  //   }),
  // ],
  server: { host: true },
});
