import "./Ingredients.css"

function Ingredients() {
    return (
        <>
            <div className="container">
                <div className="text-center"><text className="fw-bold fs-4">SHOP BY INGREDIENTS</text></div>

                <div className="col-12 d-flex ingredients">
                    <div className=""><img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/salicylic_acid.webp" class="img-thumbnail ingredientsimage" alt="..." /></div>
                    <div className="Acidtext col-7">
                        <h4 className="fw-bold acidh4">SALICYLIC ACID</h4>
                        <p className="fw-medium acidp">Most recommended Beta Hydroxy Acid (BHA) known for its exfoliating properties, treating acne and unclogging pores.</p>
                        <button type="button" class="btn btn-outline-dark explore">EXPLORE MORE</button>
                    </div>
                    
                </div>

                
                <div className="col-12  d-flex">
                    <div className="Acidtext text-end ">
                        <h4 className="fw-bold acidh4">HYALURONIC ACID</h4>
                        <p className="fw-medium acidp">This molecule holds upto 1000 times its weight in water. The best molecule to hydrate skin and keep it plump. Most suitable for dry and dehydrated skin.</p>
                        <button type="button" class="btn btn-outline-dark explore">EXPLORE MORE</button></div>
                        <div className="col-3"><img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/hyaluronic_acid.webp" class="img-thumbnail ingredientsimage" alt="..." /></div>
                    
                    
                </div>

                <div className="col-12 d-flex ingredients">
                    <div className=""><img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/FCLvitamin_c_ingre.webp" class="img-thumbnail ingredientsimage" alt="..." /></div>
                    <div className="Acidtext col-7">
                        <h4 className="fw-bold acidh4">VITAMIN C</h4>
                        <p className="fw-medium acidp">A water-soluble vitamin that boosts collagen production and antioxidant levels. It protects the skin from UV damage, treats dullness and makes skin healthy.</p>
                        <button type="button" class="btn btn-outline-dark explore">EXPLORE MORE</button>
                    </div>
                    
                </div>
                <div className=" col-12 d-flex">
                    <div className="Acidtext text-end ">
                        <h4 className="fw-bold acidh4">TRANEXAMIC ACID</h4>
                        <p className="fw-medium acidp">A star ingredient trusted by experts to treat hyperpigmentation, melasma and dark spots.</p>
                        <button type="button" class="btn btn-outline-dark explore">EXPLORE MORE</button></div>
                        <div className="col-3"><img src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/tranexamic_acid.webp" class="img-thumbnail ingredientsimage" alt="..." /></div>
                    
                    
                </div>
               

            </div>
             <img src="	https://www.fixderma.com/cdn/shop/files/App_Offer_Banner.webp?v=1737612069&width=1370" class="img-fluid" alt="..."></img>
        </>
    )
}
export default Ingredients;