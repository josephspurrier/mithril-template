/* eslint-disable @typescript-eslint/no-var-requires */
import '@storybook/addon-console';
import '~/node_modules/@fortawesome/fontawesome-free/js/all.js';
import '@/global.scss';

export const parameters = {
  controls: { expanded: false, hideNoControlsWarning: true },
};

// Storybook executes this module in both bootstap phase (Node)
// and a story's runtime (browser). However, cannot call `setupWorker`
// in Node environment, so need to check if we're in a browser.
if (typeof global.process === 'undefined') {
  const { worker } = require('../src/helper/mock/browser');

  // Start the mocking when each story is loaded.
  // Repetitive calls to the `.start()` method do not register a new worker,
  // but check whether there's an existing once, reusing it, if so.
  worker.start({ onUnhandledRequest: 'warn' }).catch((err) => {
    console.log('Error starting the service worker:', err);
  });
}
