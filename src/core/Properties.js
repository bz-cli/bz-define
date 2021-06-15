const createProperties = (propertiesDTOs) => ({
  name: propertiesDTOs.name,
  datatype: '',
  required: propertiesDTOs.required,
  propertyvalues: []
});

export const Properties = (propertiesDTOs) => propertiesDTOs.map(createProperties);
