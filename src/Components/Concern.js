import Concerndata from "./Concerndata.json"
function Concern() {
    return (
    <>
     <div id="carouselExample" className="carousel slide">
        <div className="text-center p-3">
          <span className="fs-4 fw-bold">SHOP BY CONCERN</span>
        </div>
        <div className="container">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block">
              {
                Concerndata.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-xl overflow-hidden text-center p-3 d-inline-block mx-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail rounded-circle shadow mb-1 bg-body-tertiary"
                      style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                    <div className="text-center fw-bold">
                      <p>{item.name}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
           

            </>
            )
}
            
export default Concern;
