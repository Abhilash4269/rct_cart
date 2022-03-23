import React from 'react'
import MultiActionAreaCard from './Card'
// import Sale from './Sale'

function Body() {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginInline:'150px'}}>

        <MultiActionAreaCard items='Fancy Product'sale={false} price='$40.00 - $80.00' popular={false}/>
        <MultiActionAreaCard items='Special Item'sale={true} price='$18.00'popular={true} dprice='$20.00'/>
        <MultiActionAreaCard items='Sale Item'sale={true} price='$25.00'popular={false} dprice='$50.00'/>
        <MultiActionAreaCard items='Popular Item'sale={false} price='$40.00'popular={true}/>
        <MultiActionAreaCard items='Sale Item'sale={true} price='$25.00'popular={false} dprice='$50.00'/>
        <MultiActionAreaCard items='Fancy Product'sale={false} price='$120.00 - $280.00'popular={false}/>
        <MultiActionAreaCard items='Special Item'sale={true} price='$18.00' dprice='$20.00' popular={true}/>
        <MultiActionAreaCard items='Popular Item'sale={false} price='$40.00' popular={true}/>

    </div>
  )
}

export default Body
