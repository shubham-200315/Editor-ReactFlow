// iconProviderNode.js
import { 
  FaRegFile, 
  FaRobot, 
  FaRegShareSquare, 
  FaRegStickyNote, 
  FaCogs, 
  FaRetweet, 
  FaSave, 
  FaCodeBranch, 
  FaFileCode,   
  FaClipboardCheck, 
  FaChartLine,   
  FaGlobe,     
} from 'react-icons/fa';

// Function to provide icons based on label
export const getIconByLabel = (label) => {
  switch (label) {
    case "Input":
      return <FaRegFile color="gray" />;
    case "Output":
      return <FaRegShareSquare color="gray" />;
    case "LLM":
      return <FaRobot color="gray" />;
    case "Text":
      return <FaRegStickyNote color="gray" />;
    case "Pipeline":
      return <FaCogs color="gray" />;
    case "Transform":
      return <FaRetweet color="gray" />;
    case "File Save":
      return <FaSave color="gray" />;
    case "Logic":
      return <FaCodeBranch color="gray" />;
    case "Note":
      return <FaFileCode color="gray" />; // Icon for Code node
    case "Check":
      return <FaClipboardCheck color="gray" />; // Icon for Check node
    case "Analytics":
      return <FaChartLine color="gray" />; // Icon for Analytics node
    case "Network":
      return <FaGlobe color="gray" />; // Icon for Network node
    default:
      return null;
  }
};
