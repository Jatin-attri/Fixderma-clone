import "./Result.css"
function Result() {
    return (
        <>
            <div class="container d-flex result p-4">
                <div className="col-6  row align-items-center">
                   <div className="text"> <p>Real People, <br></br>
                        <u>Real</u> Results!</p>
                </div>
                </div>
                <div className="col-6 image">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="5000">
                                <img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/Before-After-face-serum.webp" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="	https://cdn.shopify.com/s/files/1/0505/3559/6226/files/Before-After-under-eye-cream.webp" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item ">
                                <img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/Before-After-Foobetik.webp" class="d-block w-100" alt="..."/>
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Result;