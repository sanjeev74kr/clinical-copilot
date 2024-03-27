import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab,disabled }) => {
  const handleClick = () => {
    if(!disabled)
    setActiveTab(id);
  };

  return (
    
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      
        <div className="tab-title">
          <div>{title}:</div>

          
        </div>
          {/*  <div class="arrow-block">
          <div class="arrow-right"></div>
        </div>*/}
    </li>
 
      
    
  );
};
export default TabNavItem;
