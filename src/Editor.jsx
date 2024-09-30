import { useState } from "react"
import Previewer from "./Previewer";
import "./editor.css";

const Editor = () => {

    const [editorText, setEditorText] = useState("");

    const handleChange = (e) => {
        setEditorText(e.target.value)
    }

    return (
        <>
         <div className="editor-wrapper">
            <textarea 
              id="editor"
              className="editor"
              value={editorText}
              onChange={handleChange} 
              >
            </textarea>
        </div>
          <Previewer newHeader={editorText} />
        </>

    )

}

export default Editor;