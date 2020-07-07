import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            />
          </Link>
          <Link to="/available">
            <Menu.Item
              name="available"
              id="available"
              active={this.props.location.pathname === "/available"}
            />
          </Link>
          <Link to="/cities">
            <Menu.Item
              name="cities"
              id="cities"
              active={this.props.location.pathname === "/cities"}
            />
          </Link>
          <Link to="/find_home">
            <Menu.Item
              name="find_home"
              id="find_home"
              active={this.props.location.pathname === "/find_home"}
            />
          </Link>
          <Link to="/city_cost">
            <Menu.Item
              name="city_cost"
              id="city_cost"
              active={this.props.location.pathname === "/city_cost"}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navbar);