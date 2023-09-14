import { spawnSync } from 'node:child_process'

import { getPlatformCommand } from './src/utils/index.js'

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
    return new Promise<void>((resolve, reject) => {
        const command = getPlatformCommand(platform)

        if (!command) return reject('Unsupported platform')

        const process = spawnSync(command, [path])
        const errorText = process.stderr.toString().trim()

        if (errorText) {
            reject(new Error(errorText))
        } else {
            resolve()
        }
    })
}

export default open
