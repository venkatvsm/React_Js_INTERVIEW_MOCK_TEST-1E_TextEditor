import Styled from 'styled-components'

export const BgContainer = Styled.div`
    min-height: 100vh;
    background-color: #25262c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8%;
`
export const TextEditorContainer = Styled.div`
    height: 90vh;
    width: 80%;
    background-color: #1b1c22;
    display: flex;
`
export const TextImageContainer = Styled.div`
    width: 46%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    padding-top: 30px;
`
export const TextImagePara = Styled.h1`
    color: #f8fafc;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10%;
`
export const TextImage = Styled.img`
    width: 80%;
    height: 60vh;
    
`
export const InputTextContainer = Styled.div`
    border-style: solid;
    border-width: 1px;
    border-radius: 12px;
    border-color: #cbd5e1;
    background-color: #334155;
    margin: 5%;
    width: 48%;
`
export const BtnContainer = Styled.ul`
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-width: 2px;
    border-color: #cbd5e1;
    list-style-type: none;
    padding-top: 6px;
    padding-bottom: 10px;
`
export const ButtonEl = Styled.button`
    border: none;
    background-color: transparent;
    color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
    outline: none;
    cursor: pointer;
`
export const InputTextEl = Styled.textarea`
    width: 100%;
    height: 85%;
    background-color: transparent;
    border: none;
    outline: none;
    color:  #f1f5f9;
    font-family: Roboto;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 8px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    font-style: ${props => (props.styleEl ? 'italic' : 'normal')};
    text-decoration: ${props => (props.textunderline ? 'underline' : 'normal')};
`
