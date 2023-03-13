import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function LayoutDashboard({ children, onSearch }) {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const userData = {};
  return (
    <div className="flex min-h-screen ">
      <div className={showSideBar ? 'block' : 'hidden'}>
        <Sidebar toggled={false} data={userData} />
      </div>
      <div className={showMobileSideBar ? 'lg:hidden block h-full' : 'hidden'}>
        <Sidebar
          data={userData}
          toggled={showMobileSideBar}
          onToggle={() => setShowMobileSideBar(!showMobileSideBar)}
        />
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="pb-6">
          <Header
            data={userData}
            onSearch={onSearch}
            onMenuClick={() => {
              setShowSideBar(!showSideBar);
              setShowMobileSideBar(!showMobileSideBar);
            }}
          />
        </div>
        <div className="p-5 w-full overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
}
