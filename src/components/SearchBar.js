import React from 'react';
import styles from '../sass/components/SearchBar.module.scss';

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className={styles.search}>
        <form style={{ width: '100%' }} onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="搜尋照片..."
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
