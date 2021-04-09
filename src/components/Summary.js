import React from "react";

class Summary extends React.Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div>
              <p>{new Date(currentDate).toDateString()}</p>
            </div>
            <div className="col-md-4 text-center my-auto">
              <div className="card newConfirmedCard card-block justify-content-center">
                <div>
                  <h3 className="newConfirmedh3"> New Confirmed Cases</h3>
                  <h1 className="newConfirmednumber">{summary.NewConfirmed}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center my-auto">
              <div className="card NewDeathsCard card-block justify-content-center">
                <div>
                  <h3 className="NewDeathsh3"> New Death Cases</h3>
                  <h1 className="NewDeathsnumber">{summary.NewDeaths}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center my-auto">
              <div className="card NewRecoveredCard card-block justify-content-center">
                <div>
                  <h3 className="NewRecoveredh3"> New Recovered Cases</h3>
                  <h1 className="NewRecoverednumber">{summary.NewRecovered}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4  text-center my-auto">
              <div className="card TotalConfirmedCard card-block justify-content-center">
                <div>
                  <h3 className="TotalConfirmedh3"> Total Confirmed Cases</h3>
                  <h1 className="TotalConfirmednumber">
                    {summary.TotalConfirmed}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-4 text-center my-auto">
              <div className="card TotalDeathsCard card-block justify-content-center">
                <div>
                  <h3 className="TotalDeathsh3"> Total Death Cases</h3>
                  <h1 className="TotalDeathsnumber">{summary.TotalDeaths}</h1>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4  text-center my-auto">
              <div className="card recover__card card-block justify-content-center">
                <div>
                  <h3 className="total_recover_h3"> Total Recovered Cases</h3>
                  <h1 className="total_recover_number">
                    {summary.TotalRecovered}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Summary;
