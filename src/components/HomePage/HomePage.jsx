import { Fragment, PureComponent } from "react";
import Form from "../Form";
import Header from "../Header";

export default class HomePage extends PureComponent {

  render() {
    return (
      <Fragment>
        <Header />
        <Form />
      </Fragment>
    );
  }
}
