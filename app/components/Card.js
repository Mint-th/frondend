export default function Card() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center mb-4"></div>
            <div className="col-md-12 text-center mb-4">
                <h3>Our Project</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                <img src="/image/car1.jpg" className="card-img-top img-responsive" alt="..."height={600}/>
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/image/car2.jpg" className="card-img-top" alt="..." height={600}/>
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/image/car3.jpg" className="card-img-top" alt="..." height={600}/>
                <div className="card-body">
                    <p className="card-text">-</p>
                </div>
                </div>
            </div>
      </div>
    </div>
    );
  }