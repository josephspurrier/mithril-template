declare let __API_SCHEME__: string;
declare let __API_HOST__: string;
declare let __API_PORT__: number;
declare let __PRODUCTION__: boolean;
declare let __VERSION__: string;
declare let __MOCK_SERVER__: boolean;
//declare let STORYBOOK_ENV: string | undefined;

export const Global = {
  //storybookMode: STORYBOOK_ENV ? STORYBOOK_ENV === "mithril" : false,
  apiScheme: __API_SCHEME__,
  apiHost: __API_HOST__,
  apiPort: __API_PORT__,
  version: __VERSION__,
  production: __PRODUCTION__,
  mockServer: __MOCK_SERVER__,
};

export const apiServer = (): string => {
  return `${Global.apiScheme}://${Global.apiHost}:${Global.apiPort}`;
};
