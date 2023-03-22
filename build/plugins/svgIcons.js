import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSrcPath } from '../utils'

const srcPath = getSrcPath('examples')

const customIconPath = `${srcPath}/assets/svg`

export default createSvgIconsPlugin({
  iconDirs: [customIconPath],
  symbolId: 'icon-[dir]-[name]',
})
