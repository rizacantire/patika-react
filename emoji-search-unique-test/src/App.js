import React, { PureComponent } from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import EmojiResults from "./components/EmojiResults/EmojiResults";
import filterEmoji from "./services/filterEmoji";
import Header from "./components/Header/Header";
import "./App.css";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
