import TextareaAutosize from '@mui/base/TextareaAutosize';
import {placeholder, editorSize} from './helpers.js';

export const Textarea = (props) => (

    <TextareaAutosize
        id="editor"
        placeholder="Enter markdown flavored text"
        onChange={props.handleChange}
        defaultValue={placeholder}
        style={{
            height: '80vh', 
            width: '100%', 
            overflowY: 'scroll', 
            resize: 'none',
            border: 'none',
            outline: 'none',
            backgroundColor: 'blue',
            color: 'white'
        }}
    />
    
);