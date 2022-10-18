import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function LayoutDashboard({ children }) {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const userData = {};
  return (
    <div className="flex min-h-screen ">
      <div className={showSideBar ? 'xl:block block' : 'hidden'}>
        <Sidebar toggled={false} data={userData} />
      </div>
      <div className={showMobileSideBar ? 'xl:hidden block h-full' : 'hidden'}>
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
