import Product from "./Product.jsx";

function ProductTab() {
    let Options = ["hi-tech", "durable", "fast"];//send using a li tag
    // let Options2={a:"hi-tech",b:"durable",c:"fast"};

    let styles = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
    }
    return (
        <div style={styles}>
            
            <Product   title="Logitech MX Master" idx={0}/>
            <Product title="Apple Pencil {2nd Gen}" idx={1}/>
            <Product    title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Petronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;