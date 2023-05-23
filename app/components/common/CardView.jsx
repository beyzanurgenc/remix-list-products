import uiConstants from "~/utils/constants/uiConstants";
import { buildPriceLabel } from "~/utils/helpers/builder";

const CardView = ({ product, onClickCallback }) => {
    return (
        <div className="card card-view h-100 w-100" onClick={() => onClickCallback(product)}>
            <div className="p-3 d-flex justify-content-center">
                <img src={product.imageUrl}
                    className="img-fluid"
                    alt="product" />
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-start">
                    <p className="my-auto product-name-label">{product.name}</p>
                </div>
                <hr className="my-3" />
                <div className="d-flex justify-content-between">
                    <p className="price-label">{buildPriceLabel(product.price)}</p>
                </div>
                <p className="small text-muted">{product.followCount ? product.followCount + " " + uiConstants.MAIN_PAGE.FOLLOWERS : null}</p>
            </div>
        </div>
    );
};

export default CardView;