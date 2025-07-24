import "./Product.css";

function Product({title,price,features}) {
    // console.log(features)
    // const list= features.map((feature)=><li>{feature}</li>);

    let isDiscount=price>=30000;
    let styles={backgroundColor: isDiscount ? "yellow" :""}

 return (
        <div id="Product" style={styles}>
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <p>{ features.map((feature)=><li>{feature}</li>)}</p>
            {price>=30000 && <p>Discount 5%</p>}
            
        </div>
    );



    // if(price>=30000){
    //      return (
    //     <div id="Product">
    //         <h3>{title}</h3>
    //         <p>Price : {price}</p>
    //         <p>Discount of 5%</p>
    //         <p>{ features.map((feature)=><li>{feature}</li>)}</p>
            
    //     </div>
    // );

    // }else{
    //      return (
    //     <div id="Product">
    //         <h3>{title}</h3>
    //         <p>Price : {price}</p>
    //         <p>{ features.map((feature)=><li>{feature}</li>)}</p>
            
    //     </div>
    // );
    // }
   



}

export default Product;