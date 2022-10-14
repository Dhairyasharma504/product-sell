import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';

import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FiUsers,
  FiMessageSquare,
  FiLogOut,
  FiArrowRight,
  FiArrowLeft,
} from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings3Line } from 'react-icons/ri';
// import {
//   BsCalendar4Event,
//   BsCreditCard2Front,
//   BsCurrencyDollar,
//   BsFileEarmarkText,
// } from 'react-icons/bs';

// import config from '../../utils/config';
const Container = styled.div`
  .pro-sidebar-inner {
    background: black !important;
  }

  .pro-menu-item:hover {
    border-right: solid 5px !important;
  }
`;
const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdOutlineDashboard />,
    path: '/dashboard',
  },
  {
    id: 2,
    title: 'Orders',
    icon: <FiUsers />,
    path: '/dashboard/orders',
  },
  {
    id: 3,
    title: 'Products',
    icon: <FiMessageSquare />,
    path: '/dashboard/products',
  },
  {
    id: 4,
    title: 'Settings',
    icon: <RiSettings3Line />,
    path: '/dashboard/settings',
  },
];

function Sidebar({ toggled, onToggle }) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  // console.log('x', router);
  const logout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <Container className="shadow-lg flex-1 h-screen">
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="xl"
        width={250}
        onToggle={onToggle}
      >
        <SidebarHeader>
          <Menu>
            <MenuItem>
              <div className="text-center h-16 py-1">
                <img
                  className={`${collapsed ? 'h-10 w-10' : 'h-14'}`}
                  alt="App Name"
                  src={`${
                    !collapsed
                      ? 'https://foodwix.zeiq.co/_next/image?url=%2Fimages%2Flogo.png&w=2048&q=75'
                      : '/images/Foodwix-icon.png'
                  }`}
                />
              </div>
            </MenuItem>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                active={router.pathname === item.path}
                icon={item.icon}
                onClick={() => router.push(item.path)}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="circle">
            <MenuItem
              onClick={() => setCollapsed(!collapsed)}
              icon={!collapsed ? <FiArrowLeft /> : <FiArrowRight />}
            >
              {collapsed ? 'Show' : 'Hide'}
            </MenuItem>
            <MenuItem icon={<FiLogOut />} onClick={() => logout()}>
              Log out
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </Container>
  );
}
export default Sidebar;
