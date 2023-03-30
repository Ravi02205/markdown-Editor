import { useContext } from "react";
import markDownContext from "../context/contextProvider";
import { rawTexts } from '../constants';
const RawInputArea = () => {

    const { handleChangeRawInputedText } = useContext(markDownContext);

    return (
        <div className="input-container">
            <div className="heading">
                <h1>Enter Markdown</h1>
            </div>
            <div className="input-field">
                <textarea type="text" defaultValue={rawTexts} onChange={handleChangeRawInputedText} />
            </div>
        </div>
    );
};

export default RawInputArea;