import CertificationsData from "./Certifications.json"
function Certifications(){
    return (
        <>
        <div className="container-flex">
            <div className=" d-flex justify-content-center fw-bold" style={{fontSize:"24px", padding:"30px 0px 10px", margin:"1px 0px 5px"}}>
                <text className="p-3">OUR CERTIFICATIONS</text>
            </div>
            <div className="d-flex justify-content-center">
            {
                CertificationsData.map((item, index)=>(
                    <div key={item} className="">
                <img src={item.src} alt="..." style={{width:"80px", height:"70px", padding:"0px 5px", fontSize:"15px", opacity:"50%",  }}></img>
                </div>
                ))
            }
            </div>
        </div>
        </>
    )
}
export default Certifications;