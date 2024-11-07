import {useState} from "react";
import Warning from "./Warning.jsx";

export default function Textarea({ text, setText }) {

    const [warningText, setWarningText] = useState("");

    const handleChange = (event) => {
        let newText = event.target.value;

        if (newText.includes("<script>")) {
            setWarningText("No script tag allowed!");
            newText = newText.replace("<script>", "");
        } else {
            setWarningText("");
        }

        setText(newText);
    }

    return (
        <div className="textarea">
            <textarea onChange={handleChange}
            value={text}
            placeholder="Enter your text"
            spellCheck="false"
            />
            <Warning text={warningText} />
        </div>
    )
}