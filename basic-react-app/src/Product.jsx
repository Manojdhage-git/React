import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, price, features, idx }) {
    let oldPrices = ["12,434", "23,434", "34,434", "45,434"];
    let newPrices = ["10,000", "20,000", "30,000", "40,000"];

    let Description = [
  ["This is a great product", "Best in class"],
  ["5 Programmable buttons", "Top seller"],
  ["This is an awesome product", "User friendly"],
  ["This is a fantastic product", "Limited edition"],
  ["This is a superb product", "New arrival"]
]

    return (
        <div className="Product">
            <h4>{title}</h4>

            <p>{Description[idx][0]}</p>
             <p>{Description[idx][1]}</p>
             
           
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    )


    // console.log(features)
    // const list= features.map((feature)=><li>{feature}</li>);

    // let isDiscount=price>=30000;
    // let styles={backgroundColor: isDiscount ? "yellow" :""}

    //  return (
    //         <div id="Product" style={styles}>
    //             <h3>{title}</h3>
    //             <p>Price : {price}</p>
    //             <p>{ features.map((feature)=><li>{feature}</li>)}</p>
    //             {price>=30000 && <p>Discount 5%</p>}

    //         </div>
    //     );



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