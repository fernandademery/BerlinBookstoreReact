import React, { Component } from "react";
import "./App.css";
import Books from "./components/Books";
import logo from "./images/logo.png";
import facebooklogo from "./images/facebook-logo.png";
import instalogo from "./images/insta-logo.png";
import twitterlogo from "./images/twitter-logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/zyv02")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          books: data.books,
          filtered: Array.from(data.books)
        });
      });
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    console.log(this.state);
    const filteredBooks = this.state.books.filter(book => {
      const lc = book.title.toLowerCase();
      const filter = this.state.search;
      return lc.includes(filter);
    });
    const style = {
      logo: {
        width: "200px"
      },
      footer: {
        textAlign: "center",
        marginTop: "60px",
        fontSize: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#F2E2CE",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%"
      },
      footerimg: {
        marginLeft: "20px",
        width: "30px"
      }
    };

    return (
      <div>
        <nav className="navbar navbar-light bg-light new-bg sticky-top">
          <img
            src={logo}
            alt="logo"
            className="navbar-brand"
            style={style.logo}
          />

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search your book"
              aria-label="Search"
              onKeyUp={this.handleChange}
              onSubmit="return false"
            />
          </form>
        </nav>

        <div>
          <Books books={filteredBooks} />
        </div>
        <footer style={style.footer}>
          Get in touch!{" "}
          <img src={facebooklogo} alt="fblogo" style={style.footerimg} />{" "}
          <img src={instalogo} alt="instalogo" style={style.footerimg} />{" "}
          <img src={twitterlogo} alt="twitterlogo" style={style.footerimg} />{" "}
        </footer>
      </div>
    );
  }
}
export default App;
