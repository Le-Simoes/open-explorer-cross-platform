import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname } from 'node:path'

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
 *      await openExplorer(path)
 * } catch (error) {
 *      console.error(error)
 * }
 * ```
 * @example Using a specific platform
 * ```ts
 * try {
 *      const path = path.resolve("./")
 *      await openExplorer(path, "win32")
 * } catch (error) {
 *      console.error(error)
 * }
 * ```
 */
export default function openExplorer(path: string, platform?: Platform) {
    return new Promise<void>((resolve, reject) => {
        const command = getPlatformCommand(platform)

        if (!command) return reject('Unsupported platform')

        if (!existsSync(path)) return reject('Path does not exist')

        const directoryPath = dirname(path)

        const process = spawnSync(command, [directoryPath])

        const errorText = process.stderr.toString().trim()

        if (errorText) return reject(new Error(errorText))

        resolve()
    })
}
