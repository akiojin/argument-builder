# command-builder
This package implements a class that creates command line parameters.

## Usage
```js
import { CommandBuilder } from '@akiojin/command-builder'
```
```js
const builder = new CommandBuilder()
builder.AddCommand('--verbose')
builder.AddCommand('--file', 'log.txt')
builder.AddCommand([ '--output', './out' ])
await execa.execa('foo', builder.Build())
```

## Reference
### class `CommandBuilder`
#### `AddCommand(command: string | string[], param: string?): void`
##### Description
Add a command.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|`command`|`string` \| string[]|Commands to pass to the Unity command line|
|`param`|`string?`|Parameters to be added to the command|


#### `Build(): string[]`
##### Description
Returns an array of arguments to be passed to the command line.

##### Return
|Type|Description|
|:--|:--|
|`string[]`|command array|
