import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import instagramLogo from '../assets/logos/logo_instagram.png'
import facebookLogo from '../assets/logos/logo_facebook.png'
import whatsappLogo from "../assets/logos/logo_whatsapp.png"
import burgerIcon from '../assets/logos/burger_menu.png'
import '../styles/Sidebar.css'

const getNavigationLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'sidebar__navigation-link sidebar__navigation-link--active'
    : 'sidebar__navigation-link'

const navLinks = [
  { to: '/', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/commission', label: 'Commission' },
]

const socialLinks = [
  { href: 'https://instagram.com/masha__maxwell', img: instagramLogo, alt: 'Instagram logo' },
  { href: 'https://www.facebook.com/profile.php?id=61578993736297', img: facebookLogo, alt: 'Facebook logo' },
  { href: 'https://wa.me/447902580783', img: whatsappLogo, alt: 'WhatsApp' },
]

const Sidebar = () => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(menuAnchorElement)
  const navigate = useNavigate()

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorElement(event.currentTarget)
  }

  const handleMenuClose = () => setMenuAnchorElement(null)

  const handleGetInTouchClick = () => {
    navigate('/commission#contact-section')
  }

  return (
    <header className="sidebar">
      {/* Desktop */}
      <div className="desktop">
        <div className="sidebar__logo">Masha<br />Maxwell</div>

        <nav className="sidebar__navigation">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} className={getNavigationLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="sidebar__contact-button"
          onClick={handleGetInTouchClick}
        >
          Get in Touch
        </button>

        <div className="sidebar__footer">
          <div className="sidebar__socials">
            {socialLinks.map(({ href, img, alt }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={alt} />
              </a>
            ))}
          </div>

          <div className="sidebar__info">
            <div>© {new Date().getFullYear()} Masha Maxwell</div>
            <div>
              Powered by{' '}
              <a href="https://hajdicdesigns.co.uk" target="_blank" rel="noopener noreferrer">
                Maria Hajdic
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile">
        <div className="mobile__header">
          <div className="sidebar__logo">Masha Maxwell</div>

          <div className="mobile__top-bar">
            {/* Both mobile and desktop buttons now use the same handler */}
            <button
              className="sidebar__contact-button"
              onClick={handleGetInTouchClick}
            >
              Get in Touch
            </button>

            <Button
              aria-label="Open Menu"
              aria-controls={isMenuOpen ? 'burger-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
              onClick={handleMenuButtonClick}
            >
              <img src={burgerIcon} alt="Menu" style={{ width: '1.5rem', height: '1.5rem' }} />
            </Button>

            <div className="sidebar__socials-mobile">
              {socialLinks.slice(0, 2).map(({ href, img, alt }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <img src={img} alt={alt} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Menu
          id="burger-menu"
          anchorEl={menuAnchorElement}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {navLinks.map(link => (
            <MenuItem key={link.to} onClick={handleMenuClose}>
              <NavLink to={link.to} className="burger-menu-link">
                {link.label}
              </NavLink>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </header>
  )
}

export default Sidebar
