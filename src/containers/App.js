import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { firebaseApp } from '../base';
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
    modalShow: false,
    loginText: '登入'
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
    if (this.state.loginText === '登入') {
      this.setState({ modalShow: true });
    } else {
      this.props.history.push('/');
      this.setState({
        items: [],
        loading: false,
        cartCount: 0,
        cartItems: [],
        totalPrice: 0
      });
    }
  };

  onDelete = key => {
    const cartItems = this.state.cartItems.filter(item => item.id !== key);

    this.setState({ cartItems, cartCount: this.state.cartCount - 1 });
  };

  onSignInClicked = () => this.setState({ modalShow: true });

  onSignOutClicked = async () => {
    await firebase.auth().signOut();
    this.setState({ loginText: '登入' });
  };

  onModalClicked = () => this.setState({ modalShow: false });

  authHandler = authData => {
    this.setState({ modalShow: false, loginText: '登出' });
  };

  auth = () => {
    const authGitHub = new firebase.auth.GithubAuthProvider();

    firebaseApp
      .auth()
      .signInWithPopup(authGitHub)
      .then(this.authHandler);
  };

  render() {
    return (
      <>
        <Modal modalShow={this.state.modalShow} modalHide={this.onModalClicked}>
          <SignIn auth={this.auth} />
        </Modal>
        <Header
          cartCount={this.state.cartCount}
          onSignInClicked={this.onSignInClicked}
          onSignOutClicked={this.onSignOutClicked}
          loginText={this.state.loginText}
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
