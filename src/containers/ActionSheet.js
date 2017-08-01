import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Card,
  CardItem,
  Body,
  Text,
  Toast
} from "native-base";
import { connect } from 'dva';
import { StyleSheet } from 'react-native';

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;
const MSG = [
  'Hello Michael',
  'I love this game',
  'Why always me?',
  'You can not fucking stop me',
  'Oh I love it'
]

@connect(({ app }) => ({ ...app }))
class ActionSheetPage extends Component {
  static navigationOptions = {
    title: 'ActionSheet',
  }

  constructor(props) {
    super(props);
    this.state = {
      clicked: 'Not Selected'
    };
  }

  renderCardInfo(){
    <Card>
      <CardItem>
        <Body>
          <Text style={styles.content}>Current Clicked Option: {this.state.clicked}</Text>
        </Body>
      </CardItem>
    </Card>
  }

  render() {
    return (
      <Container>
        <Content padder>
          {this.renderCardInfo()}
          <Button block style={styles.btn} onPress={this.showActionSheet.bind(this)} >
            <Text>Click to Call Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    )
  }

  showActionSheet() {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: "Testing ActionSheet"
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });

        Toast.show({
          text: MSG[buttonIndex],
          position: 'bottom',
          buttonText: 'Okay',
          duration: 2000
        })
      }
    )
  }
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20
  },
  btn: {
    marginVertical: 20
  },
})

export default ActionSheetPage;