import './dropDownBox.css'
function DropDownBox(props) {
    
    const { label, cssName, dropDownBoxData,onSelect } = props;
    const handleSelectionChange=(e)=>{
     const  value=e.target.value;
     onSelect(value);
    }

    return (
        <div className={cssName}>
            <label>
                {label}
                <select className='select-options' onChange={handleSelectionChange}>
                    {dropDownBoxData?.map((item, index) => (
                        <option  key={`select${index}`} value={item[index]} >{item[index]}</option>

                    ))
}
                </select>
            </label>
        </div>
    )
}

export default DropDownBox;