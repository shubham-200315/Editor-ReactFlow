import { FaRegFile, FaRobot, FaRegShareSquare, FaRegStickyNote, FaCogs, FaRetweet, FaSave, FaCodeBranch,FaFileCode } from 'react-icons/fa'; // Import additional icons

export const getIcons = () => ({
    file: <FaRegFile color="gray" />,
    robot: <FaRobot color="gray" />,
    share: <FaRegShareSquare color="gray" />,
    text: <FaRegStickyNote color="gray" />,
    pipeline: <FaCogs color="gray" />,         
    transform: <FaRetweet color="gray" />,
    note: <FaFileCode color = "gray" />,     
    save: <FaSave color="gray" />,            
    logic: <FaCodeBranch color="gray" />,      
});
