import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const Spacex_API = 'https://api.spacexdata.com/v3/capsules';
    
    fetch(Spacex_API)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <div className="text-center m-4">
          <h1 className="display-4">Cápsulas de SpaceX</h1>
          <p>
            Un problema bastante frecuente es que se te haya perdido alguna
            cápsula de SpaceX.
            <br />
            Don't worry. We have a SpaceX Capsules Search for you <span>❤</span>
          </p>
        </div>
        <div className="m-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="search"
                className="form-control w-75 m-auto"
                autoComplete="off"
                spellCheck="false"
              />
              <div className="d-flex justify-content-center m-2">
                <button className="btn btn-dark btn-lg" type="submit">
                  Buscar cápsula
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
