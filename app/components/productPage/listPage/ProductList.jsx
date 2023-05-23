import HorizontalProductList from "./HorizontalProductList";
import VerticalProductList from "./VerticalProductList";

const ProductList = ({ products }) => {
    return (
        <div className="app">
            <HorizontalProductList products={products.horizontalProducts} />
            <VerticalProductList products={products} />
        </div>
    );
};

export default ProductList;