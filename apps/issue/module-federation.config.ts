import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'issue',
  exposes: {
    './Routes': 'apps/issue/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
