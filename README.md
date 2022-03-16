# argument-builder
This package implements a class that creates command line parameters.

## Usage
```js
import { ArgumentBuilder } from '@akiojin/argument-builder'
```
```js
const builder = new ArgumentBuilder()
builder.Append('--verbose')
builder.Append('--file', 'log.txt')
builder.Append([ '--output', './out' ])
await execa.execa('foo', builder.Build())
```

## Reference
### class `ArgumentBuilder`
#### `Append(arg: string | string[], param: string?): void`
##### Description
Add an argument.

##### Arguments
|Name|Type|Description|
|:--|:--|:--|
|`arg`|`string` \| string[]|Commands to pass to command line|
|`param`|`string?`|Parameters to be added to the command|


#### `Count(): number`
##### Description
Returns the number of arguments added.

##### Return
|Type|Description|
|:--|:--|
|`number`|Number of arguments|


#### `Build(): string[]`
##### Description
Returns an array of arguments to be passed to the command line.

##### Return
|Type|Description|
|:--|:--|
|`string[]`|Argument array|


#### `ToString(): string`
##### Description
Return arguments as a single space-delimited string

##### Return
|Type|Description|
|:--|:--|
|`string`|Return arguments as a single space-delimited string|
