export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }

    let newStyles = {fontweight: "bold", color: "green"};

    let styles = {backgroundColor: "yellow", height:"30px",width:"200px", borderBottomLeftRadius:"14px",borderBottomRightRadius:"14px"};

  return (

    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
