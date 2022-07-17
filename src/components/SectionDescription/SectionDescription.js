import "./SectionDescription.css";

export default function SectionDescription() {
  return (
    <div className="sectionDescription">
      <h1>Caña Lexus Chaiten</h1>
      <img
        src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/848/361/products/lexus-chaiten1-1231aabdb395b54b0416316186788847-480-0.jpg"
        alt="CañaLexusChaiten"
      />
      <ul className="SizeList">
        <div className="ListContainer">
          <li className="Size">2.10</li>
          <li className="Size">2.40</li>
          <li className="Size">2.71</li>
          <li className="Size">3.00</li>
          <li className="Size">3.20</li>
        </div>
      </ul>
      <p className="Description">ASD</p>
      <h2>$15000</h2>
      <button className="BuyButton">Agregar al carrito</button>
    </div>
  );
}
