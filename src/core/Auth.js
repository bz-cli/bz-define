const createAuth = (authDTOs) => ({
  name: authDTOs.name,
  datatype: '',
  required: authDTOs.required,
  passwordmode: authDTOs.hide,
  propertyvalues: []
});

export const Auth = (authDTOs) => authDTOs.map(createAuth);
