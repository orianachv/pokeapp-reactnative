import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base'
import axios from 'axios';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody'

export default class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  }

  searchPoke = () => {
    this.setState({ onCall: true });
    const self = this
    axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
      .then(res => {
        console.log(res.data)
        self.setState({ data: res.data })
        self.setState({ onCall: false })

      })
      .catch(err => console.error(err))
  }
  renderBody = () => {
    if (this.state.onCall) return <PokeLoader />
    else return <SearchBody data={this.state.data} />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          searchBar
          rounded
        >
          <Item>
            <Icon name="search" onPress={this.searchPoke} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    )
  }
}