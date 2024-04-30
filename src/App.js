import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'
import {
  BgContainer,
  TextEditorContainer,
  TextImageContainer,
  TextImagePara,
  TextImage,
  InputTextContainer,
  BtnContainer,
  ButtonEl,
  InputTextEl,
} from './styledComponents'

// Replace your code here
class App extends Component {
  state = {bold: false, styleEl: false, textunderline: false}

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({styleEl: !prevState.styleEl}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({textunderline: !prevState.textunderline}))
  }

  render() {
    const {bold, styleEl, textunderline} = this.state
    return (
      <BgContainer>
        <TextEditorContainer>
          <TextImageContainer>
            <TextImagePara>Text Editor</TextImagePara>
            <TextImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextImageContainer>
          <InputTextContainer>
            <BtnContainer>
              <li>
                <ButtonEl
                  data-testid="bold"
                  type="button"
                  bold={bold}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </ButtonEl>
              </li>
              <li>
                <ButtonEl
                  data-testid="italic"
                  type="button"
                  bold={styleEl}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </ButtonEl>
              </li>
              <li>
                <ButtonEl
                  data-testid="underline"
                  type="button"
                  bold={textunderline}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonEl>
              </li>
            </BtnContainer>
            <InputTextEl
              bold={bold}
              styleEl={styleEl}
              textunderline={textunderline}
            />
          </InputTextContainer>
        </TextEditorContainer>
      </BgContainer>
    )
  }
}

export default App
