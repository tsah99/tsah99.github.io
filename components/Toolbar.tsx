import { useState } from 'react';
import { tabs } from '../constants';

function Toolbar({ onSelectTab }: { onSelectTab: (tabId: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelectTab = (tabId: string) => {
      onSelectTab(tabId); // Call the original onSelectTab function
      setIsOpen(false); // Close the dropdown if open
      window.location.hash = tabId; // Update the URL hash
    };
  
    return (
      <div className="flex flex-col">
        {/* Custom Dropdown for smaller screens */}
        <div className="md:hidden relative flex justify-center py-2">
          <button onClick={() => setIsOpen(!isOpen)} className="bg-white border border-gray-300 rounded-md shadow-sm p-2 hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            Menu
          </button>
          {isOpen && (
            <div className="absolute w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ top: '100%' }}>
              {Object.keys(tabs).map(tabId => (
                <button key={tabId} onClick={() => handleSelectTab(tabId)} className="text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {tabId}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Button group for larger screens */}
        <div className="hidden md:flex flex-col space-y-2">
          {Object.entries(tabs).map(([tabId, tabComponent]) => (
            <button key={tabId} className="hover:underline font-medium" onClick={() => handleSelectTab(tabId)}>{tabId}</button>
          ))}
        </div>
      </div>
    );
  }

  export default Toolbar;