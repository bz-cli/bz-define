module.exports = {
	name: 'MSSharepoint',
	description: 'MS Sharepoint connector for Bizagi Studio.',
  url: 'https://products.office.com/en-us/sharepoint/collaboration',
  author: 'Flufflykins',
  version: '15.2.3',
	icon:
		'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',
	actions: [
		{
			name: 'get-tenant-root-site',
			description: 'Access the root SharePoint site within a tenant.',
			inputs: [],
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
		},
		{
			name: 'access-site-by-server-relative-url',
			description: 'Access the root SharePoint site within a tenant.',
			inputs: [
				{
					name: 'hostname',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'serverRelativePath',
					type: 'string',
					qty: 'single'
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
		},
		{
			name: 'get-site-lists',
			description: 'Return the lists from a given site.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'lists',
					type: 'string',
					qty: 'list'
				}
			]
		},
		{
			name: 'get-site-subsites',
			description: 'Return the subsites from a given site.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'sites',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'get-list-metadata',
			description: 'Returns the metadata for a list.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'etag',
					type: 'string',
					qty: 'single'
				},
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
					name: 'webUrl',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'displayName',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'contentTypesEnabled',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'hidden',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'template',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'get-list-items',
			description: 'Returns the list items from a list.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'items',
					type: 'object',
          qty: 'list',
          props: [
            {
              name: 'id',
              type: 'string',
              qty: 'single'
            }
          ]
				}
			]
		},
		{
			name: 'create-list',
			description: 'Create a new list in a site.',
			inputs: [
				{
					name: 'name',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'template',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'fields',
					type: 'string',
					qty: 'list'
				},
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'get-list-item',
			description: 'Returns the metadata for an item in a list.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'itemId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'createdDateTime',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'eTag',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'id',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'lastModifiedBy',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'lastModifiedDateTime',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'webUrl',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'contentType',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'id',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'ContentType',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'Modified',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'Created',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'AuthorLookupId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'EditorLookupId',
					type: 'string',
					qty: 'single'
				},
				{
					name: '_UIVersionString',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'Edit',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'LinkTitleNoMenu',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'LinkTitle',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'ItemChildCount',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'FolderChildCount',
					type: 'string',
					qty: 'single'
				},
				{
					name: '_ComplianceFlags',
					type: 'string',
					qty: 'single'
				},
				{
					name: '_ComplianceTag',
					type: 'string',
					qty: 'single'
				},
				{
					name: '_ComplianceTagWrittenTime',
					type: 'string',
					qty: 'single'
				},
				{
					name: '_ComplianceTagUserId',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'create-list-item',
			description: 'Create a new listItem in a list.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'itemId',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'update-list-item',
			description: 'Update the properties on a listItem.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'itemId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'response',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'delete-list-item',
			description: 'Removes an item from a list.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'listId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'itemId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'response',
					type: 'string',
					qty: 'single'
				}
			]
		},
		{
			name: 'restore-list-item-previous-version',
			description:
				'Restore a previous version of a ListItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the item.',
			inputs: [
				{
					name: 'siteId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'itemId',
					type: 'string',
					qty: 'single'
				},
				{
					name: 'versionId',
					type: 'string',
					qty: 'single'
				}
			],
			outputs: [
				{
					name: 'response',
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
