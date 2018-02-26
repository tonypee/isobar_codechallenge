import * as React from "react";
import Hello from "./components/Hello";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class App extends React.Component<{}, {}> {
  @observable time: number = 0;

  constructor(props: any) {
    super(props);

    setInterval(() => this.time++, 1000);
  }

  render() {
    return <Hello message={String(this.time)} />;
  }
}
