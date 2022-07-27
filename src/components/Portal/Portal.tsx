/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
};

export class Portal extends React.Component<PortalProps> {
  private el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
