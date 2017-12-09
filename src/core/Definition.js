const makeDefinition = (definitionDTO) => ({
	globalguid: definitionDTO.id,
	name: definitionDTO.name,
	foldername: definitionDTO.name.toLowerCase(),
	description: definitionDTO.description,
	homeurl: definitionDTO.url,
	icon: definitionDTO.icon,
	version: '1.0.0',
	runtimeversion: '1',
	author: 'Carlos Camilo Lobo Ulloque',
	type: 'custom',
	systemdefinition: {
		properties: [],
		authentications: [
			{
				authenticationtype: 'custom',
				name: 'custom',
				properties: definitionDTO.auth
			}
		]
	},
	actions: definitionDTO.actions
});

export const Definition = (definitionDTO) => makeDefinition(definitionDTO)
