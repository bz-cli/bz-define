#!/usr/bin/env node
import { resolve } from 'path';
import { sync } from 'mkpath';

import { Action, Auth, Definition, exporter } from './core';
import { uuid } from './utils';

try {
  const config = require(resolve('./bz.config.js'));

  const definition = Definition({
		id: uuid(),
		...config,
		auth: Auth(config.auth),
		actions: Action(config.actions)
  });

  sync(`def`, parseInt(`0777`, 8));
  exporter.exportConnectorDefinition(definition);
  exporter.exportConnectorActions(config.actions);

  console.info('Connector definition built.');
} catch (err) {
  console.error('An error ocurred while building your connector definition', err.message, err.stack);
}
