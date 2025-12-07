import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ui from "@nuxt/ui/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        button: {
          slots: {
            base: ["font-medium rounded-lg cursor-pointer"],
          },
          variants: {
            size: {
              xl: {
                base: "py-3 px-5 text-sm",
                leadingIcon: "size-6",
                leadingAvatarSize: "xs",
                trailingIcon: "size-6",
              },
            },
          },
          compoundVariants: [
            {
              color: "secondary",
              variant: "solid",
              class:
                "relative bg-[linear-gradient(90deg,#E6F7F5_0%,#F8FCFC_100%)] text-[#394155] before-border-gradient-1 hover:before:opacity-0 hover:bg-[linear-gradient(90deg,#36A8A0_0%,#36A8A0_100%)] hover:text-white",
            },
            {
              color: "primary",
              variant: "solid",
              class:
                "relative bg-[linear-gradient(90.66deg,#3CB9A0_0.57%,#1786AC_99.43%)] text-white hover:bg-[linear-gradient(90deg,#36A8A0_0%,#36A8A0_100%)] hover:text-white",
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
