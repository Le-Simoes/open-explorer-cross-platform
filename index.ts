import os from 'node:os'

import { windows, linux, macos } from './src/services/index.js'

export type Platform = 'linux' | 'win32' | 'darwin'

/**
 * Open a file or folder in the default file explorer.
 * @param path The path to open.
 * @param platform Forces to open in a specific platform. (Optional)
 * @returns A promise that resolves when the file explorer has been opened.
 * @throws An error if the file explorer could not be opened.
 * @example
 * ```ts
 * try {
 *      const path = path.resolve("./")
 *      await open(path)
 * } catch (error) {
 *      console.error(error)
 * }
 * ```
 * @example Using a specific platform
 * ```ts
 * try {
 *      const path = path.resolve("./")
 *      await open(path, "win32")
 * } catch (error) {
 *      console.error(error)
 * }
 * ```
 */
export function open(path: string, platform?: Platform) {
    switch (platform || os.platform()) {
        case 'linux':
            return linux.open(path)
        case 'win32':
            return windows.open(path)
        case 'darwin':
            return macos.open(path)
        default:
            throw new Error('Unsupported platform')
    }
}

export default open
