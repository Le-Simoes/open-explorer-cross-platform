# open-explorer-cross-platform

A cross platform NodeJs module to open a folder in the native os file system.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/63a5c0855d6d4ee087416016b8c718ae)](https://app.codacy.com/gh/leandrosimoes/open-explorer-cross-platform/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## Installation

```bash
npm install open-explorer-cross-platform
```

or

```bash
yarn add open-explorer-cross-platform
```

## Usage

```typescript
import openExplorer from 'open-explorer-cross-platform';

await openExplorer('path/to/folder');
```

Or if you want for some reason to force a specific platform:

```typescript
import openExplorer, { Platform } from 'open-explorer-cross-platform';

const platform: Platform = 'linux'; // or 'win32' or 'darwin'

await openExplorer('path/to/folder', platform);
```

## Typings exported

```typescript
export type Platform = 'linux' | 'win32' | 'darwin';
```

## License

[MIT](https://choosealicense.com/licenses/mit/)