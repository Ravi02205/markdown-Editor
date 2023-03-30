import { useContext } from 'react';
import parse from 'html-react-parser';
import markDownContext from '../context/contextProvider';

const MarkdownSanitized = () => {
    const { getMarkDownAsHTMLOutput } = useContext(markDownContext);
    return (
        <>

        <div className="output">
            <h3>Markdown Output</h3>
            <div class="markdown-output">
                {parse(getMarkDownAsHTMLOutput())}
            </div>
        </div>
        </>
    )
}

export default MarkdownSanitized;