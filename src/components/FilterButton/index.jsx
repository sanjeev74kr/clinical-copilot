import './filterButton.css'

import { useState } from "react";

function FilterButton(props){
    const [clicked,setClicked]=useState(false);
    const {label}=props;

    const handleClick=()=>{
        setClicked(!clicked);
    }

    return(
        <button className={clicked?"filter-button-clicked":'filter-button'} onClick={handleClick}>
          {label}
        </button>
    )
}

export default FilterButton;