import "./SectionCategory.css";

const SectionCategory = () => {
  return (
    <div className="SectionCategory">
      <div className="ListCategory">
        <h1>Pesca</h1>
        <ul>
          <li className="ItemCategory">Cañas</li>
          <li className="ItemCategory">Reels</li>
          <li className="ItemCategory">Accesorios</li>
        </ul>
        <h2>Filtrar por:</h2>
      </div>
    </div>
  );
};
export default SectionCategory;
