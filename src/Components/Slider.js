function Slider() {
    return (
        <><div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.fixderma.com/cdn/shop/files/rakhi_dekstop_banner.webp?v=1753965474&width=1370" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.fixderma.com/cdn/shop/files/Hair_Care_PC.webp?v=1751624748&width=1370" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.fixderma.com/cdn/shop/files/Skarfix_banner_dekstop.webp?v=1748510587&width=1370" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.fixderma.com/cdn/shop/files/Tomaglow-desk..webp?v=1753857675&width=1370" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://www.fixderma.com/cdn/shop/files/Skarfix_banner_dekstop.webp?v=1748510587&width=1370" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon text-info bg-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon text-info bg-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}
export default Slider;