import BzXML from 'bz-xml';
import { uuid, toCamelCase, toBase64 } from '../utils';
import { CUSTOM, HTTP_OPERATION, INPUT, OUTPUT } from '../constants';

const createAction = (actionDTO) => ({
  guid: uuid(),
  name: actionDTO.name,
  displayName: toCamelCase(actionDTO.name.replace('-', ' ')),
  description: actionDTO.description,
  actiontype: CUSTOM,
  contenttype: '',
  resturl: '',
  httpoperation: HTTP_OPERATION,
  useauthentication: false,
  xsdinput: toBase64(BzXML(actionDTO.inputs, INPUT)),
  xsdoutput: toBase64(BzXML(actionDTO.outputs, OUTPUT))
});

export const Action = (actionDTOs) => actionDTOs.map(createAction);
