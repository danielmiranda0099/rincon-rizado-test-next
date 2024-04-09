import "./section-categories-grid.css";

export function SectionCategoriesGrid() {
  return (
    <div className="section-contained-lg categories-grid-container">
      <div className="category-grid-item category-grid-item-1">
        <img src="/images/image1.jpg" />
        <span>Shampoo</span>
      </div>
      <div className="category-grid-item category-grid-item-2">
        <img src="/images/image2.jpg" />
        <span>Acondicionador</span>
      </div>
      <div className="category-grid-item category-grid-item-3">
        <img src="/images/image3.jpg" />
        <span>Aceites</span>
      </div>
      <div className="category-grid-item category-grid-item-4">
        <img src="/images/image4.jpg" />
        <span>Aceesorios</span>
      </div>
      <div className="category-grid-item category-grid-item-5">
        <img src="/images/image5.jpg" />
        <span>Espumas</span>
      </div>
      <div className="category-grid-item category-grid-item-6">
        <img src="/images/image6.jpg" />
        <span>Cremas</span>
      </div>
    </div>
  );
}
