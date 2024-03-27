import React, { useContext, useState } from "react";
import "./Tabs.css";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";

import MedicalChartReview from "../../pages/medicalChartReview";
import { FindClinicalPolicy } from "../../pages/findClinicalPolicy";
import { appContext } from "../../context/AppContext";

const Tabs = () => {
  const { Tab_Status,dispatch } = useContext(appContext);
  const [activeTab, setActiveTab] = useState("tab1");
  console.log(Tab_Status,"commentbefore")
  const handle3tab=()=>{
   
   // dispatch({ type: "SET_TAB_STATUS", payload: true });
    
  }

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Step1: Review Medical Chart"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Step2: Find Clinical Policy"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
         <TabNavItem
          title="Step3: Decision Support"
          id="tab3"
          activeTab={activeTab}
          onClick={handle3tab}
          disabled={!Tab_Status}
          className={Tab_Status ? "disabled" : ""}
        />
        
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <MedicalChartReview />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <FindClinicalPolicy />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p> Decision Support</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
