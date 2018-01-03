import { DEFAULT_USER, DEFAULT_VERSION, RUNTIME_VERSION, CUSTOM } from '../constants';

const makeDefinition = (definitionDTO) => ({
  globalguid: definitionDTO.id,
  name: definitionDTO.name,
  foldername: definitionDTO.name.toLowerCase(),
  description: definitionDTO.description,
  homeurl: definitionDTO.url,
  icon: definitionDTO.icon,
  version: definitionDTO.version || DEFAULT_VERSION,
  runtimeversion: RUNTIME_VERSION,
  author: definitionDTO.author || DEFAULT_USER,
  type: CUSTOM,
  systemdefinition: {
    properties: [],
    authentications: [
      {
        authenticationtype: CUSTOM,
        name: CUSTOM,
        properties: definitionDTO.auth
      }
    ]
  },
  actions: definitionDTO.actions
});

export const Definition = (definitionDTO) => makeDefinition(definitionDTO);
