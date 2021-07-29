import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { getCountries } from "./actions/action";

const App = (props) => {
  /*   const [countries, setCountries] = useState([]);
   */
  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {props.countries.map((country) => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStataToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStataToProps, { getCountries })(App);
