import { useEffect, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import './userFeedback.css'

function UserFeedback(props) {
  const [acceptClick, setAcceptClick] = useState(false);
  const [rejectClick, setRejectClick] = useState(false);
  const { feedback } = props;

  useEffect(() => {
    if (feedback.User_Feedback === "0") {
      setRejectClick(true);
    } else if (feedback.User_Feedback === "1") {
      setAcceptClick(true);
    } else {
      setRejectClick(false);
      setAcceptClick(false);
    }
  },[]);
  const toggleReject = () => {
    setRejectClick(!rejectClick);
    setAcceptClick(rejectClick);
  };

  const toggleAccept = () => {
    setAcceptClick(!acceptClick);
    setRejectClick(acceptClick);
  };
  return (
    <div className="feedback-container">
      <span
        className={acceptClick ? "check" : "check-disabled"}
        onClick={toggleAccept}
      >
        <FaCheck />
      </span>
      <span
        className={rejectClick ? "cross" : "cross-disabled"}
        onClick={toggleReject}
      >
        <FaTimes />
      </span>
    </div>
  );
}

export default UserFeedback;
