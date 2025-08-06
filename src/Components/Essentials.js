import { useState } from "react";
import "./Essentials.css";

function Essentials(props) {
  console.log(props);
  const [products, setProducts] = useState(props.EssentialsData.products);
  console.log("my products", products);

  return (
    <>
      <div class="essentials">
        <div className="fs-4 fw-bold text-center">
          <p>{props.EssentialsData.subcategoryName}</p>
        </div>
        <div
          class="btn-toolbar mb-3"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group m-auto" role="group" aria-label="First group">
            <button
              type="button"
              class="btn text-secondary  fw-semibold text-dark"
            >
              New Launches
            </button>
            <button
              type="button"
              class="btn text-secondary fw-semibold text-dark"
            >
              BestSellers
            </button>
            <button
              type="button"
              class="btn text-secondary fw-semibold text-dark"
            >
              Best Offers
            </button>
            <button
              type="button"
              class="btn text-secondary  fw-semibold text-dark"
            >
              Combo Kits
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {products.map((item, index) => (
            <div class="card border-0" key={item}>
              <img src={item.image} class="card-img-top " alt={item.name} />
              <div class="card-body text-center">
                <div className="d-block">
                  <p className="fw-semibold ">{item.name}</p>
                  <p className="reviews">
                    <span>
                      <i class="fa-solid fa-star text-warning "></i>{" "}
                      {item.rating}{" "}
                    </span>
                    |
                    <span>
                      {" "}
                      {item.reviews} reviews{" "}
                      <i class="fa-solid fa-certificate text-primary"></i>
                    </span>
                  </p>
                  <p className="fw-semibold price">
                    <span>
                      <strike> RS. {item.originalPrice}</strike>
                    </span>
                    <span className="text-danger">
                      {" "}
                      Rs. {item.discountedPrice}
                    </span>
                  </p>
                  <a href="#" class="btn btn-dark quickadd w-100">
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Essentials;
