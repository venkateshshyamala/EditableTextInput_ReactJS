import {Component} from 'react'
import styled from 'styled-components'

class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = event => {
    this.setState({text: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <AppContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InlineBlock>
            {isEditable ? (
              <Input type="text" onChange={this.getText} value={text} />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </InlineBlock>
        </Container>
      </AppContainer>
    )
  }
}

export default EditableTextInput

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
  padding: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
`
const Heading = styled.h1`
  color: #000000;
  padding-bottom: 10px;
`

const InlineBlock = styled.div``

const Input = styled.input`
  height: 40px;
  width: 250px;
  border-radius: 10px;
  margin-right: 10px;
`
const InlineText = styled.p`
  display: inline;
  font-size: 25px;
  font-weight: 500;
  padding: 10px;
`
const Button = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #d946ef;
  cursor: pointer;
  border: 0;
  outline: none;
  border-radius: 15px;
`
