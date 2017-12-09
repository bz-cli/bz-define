# Bz-Def
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
This replaces the connector editor, that means you will need to suply the required information (authdata and actions) in a JSON file called `bzconfig.json`. That file should be placed on the executing folder.

### Notes:
* The connector's name and the connector's auth properties' must be either TitleCased or camelCased.
* The connector's actions' name must be dash-cased.

### `bzconfig.json` structure:
~~~~
{
    "name": "connector name",
    "description": "connector's description",
    "url": "service website",
    "icon": "base64 image",
    "actions":  [
        {
            "name": "dash-cashed-action-name",
            "description": "your connector's action's description.",
            "inputs": [
                {
                    "name": "whatever you input",
                    "type": "string / decimal / integer / boolean / date / time / byte",
                    "qty": "single / list"
                }
            ],
            "outputs": [
                {
                    "name": "whatever you return",
                    "type": "string / decimal / integer / boolean / date / time / byte",
                    "qty": "single / list"
                }
            ]
        }
    ],
    "auth": [
        {
            "name": "some auth property like email, password, accessToken, etc.",
            "required": true / false,
            "hide": true / false
        }
    ]
}
~~~~
### Example:
~~~~
{
    "name": "Imgur",
    "description": "Imgur connector for bizagi",
    "url": "https://www.imgur.com",
    "icon": "iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAADbklEQVR4Xu3cv2sTYRgH8O97uRKDiBBUEEFsRQ3ZhCJItN06iVC6FRy6RMdACo3gKBhxKA6WDh0yZdFF/BOSorSjFDT4GwQlQimIsaa5V96kia2Jvfchl+QhPrc00O9d7vnc8z4Nd6FKa60hm5WAEiwrp3poH9ba2hry+bz93kOenJ6exuTkZKvKfVi5XA5zc3NDTmBf3uLiIlKplGDZkAmWjdJuRrAEiyBAiEpnCRZBgBCVzhIsggAhyrazQnCw8OQMjpzUcODCQw3fvwDZmQ+owSOUGFyUJdaN7AnErxyG4zhtlXqeh9cvfiA3/zU4BcsjscO69egURi8e8j39jy9/YunmZ99ckAFWWEqFcK84BqX8l5lZnLcT76B1LUiPA4/FBksByK6OAcq8sty0RsaAWca7jbHBMoXcXz0NqBH7mnQVC4lP9vkuk6ywsqujUKp9qP+rRq09ZBLvuySw350Z1lnqKkQm8da+2i6TbLAaM+scYDHcWzVrhUzizf84sxQuXTuKmcwxwLEY2R7w7OEmio83gT5xsemsZrc8eH4eNa964Owys8p1wpi//KrLhUXbnR2WOf1s4QKU+wvQHYa98qB3RpC5WqJVGkCaJZYL4M7TGCLHq20lVr65uHu9hJ0+Lb29J8ASy5xg4yOE1xhHuy9R/7zqwCzDQWxssQaB4feeguUntOf3rLGUUiiXy4hGo9ja2qr/HORXMVhimftYtVrnuwkGy3VdmPta/d5YYjUhTGf9vTU7q9ONwV7jscNKJpNYXl5GJ6gmhgFLp9MwJ9/PjR2WWX42XWO6LxQK9dOqfnFYfTFEsAjXn/LX7qClSnhL6yi7zhIs62sH0uco6SzC938FS7Ds16HMLHsrmVkEK8ESLIoAISszS7AIAoSodJZgEQQIUekswSIIEKLSWYJFECBEpbMEiyBAiEpnCRZBgBCVzhIsggAhah6e2txbNx1o8zCW8Na+UXaPwgTL95r9CcgTaQLW+Pg41tfXffeYmJhAoVDwzQUZYLcMTXEbGxuIx+Md6zSzqlQqIRaLBelgdSyWWM0zr1QqCIfDrUK2t7cRiUSsCutFiDVWLwru5piCRdATLMEiCBCi0lmCRRAgRKWzBIsgQIhKZwWFVSwWsbKyQjjccEdnZ2cxNTXVKlL+TynhegsWAes3DU7TTVD6qBQAAAAASUVORK5CYII=",
    "actions":  [
        {
            "name": "from-url",
            "description": "Uploads a image to Imgur given a single url",
            "inputs": [
                {
                    "name": "imageUrl",
                    "type": "string",
                    "qty": "single"
                }
            ],

            "outputs": [
                {
                    "name": "imageLink",
                    "type": "string",
                    "qty": "single"
                }                
            ]
        },
        {
            "name": "from-file",
            "description": "Uploads image to imgur given a file",
            "inputs": [
                {
                    "name": "imageFileContents",
                    "type": "byte",
                    "qty": "list"
                }
            ],
            "outputs": [
                {
                    "name": "imageLink",
                    "type": "string",
                    "qty": "single"
                }               
            ]
        }
    ],
    "auth": [
        {
            "name": "email",
            "required": true,
            "hide": false
        },
        {
            "name": "password",
            "required": true,
            "hide": true
        },
        {
            "name": "clientId",
            "required": true,
            "hide": true
        }
    ]
}
~~~~

To build the connector's definition you only need to type on your terminal:
~~~~
bz-define
~~~~
A def directory will be created on the executing directory. It will contain an `action.js` and a `connector.json` file. These are required for the connector to be interpreted by Bizagi Studio.
