import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HeaderContainer} from '../containers/HeaderContainer'
import {Dashboard} from './Dashboard'
import {FooterContainer} from '../containers/FooterContainer'

export const Main = React.createClass({
  mixins: [PureRenderMixin],
  componentWillMount: function() {
  },
  render: function() {
    return (
      <div className="window">
        <HeaderContainer />
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <Dashboard />
            </div>
            <div className="pane">
              {this.props.children}
            </div>
          </div>
        </div>
        <FooterContainer />
      </div>
    )
  }
})
