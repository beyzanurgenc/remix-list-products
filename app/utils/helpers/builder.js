export const buildPriceLabel = (price) => {
    return price ? (price % 1 === 0 ? price + ".00₺" : price + "₺") : null;
};

export const buildRating = (rating) => {
    return rating ? rating : 0;
};