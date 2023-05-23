import { useNavigate } from "@remix-run/react";
import Slider from "~/components/common/Slider";

const HorizontalProductList = ({ products }) => {
    const navigate = useNavigate();

    const onClickProduct = (product) => {
        navigate(`/products/${product.code}`)
    };

    return (
        <div className="horizontal-products">
            <Slider products={products} onClickCallback={(product) => { onClickProduct(product) }} />
        </div>
    );
};

export default HorizontalProductList;