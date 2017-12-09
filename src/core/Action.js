import BzXML from 'bz-xml';
import { uuid, toCamelCase, toBase64 } from '../utils';

const createAction = (actionDTO) => ({
  guid: uuid(),
  name: actionDTO.name,
  displayName: toCamelCase(actionDTO.name.replace('-', ' ')),
  description: actionDTO.description,
  actiontype: 'custom',
  contenttype: '',
  resturl: '',
  httpoperation: 'notdefined',
  useauthentication: false,
  xsdinput: toBase64(BzXML(actionDTO.inputs, 'input')),
  xsdoutput: toBase64(BzXML(actionDTO.outputs, 'output'))
});

export const Action = (actionDTOs) => actionDTOs.map(createAction);
