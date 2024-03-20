import './requirements.css'

function Requirements(props) {
  const { requirementTable } = props;
  console.log("requirements table:", requirementTable);

  return (
    <div className="requirements-main-container">
      <h4 className='req-head'>Extracted Features from MPB</h4>
        <table className="req-table">
        {requirementTable.map((item, index) => {
            return( 
          <tr className="req-row">
            <td className='req-data'>{item.requirementName}</td>
            <td className='req-data'>{item.requirementStatus}</td>
          </tr>
          )
        })}
        </table>
      
    </div>
  );
}

export {Requirements}