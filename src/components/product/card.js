import React from "react";

const Card = (props) => {
  const productCards = props.ProductData.map((data) => {
    return (
      <div className="col-md-6 col-lg-3" key={data.id}>
        <div className="product">
          <a href="#" className="img-prod">
            <img className="img-fluid" src={data.image} alt={data.name} />
            <span className="status">
              Freshness Level: {data.freshnesslevel}
            </span>
            <div className="overlay" />
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3>
              <a href="#">{data.name}</a>
            </h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className="mr-2 price-dc">{data.orignalPrice}</span>
                  <span className="price-sale">{data.disocuntedPrice}</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <a
                  href="#"
                  className="add-to-cart d-flex justify-content-center align-items-center text-center"
                >
                  <span>
                    <i className="ion-ios-menu" />
                  </span>
                </a>
                <a
                  href="#"
                  className="buy-now d-flex justify-content-center align-items-center mx-1"
                >
                  <span>
                    <i className="ion-ios-cart" />
                  </span>
                </a>
                <a
                  href="#"
                  className="heart d-flex justify-content-center align-items-center "
                >
                  <span>
                    <i className="ion-ios-heart" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return productCards;
};

export default Card;