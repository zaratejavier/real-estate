import React from "react";
import Axios from "axios";

export default class CityCost extends React.Component {
  state = { cityTextData: [] };
  async componentDidMount() {
    console.log("mounted");
    const res = await Axios.get("/api/city_cost");

    this.getTextAverages(res.data);
  }

  getSum(str) {
    const pricesArray = str.split(",");
    let sum = 0;
    pricesArray.forEach((p) => {
      sum += parseInt(p);
    });
    return sum;
  }

  getTextAverages(priceInfoArr) {
    const cityTextData = priceInfoArr.map((city) => {
      const sum = this.getSum(city.prices);
      const average = sum / city.price;
      return { ...city, sum, average };
    });

    this.setState({ cityTextData });
  }

  render() {
    return (
      <div>
        <h1>City Cost</h1>
        {this.state.cityTextData.map((city) => (
          <div>
            <h3 styles={{ margin: "5px" }}>city: {city.city}</h3>
            <p>average cost: {city.average}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}