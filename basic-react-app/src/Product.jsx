import "./Product.css";

function Product({title,price,features}) {
    // console.log(features)
    // const list= features.map((feature)=><li>{feature}</li>);
    return (
        <div id="Product">
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <p>{ features.map((feature)=><li>{feature}</li>)}</p>
            
        </div>
    );



}

export default Product;