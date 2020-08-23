import { setupWorker } from 'msw';
import { handlers } from './handler';
import { Global } from '@/helper/global';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

export const setup = (): void => {
  // Enable mock server if set.
  if (Global.mockServer) {
    // Start mocking when the application starts.
    worker.start();
  }
};
