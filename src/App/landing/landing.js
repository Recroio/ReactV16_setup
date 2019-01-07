import React, { Component } from "react";
import { connect } from "react-redux";
import ACTION from "../../actionConstant";
import "./landing.style.less";

import { setCookie, getCookie, eraseCookie } from "../../util/common";

class landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: ACTION.CHECK.LOAD });
  }
  onClickCB = (type, e) => {
    if (type === "add") {
      setCookie("userCookie", "Hey", 1);
      this.forceUpdate();
    } else if (type === "remove") {
      eraseCookie("userCookie");
      this.forceUpdate();
    }
  };

  render() {
    const { landing } = this.props;
    return (
      <React.Fragment>
        <div>
          {getCookie("userCookie")}
          <div onClick={() => this.onClickCB("add")}>Add Cookie</div>
          <div onClick={() => this.onClickCB("remove")}>Remove Cookie</div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ landing }) => ({ landing });

export default connect(mapStateToProps)(landing);
