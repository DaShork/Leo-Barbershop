import React from 'react';
import { Menu } from 'antd';
import { navItems } from '../../data/NavData';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Leo_Barber-Photoroom.png';
import './Header.css';

function Header() {

  // 👉 convert data -> antd items
  const menuItems = navItems.map((nav, index) => {
    
    // DROPDOWN
    if (nav.type === 'submenu') {
      return {
        key: `submenu-${index}`,
        label: nav.title,
        children: nav.items.map((item) => ({
          key: item.key,
          label: <Link to={item.link}>{item.label}</Link>,
        })),
      };
    }

    // LINK THƯỜNG
    return {
      key: `item-${index}`,
      label: <Link to={nav.link}>{nav.title}</Link>,
    };
  });

  return (
    <div className="header">
      
      <img src={Logo} alt="Leo Barbershop" className="logo" />

      {/* NAVBAR */}
      <Menu
        mode="horizontal"
        items={menuItems}
        className="nav-menu"
      />

      {/* CTA BUTTON */}

      <Link to="/booking" className="cta-btn">
        <span className = 'cta-btn-text'>Đặt lịch ngay!</span>
      </Link>

    </div>
  );
}

export default Header;