import { Remarkable } from 'remarkable';
import { useState } from 'react';
import { rawTexts } from '../../constants';
function useMarkdownEditor() {
    var md = new Remarkable();
    // useState manage React.useState()
    const [text, setText] = useState(rawTexts);
    function handleChangeRawInputedText(e) {
        console.log(text);
        setText(e?.target?.value);
    };
    function getMarkDownAsHTMLOutput() {
        console.log(text);
        return md.render(text);
    };

    return { rawTexts, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
}

export default useMarkdownEditor;