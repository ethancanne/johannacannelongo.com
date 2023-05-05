import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vsharp from 'vite-plugin-vsharp';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      vsharp({
        includePublic: [],
        excludePublic: [],
        exclude: [],
        '.jpg': {
          quality: 5,
        },
        '.jpeg': {
          quality: 5,
        },
        '.png': {
          quality: 5,
          palette: true,
        },
        '.webp': {
          lossless: true,
        },
      }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
