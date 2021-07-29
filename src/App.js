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
      <h2>React Redux Middlaware API</h2>
      {props.isLoading ? (
        <p>
          <img
            style={{ width: 50, height: 50 }}
            src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif"
            alt="Loading"
          />
        </p>
      ) : (
        props.countries.map((country) => {
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
        })
      )}
    </div>
  );
};

const mapStataToProps = (state) => {
  return {
    countries: state.countries,
    isLoading: state.isLoading,
  };
};

export default connect(mapStataToProps, { getCountries })(App);
