import React from 'react';
import Markdown from "marked-react";
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import {Textarea} from './Textarea.js';
import {placeholder, editorSize, previewSize} from './helpers.js';
import 'highlight.js/styles/a11y-dark.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code: (snippet, lang) => {
    return <Lowlight language={lang} value={snippet} />;
  },
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText : placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({
      markdownText: event.target.value
    });
  }

  
  render() {
    return (      
      <Container>
        <Grid container spacing={3} >
          <Grid container item xs={6} md={6}>
            <h1>Editor:</h1>
            <div style={editorSize}>
              <Textarea handleChange={this.handleChange} />
            </div>
          </Grid>
          <Grid container item xs={6} md={6} >
            <h1>Preview:</h1>
            <div style={previewSize} id="preview" >
              <Markdown 
                  breaks='true'
                  renderer={renderer} 
                  value={this.state.markdownText}
              /> 
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
};


export default App;
