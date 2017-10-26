import Expo from 'expo';
import React from 'react';
import { Card, Button } from 'react-native-elements';
import { StyleSheet, Text, View} from 'react-native';
import Deck from './src/Deck';

const DATA = [
    {id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1268&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1504890231393-71b0d15a05f4?w=1300&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1504811060900-0d77dc63a136?w=1268&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 4, text: 'Card #4', uri: 'https://images.unsplash.com/photo-1504890231393-71b0d15a05f4?w=1300&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 5, text: 'Card #5', uri: 'https://images.unsplash.com/photo-1504811060900-0d77dc63a136?w=1268&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 6, text: 'Card #6', uri: 'https://images.unsplash.com/photo-1504890231393-71b0d15a05f4?w=1300&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 7, text: 'Card #7', uri: 'https://images.unsplash.com/photo-1504811060900-0d77dc63a136?w=1268&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
    {id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1504811060900-0d77dc63a136?w=1268&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
];

export default class App extends React.Component {
  renderCard(item) {
    return (
        <Card
            key = {item.id}
          title = {item.text}
          image = {{uri: item.uri}}
        >
          <Text style = {{ marginBottom: 10}}>
            Sample text
          </Text>
          <Button
              icon = {{ name: 'code'}}
              backgroundColor = "#03A9F4"
              title = "View Now!"
          />
        </Card>
    );
  }

  renderNoMoreCards() {
      return (
          <Card title = "No Cards Left">
              <Text style = {{ marginBottom: 10 }}>
                  No more content.
              </Text>
              <Button
                backgroundColor = "#03A9F4"
                title = "Get more..."
              />
          </Card>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data = {DATA}
          renderCard = {this.renderCard}
          renderNoMoreCards = {this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
