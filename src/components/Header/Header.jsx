import ThemeSelector from '../ThemeSelector/ThemeSelector'

const Header = ({ light }) => {
  return (
    <header>
      <h1>Cuentos entre la niebla en familia</h1>

      <ThemeSelector light={light} />
    </header>
  )
}

export default Header
