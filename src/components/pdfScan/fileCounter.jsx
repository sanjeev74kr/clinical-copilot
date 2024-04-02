import * as React from "react";
import { useEffect } from "react";
import "./pdfScan.css";

function FileCounter({onLoadComplete}) {
  const [count, setCount] = React.useState(1);

  const FILE_COUNT = 5;
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (count < FILE_COUNT) {
        setCount(count + 1);
      } else{
        onLoadComplete()
        clearInterval(interval);
        setCount(1)
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div>
      Page {count} out of {FILE_COUNT} processing.
    </div>
  );
}

export default FileCounter;
