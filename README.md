# bz-define
Builds the `def/connector.json` and `actions.js` file for your Bizagi Studio's custom connector.

## Why?
This package covers a required step for the "Bizagi Studio Connector Editor". It is meant to be used with the bz-zip library.

## Installation:
Install it as a global dependency:
~~~~
npm install -g bz-define
~~~~

or install it locally as:
~~~~
npm install --save bz-define
~~~~

## How to use:
This replaces the Bizagi connector editor, which means, you will need to suply the required information (authdata and actions) in a JSON file called `bz.config.js`. That file should be placed on the executing folder.

### Notes:
* The connector's name and the connector's auth properties' must be either TitleCased or camelCased.
* The connector's actions' name must be dash-cased.

### `bz.config.js` Example:
~~~~
module.exports = {
	name: 'Your connector name',
	description: 'What you connector is.',
	url: 'URL to the service',
  icon: 'Base 64 icon',
  author: 'John Doe',
  version: '15.3.4',
	actions: [
		{
			name: 'get-tenant-root-site',
			description: 'Access the root SharePoint site within a tenant.',
			inputs: [
				{
					name: 'ResponseProp',
					type: 'object',
					qty: 'list',
					props: [
						{
							name: 'SingleNesteProp',
							type: 'integer',
							qty: 'single'
						},
						{
							name: 'NestedStringList',
							type: 'string',
							qty: 'list'
						},
						{
							name: 'DoubleNestedObjectList',
							type: 'object',
							qty: 'list',
							props: [
								{
									name: 'DoubleNestedObjectPropList',
									type: 'string',
									qty: 'list'
								}
							]
						}
					]
				}
			],
			outputs: [
				{
					name: 'createdDateTime',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'description',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'id',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'lastModifiedDateTime',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'name',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'displayName',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'webUrl',
					type: 'string',
					qty: 'single'
				}
			]
		}
	],
	auth: [
		{
			name: 'client_id',
			required: true,
			hide: false
		},
		{
			name: 'client_secret',
			required: true,
			hide: true
		},
		{
			name: 'scope',
			required: true,
			hide: true
		},
		{
			name: 'code',
			required: true,
			hide: true
		},
		{
			name: 'redirect_url',
			required: true,
			hide: false
		},
		{
			name: 'access_token',
			required: true,
			hide: false
		},
		{
			name: 'refresh_token',
			required: true,
			hide: false
		}
	]
};
~~~~
To build the connector's definition type on your command line:
~~~~
bz-define
~~~~
A def directory will be created on the executing directory. It will contain an `action.js` and a `connector.json` file. These are required for the connector to be interpreted by Bizagi Studio.
