import os from 'node:os'

export function getPlatformCommand(platform: NodeJS.Platform | undefined) {
    switch (platform || os.platform()) {
        case 'linux':
            return 'xdg-open'
        case 'win32':
            return 'explorer'
        case 'darwin':
            return 'open'
        default:
            return null
    }
}
