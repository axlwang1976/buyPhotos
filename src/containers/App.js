import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import unsplash from '../api/unsplash';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import Modal from '../components/Modal';
import SignIn from '../components/SignIn';

class App extends React.Component {
  state = {
    items: [],
    loading: false,
    cartCount: 0,
    cartItems: [],
    totalPrice: 0,
    modalShow: false
  };

  onSearchSubmit = async inputValue => {
    this.setState({ loading: true });

    const res = await unsplash
      .get('/search/photos', {
        params: {
          query: inputValue
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });

    this.setState({ items: res.data.results, loading: false });
  };

  onAddToCart = item => {
    const cartItems = [...this.state.cartItems];

    cartItems.push(item);
    const priceArr = cartItems.map(item => {
      return item.width;
    });

    const totalPrice = priceArr.reduce((prev, cur) => prev + cur);

    this.setState({ cartCount: this.state.cartCount + 1 });
    this.setState({ cartItems });
    this.setState({ totalPrice });
  };

  onContinue = () => {
    this.props.history.push('/');
    this.setState({
      items: [],
      loading: false,
      cartCount: 0,
      cartItems: [],
      totalPrice: 0
    });
  };

  onDelete = key => {
    const cartItems = this.state.cartItems.filter(item => item.id !== key);

    this.setState({ cartItems, cartCount: this.state.cartCount - 1 });
  };

  onSignInClicked = () => this.setState({ modalShow: true });

  onModalClicked = () => this.setState({ modalShow: false });

  render() {
    return (
      <>
        <Modal modalShow={this.state.modalShow} modalHide={this.onModalClicked}>
          <SignIn />
        </Modal>
        <Header
          cartCount={this.state.cartCount}
          onSignInClicked={this.onSignInClicked}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={props => (
              <Main
                onSearchSubmit={this.onSearchSubmit}
                items={this.state.items}
                loading={this.state.loading}
                onAddToCart={this.onAddToCart}
                {...props}
              />
            )}
          />
          <Route
            path="/cart"
            component={props => (
              <Cart
                cartItems={this.state.cartItems}
                totalPrice={this.state.totalPrice}
                onContinue={this.onContinue}
                onDelete={this.onDelete}
                {...props}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
