# open-explorer-cross-platform

A cross platform NodeJs module to open a folder in the native os file system.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/181c0ac6d90f4b219d3f84636462f851)](https://www.codacy.com/gh/leandrosimoes/open-explorer-cross-platform/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandrosimoes/open-explorer-cross-platform&amp;utm_campaign=Badge_Grade)
[![Node.js CI](https://github.com/leandrosimoes/open-explorer-cross-platform/actions/workflows/nodeci.yml/badge.svg)](https://github.com/leandrosimoes/open-explorer-cross-platform/actions/workflows/nodeci.yml)

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
import { openExplorer } from 'open-explorer-cross-platform';

await openExplorer('path/to/folder');
```

## License

[MIT](https://choosealicense.com/licenses/mit/)