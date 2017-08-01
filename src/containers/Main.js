import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { connect } from 'dva';
import { StyleSheet } from 'react-native'

@connect(({ app }) => ({ ...app }))
class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  renderItemDivider(content) {
    return (
      <ListItem itemDivider style={styles.header}>
        <Text>{content}</Text>
      </ListItem>
    )
  }

  renderItemContent(content, target) {
    return (
      <ListItem onPress={(e) => this.onJump(e, target)}>
        <Text>{content}</Text>
      </ListItem>
    )
  }

  render() {
    return (
      <Container>
        <List style={styles.container}>
          {this.renderItemDivider("A")}
          {this.renderItemContent("Action Sheet", "ActionSheetPage")}
        </List>
      </Container>
    );
  }

  onJump(e, target) {
    console.log('GOTO: ' + target);
    this.props.navigation.navigate(target);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#f6f6f6'
  },
})

export default Main;