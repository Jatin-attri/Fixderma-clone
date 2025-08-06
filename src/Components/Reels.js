import "./Reels.css"
import data from "./Reels.json"
function Reels() {
    return (
        <>
            <div class="container reelscontainer">
                <div className="text-center fw-bold social"><text>LET'S GET SOCIAL <span><a className="text-decoration-none" href="https://www.instagram.com/fixderma.skincare/">#FIXDERMA</a></span></text></div>
                <div className="d-flex reelsscroller">

                    {/* {data.map((item, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            data-bs-interval={item.interval}
                            key={item.id}
                        >
                            {item.type === "image" ? (
                                <img src={item.src} className="d-block w-100" alt="feedback" />
                            ) : (
                                <video
                                    src={item.src}
                                    className="d-block w-100"
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                />
                            )}
                        </div>
                    ))} */}
                    {
                        data.map((item, index) => (
                            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner reelsimage">
                                    <div class="carousel-item active reelsimage" data-bs-interval="2000" key={item}>
                                        <img src={item.src} class="d-block w-100" alt="..." />
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </div>
            </div>

        </>
    )
}
export default Reels;
