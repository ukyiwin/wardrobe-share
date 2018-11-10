import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { fonts, colors, margin } from '../../styles/theme';

const Top = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    display: inline-block;
    margin: ${margin.full};
    font-family: ${fonts.primary};
    font-weight: normal;
    letter-spacing: 3px;
    flex: 1 1 0;
  }
`;
const Navigation = styled.div`
  border-top: 0.5px solid ${colors.lightGrey};
  border-bottom: 0.5px solid ${colors.lightGrey};

  ul {
    margin: 0;
    font-family: ${fonts.secondary};
    text-align: center;
    letter-spacing: 1px;

    li {
      display: inline-block;
      list-style: none;
      margin: ${margin.full};
      cursor: pointer;

      &.active {
        color: ${colors.orange};
      }
    }
  }
`;
const User = styled.div`
  margin: auto ${margin.full} ${margin.half} 0;
  display: flex;
  align-items: center;

    p {
      margin: 0 10px;
      color: ${colors.lightGrey};
    }

    .Avatar {
      height: 40px;
      width: 40px;

      img {
        width: 100%;
        border: 1px solid ${colors.lightGrey};
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Top>
          <h1 className="header">Wardrobe Share</h1>
          <User>
            <p className="username">katherine_hoang</p>
            <div className="Avatar">
              <img src="./images/profile/368x368profilepic.jpg" alt="Avatar" />
            </div>
          </User>
        </Top>
        <Navigation>
          <ul>
            <li>Home</li>
            <li className="active">Create</li>
            <li>Browse</li>
            <li>About</li>
          </ul>
        </Navigation>
      </Fragment>
    );
  }
}

export default Header;
