import { createWriteStream } from 'fs';

import { getActions } from '../utils';

export const exporter = {
  exportConnectorDefinition: (def) => {
    const stream = createWriteStream(`def/connector.json`);
    stream.write(JSON.stringify(def, null, '\t'));
    stream.end();
  },

  exportConnectorActions(actions) {
    const stream = createWriteStream(`def/actions.js`);
    stream.write(`module.exports = {\n${this._serializeActions(actions)}\n};`);
    stream.end();
  },

  /**
   * Returns the contents of the 'actions.js' file of the connector. It contains the implemented actions in a module.exports declaration.
   * @param connector a connector configuration file.
   */
  _serializeActions: (actions) => {
    const serializedContent = actions
      .map((action) => ({ name: `'${action.name}'`, description: `'${action.description}'` }))
      .map((action) => `\t${action.name}: ${action.description},\n`)
      .reduce((sum, action) => sum + action, '');

    return serializedContent.substring(0, serializedContent.length - 2);
  }
}
