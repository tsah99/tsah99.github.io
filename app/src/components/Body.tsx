import React, { useState, useEffect } from 'react';
import { tabs } from '../constants';
import Toolbar from './Toolbar';
import ContentContainer from './ContentContainer';

function Body() {
  const [selectedTab, setSelectedTab] = useState('About');

  // useEffect to synchronize selectedTab with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && tabs[hash]) {
        setSelectedTab(hash);
        return;
      }
      if (!tabs[hash]) {
        setSelectedTab('About');
      }
    };

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Call handleHashChange initially in case there's already a hash in the URL
    handleHashChange();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="flex flex-col md:flex-row md:space-x-8 w-full px-4 md:px-0">
      <Toolbar onSelectTab={setSelectedTab} />
      <ContentContainer selectedTab={selectedTab} />
    </div>
  );
}

export default Body;
