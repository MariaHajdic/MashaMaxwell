import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import instagramLogo from '../assets/logos/logo_instagram.png'
import facebookLogo from '../assets/logos/logo_facebook.png'
import whatsappLogo from "../assets/logos/logo_whatsapp.png"
import burgerIcon from '../assets/logos/burger_menu.png'
import ContactForm from './ContactForm'
import '../styles/Sidebar.css'

const getNavigationLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'sidebar__navigation-link sidebar__navigation-link--active'
    : 'sidebar__navigation-link'

const Sidebar = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false)
  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(menuAnchorElement)

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorElement(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  }

  return (
    <header className="sidebar">
      {/* Desktop View Elements */}
      <div className="desktop">
        <div className="sidebar__logo">Masha<br />Maxwell</div>

        <nav className="sidebar__navigation">
          <NavLink to="/" className={getNavigationLinkClass}>Gallery</NavLink>
          <NavLink to="/about" className={getNavigationLinkClass}>About</NavLink>
          <NavLink to="/commission" className={getNavigationLinkClass}>Commission</NavLink>
        </nav>

        <button className="sidebar__contact-button"
          onClick={() => setIsContactFormVisible(true)}>Get in Touch</button>

        <div className="sidebar__footer">
          <div className="sidebar__socials">
            <a href="https://instagram.com/masha__maxwell" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
            <a href="https://www.facebook.com/groups/1307304403689344" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
            <a
              href="https://wa.me/447902580783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
          </div>

          <div className="sidebar__info">
            <div>© {new Date().getFullYear()} Masha Maxwell</div>
            <div>Powered by{' '}
              <a href="https://hajdicdesigns.co.uk" target="_blank" 
                rel="noopener noreferrer">Maria Hajdic</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View Elements */}
      <div className="mobile">
        <div className="mobile__header">
          <div className="sidebar__logo">Masha Maxwell</div>

          <div className="mobile__top-bar">
            <button className="sidebar__contact-button"
              onClick={() => setIsContactFormVisible(true)}>Get in Touch</button>

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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram logo" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook logo" />
              </a>
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
          <MenuItem onClick={handleMenuClose} disableGutters>
            <NavLink to="/" className="burger-menu-link">
              Gallery
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/about" className="burger-menu-link">
              About
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NavLink to="/commission" className="burger-menu-link">
              Commission
            </NavLink>
          </MenuItem>
        </Menu>
      </div>

      {isContactFormVisible && <ContactForm onClose={() => setIsContactFormVisible(false)} />}
    </header>
  )
}

export default Sidebar
