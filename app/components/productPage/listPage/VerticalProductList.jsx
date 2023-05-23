import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import CardView from "~/components/common/CardView";
import PaginationButtons from "~/components/common/PaginationButtons";
import ProductController from "~/controllers/productController";
import { ProductPageModel } from "~/utils/models/productPage";

const VerticalProductList = ({ result }) => {
    const [nextPage, setNextPage] = useState(result.nextUrl);
    const [cachedProducts, setCachedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [productPerPage, setProductPerPage] = useState(result.products);

    useEffect(() => {
        setCachedProducts([...cachedProducts, ProductPageModel({ pageNumber: currentPage, productList: productPerPage })]);
    }, []);

    const onClickProduct = (product) => {
        navigate(`/products/${product.code}`)
    };

    const onPreviousPageClick = () => {
        setCurrentPage(currentPage - 1);
        setProductPerPage(cachedProducts.find(productDetail => productDetail.pageNumber === currentPage - 1).productList);
    };

    const onNextPageClick = () => {
        let cachedData = cachedProducts.find(productDetail => productDetail.pageNumber === currentPage + 1);
        if (cachedData) {
            setCurrentPage(currentPage + 1);
            setProductPerPage(cachedData.productList);
        } else {
            ProductController.getProductsList(nextPage).then((result) => {
                setNextPage(result.nextPage);
                setProductPerPage(result.products);
                setCurrentPage(currentPage + 1);
                setCachedProducts([...cachedProducts, ProductPageModel({ pageNumber: currentPage + 1, productList: result.products })]);
            });
        }
    };

    return (
        <div className="vertical-products">
            <div className="row col-6 m-auto">
                {productPerPage.map((product, index) => (
                    <div className="col-6 p-4" key={index}>
                        <CardView
                            product={product}
                            onClickCallback={(product) => { onClickProduct(product) }} />
                    </div>
                ))}
            </div>
            <PaginationButtons
                isNextDisabled={!nextPage && currentPage === cachedProducts.length}
                isPrevDisabled={currentPage === 1}
                onPreviousPageClickCallback={() => { onPreviousPageClick() }}
                onNextPageClickCallback={() => { onNextPageClick() }}
            />
        </div >
    );
};

export default VerticalProductList;