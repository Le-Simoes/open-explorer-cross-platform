import { spawnSync } from 'node:child_process'

/**
 * Open a file or folder in the default file explorer in MacOS.
 * @param path The path to open.
 * @returns A promise that resolves when the file explorer has been opened.
 * @throws An error if the file explorer could not be opened.
 * @example
 * ```ts
 * try {
 *    const path = path.resolve("./")
 *    await open(path)
 * } catch (error) {
 *    console.error(error)
 * }
 * ```
 */
function open(path: string) {
    return new Promise<void>((resolve, reject) => {
        const process = spawnSync('open', [path || '/'])
        const errorText = process.stderr.toString().trim()

        if (errorText) {
            reject(new Error(errorText))
        } else {
            resolve()
        }
    })
}

export default {
    open,
}
