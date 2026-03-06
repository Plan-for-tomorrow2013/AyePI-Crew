import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,                 // use describe/it/expect globally
    environment: 'jsdom',// browser-like environment for React
    setupFiles: [
      './client/setupTests.ts', // import jest-dom matchers
     './server/testSetup.ts'
    ],
    include: ['client/**/*.test.{ts,tsx}', 'server/**/*.test.ts'], // test files
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    isolate: true,
  },
});

