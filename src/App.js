import React from "react";

const App = () => {
  const generateUri = (hash, name) => {
    return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(name)}`;
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Mag-netti
          </a>
        </div>
      </nav>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12">
            <form>
              <div className="form-group">
                <label htmlFor="hash">Info hash</label>
                <input
                  type="text"
                  name="hash"
                  id="hash"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Torrent name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control form-control-lg"
                />
              </div>
              <a className="btn btn-primary">
                Get <i className="fa fa-magnet" />
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
