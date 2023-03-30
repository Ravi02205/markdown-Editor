import MarkdownSanitized from "./MarkdownSanitized";
import RawInputArea from "./RawInputArea";
import markDownContext from "../context/contextProvider";
import useMarkdownEditor from "./hooks/useSomething.js";
const App = () => {

    const { rawTexts, getMarkDownAsHTMLOutput, handleChangeRawInputedText } = useMarkdownEditor();

    return (
        <markDownContext.Provider value={{ rawTexts, getMarkDownAsHTMLOutput, handleChangeRawInputedText }}>
            <div className="markDownEditor">
                <RawInputArea />
                <MarkdownSanitized />
            </div>
        </markDownContext.Provider>
    );
}

export default App;