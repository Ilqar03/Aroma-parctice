import React from 'react'
import "./PremiumProduct.scss"
import photo from "../../../Imgs/premiumproduct.png"


function PremiumProduct() {
  return (
    <section>
        <div className='premium_product'>
            <div className='premium_prduct_img'>
                <img alt='foto' src={photo}/>
            </div>

        </div>
    </section>
  )
}

export default PremiumProduct