/* eslint-disable import/prefer-default-export */
import React, { Component } from "react";
// import { observer } from "mobx-react";
import { forEach } from "lodash";

/**
 * Observer function / decorator
 */
export const presenter = (Presenter, View, statics) => {
  // stateless component
  if (Presenter && View) {
    const ViewComp = View;
    class WrappedView extends Component {
      static View = View;
      constructor(props) {
        super(props);

        this.allProps = Object.assign({}, View.defaultProps, props);
        this.pm = props.pm || new Presenter(this.allProps, this);

        this.pm._hoc = !props.pm;
        this.view = View;
      }

      shouldComponentUpdate(nextProps, nextState) {

        if (this.pm.shouldComponentUpdate) {
          return this.pm.shouldComponentUpdate(nextProps, nextState);
        }
        return true;
      }

      componentDidMount(prevProps, prevState, snapshot) {
        this.pm.fetch && this.pm.fetch(prevProps, prevState, snapshot)
      }

      componentWillUnmount() {
        this.pm.dispose && this.pm.dispose();
      }

      render() {
        return <ViewComp {...this.props} pm={this.pm} />;
      }
    }

    if (statics) {
      forEach(statics, (val, key) => (WrappedView[key] = val));
    }
    return WrappedView;
  }
};


export default presenter
