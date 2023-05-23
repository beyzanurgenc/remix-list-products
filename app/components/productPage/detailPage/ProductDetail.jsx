
import HistoyBackButton from '~/components/common/HistoyBackButton';
import Ratings from '~/components/common/Rating';
import uiConstants from '~/utils/constants/uiConstants';
import { buildPriceLabel, buildRating } from '~/utils/helpers/builder';

const ProductDetail = ({ product }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="main-img">
                        <img className="img-fluid" src={product.imageUrl} alt="product" />
                    </div>
                </div>
                <div className="col-7">
                    <div className="main-description px-2">
                        <div className="category-name text-bold">
                            {product.mkName}
                        </div>
                        <div className="product-title text-bold my-3">
                            {product.productName}
                        </div>
                        <div className="badge-section my-4">
                            <p className="badge-label mb-0">
                                {product.badge}
                            </p>
                        </div>
                        <Ratings rating={buildRating(product.rating)} />
                        <div className="buttons d-flex my-5">
                            {
                                product.storageOptions.map((option) => {
                                    return (<a href={""} className="shadow btn m-0 me-2">{option}</a>)
                                })
                            }
                        </div>
                    </div>
                    <div className="price-area my-4">
                        <p className="price-label mb-1">{buildPriceLabel(product.price)}</p>
                    </div>
                    <p className="shipping-label">{product.freeShipping ? uiConstants.MAIN_PAGE.FREE_SHIPPING : uiConstants.MAIN_PAGE.PAID_SHIPPING}</p>
                    <p className="text-secondary">{product.lastUpdate ? uiConstants.MAIN_PAGE.UPDATE + product.lastUpdate : ""}</p>
                </div>
            </div>
            <div className='row d-flex justify-content-end'>
                <div className='col-2'>
                    <HistoyBackButton />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;