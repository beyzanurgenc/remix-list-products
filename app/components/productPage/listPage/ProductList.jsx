import HorizontalProductList from "./HorizontalProductList";
import VerticalProductList from "./VerticalProductList";

const ProductList = ({ result }) => {
    return (
        <div className="app">
            <HorizontalProductList products={result.horizontalProducts} />
            <VerticalProductList result={result} />
        </div>
    );
};

export default ProductList;