import { TabTitle } from "../utils/TabFunctions";
import {FaExclamation} from "react-icons/fa";

const Matches = () => {
    // Changes the title of the tab depedning on the page site loads on
    TabTitle('Matches | Birmingham Impact Football Club')
    
    return (
        <div className="col-sm-12">
            <div className="attentionPoint">
            <FaExclamation />
            <br />
            Content coming soon...
            </div>
        </div>
    );
}

export default Matches;