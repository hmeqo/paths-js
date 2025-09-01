## Paths

Collection of path utilities.

## Installation

```bash
npm install @hmeqo/paths
```

## Usage

```js
import { createPaths, pathsEnsureEndSlash } from '@hmeqo/paths'

const paths = pathsEnsureEndSlash(
  createPaths('api', {
    users: createPaths('users', {
      detail: createPaths('{id}', {
        info: 'info'
      })
    })
  })
)

console.log(paths.users.index)
console.log(paths.users.detail.index)
console.log(paths.users.detail.info)
```
