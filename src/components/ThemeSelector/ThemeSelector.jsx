import lightIcon from './day.png'
import darkIcon from './night.png'

const ThemeSelector = ({ light }) => {
  return (
    <img
      src={light.lightTheme ? lightIcon : darkIcon}
      alt={light.lightTheme ? 'Claro' : 'Oscuro'}
      onClick={() => light.setLightTheme(!light.lightTheme)}
      style={{ width: '30px', margin: '0' }}
    />
  )
}

export default ThemeSelector
