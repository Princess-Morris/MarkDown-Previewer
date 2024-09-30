import { marked } from "marked"

const Previewer = ({newHeader}) => {
  
    const htmlContent = marked(newHeader);

   return (
    <div className="preview-wrapper">
        <div className="preview" dangerouslySetInnerHTML={{__html:htmlContent}} />
    </div>
   )
}

export default Previewer