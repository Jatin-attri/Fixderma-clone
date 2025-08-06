import { useState } from "react";

function Card(props) {

   console.log(props);
  const [products, setProducts] = useState(props.CardData.products);
  console.log("my card products",products);
    return (
        <>
           <div class="container ">
        <div className="fs-4 fw-bold d-flex sunscreen justify-content-between">
          <p className="col-11">{props.CardData.subcategoryName}</p>
          <div className="viewall ">
            <a className="btn btn-light btn-link text-decoration-none ">
              View All
            </a>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
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
    )
}
export default Card;

