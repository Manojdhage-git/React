import Product from "./Product.jsx";

function ProductTab(){
    let Options=["hi-tech","durable","fast"];//send using a li tag
    // let Options2={a:"hi-tech",b:"durable",c:"fast"};
    return(
        <>
        <Product title="Phone" price="30,000" features={Options}/>
         <Product title="Laptop" price="60,000" features={Options} />
          <Product title="Pen" price={10} features={Options}/>
        </>
    )
}

export default ProductTab;