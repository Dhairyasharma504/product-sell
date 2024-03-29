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
import { FiLogOut, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';

const Container = styled.div`
  .pro-sidebar .pro-menu .pro-menu-item.active {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #ffffff !important;
    background-color: #f8b739;
    .pro-item-content {
      color: #ffffff !important;
    }
    .pro-icon-wrapper {
      background: #ffffff !important;
    }
  }
  .pro-sidebar .pro-sidebar-content .pro-menu .pro-menu-item,
  .pro-sidebar .pro-sidebar-footer .pro-menu .pro-menu-item {
    .pro-icon-wrapper {
      color: #f8b739 !important;
    }
    .pro-item-content {
      color: #ffffff !important;
    }
    :hover {
      color: #f8b739 !important ;
      border-right: 5px solid #f8b739;
      .pro-icon-wrapper {
        color: #f8b739 !important;
        background: #ffffff !important;
      }
    }
  }

  .pro-sidebar-header nav {
    padding-top: 2px !important;
    padding-bottom: 2px !important;
    .pro-inner-item {
      padding: 8px 5px 8px !important;
    }
  }
  .pro-sidebar-content {
    flex-grow: 0 !important;
  }
  .pro-sidebar-layout {
    background-color: black !important;
  }
`;
const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdOutlineDashboard />,
    path: '/dashboard',
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
    <Container className="flex-1 min-h-screen h-full">
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
                  className={`${collapsed ? 'h-10 w-10' : 'h-14 ml-6'}`}
                  alt="App Name"
                  src={`${
                    !collapsed
                      ? 'https://cdn-icons-png.flaticon.com/512/4149/4149727.png'
                      : 'https://cdn-icons-png.flaticon.com/512/4149/4149727.png'
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
