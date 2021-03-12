import React from "react";
import Loading from "./Loading";

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync;
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
