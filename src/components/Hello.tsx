import * as React from "react";

export interface Props {
  message: string;
}

export default class Hello extends React.Component<Props, {}> {
  render() {
    return <h1>Hello {this.props.message}!</h1>;
  }
}
