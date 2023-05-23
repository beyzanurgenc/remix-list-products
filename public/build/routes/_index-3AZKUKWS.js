import {
  buildPriceLabel,
  buildRating,
  productController_default,
  uiConstants_default
} from "/build/_shared/chunk-LBX3RPEH.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-SX4H5FZ7.js";

// browser-route-module:routes/_index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/productPage/listPage/ProductList.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/productPage/listPage/HorizontalProductList.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/common/Slider.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());

// app/components/common/CardView.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CardView = ({ product, onClickCallback }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card card-view h-100 w-100", onClick: () => onClickCallback(product), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-end pe-3", children: buildRating(product.dropRatio) }, void 0, false, {
      fileName: "app/components/common/CardView.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        src: product.imageUrl,
        className: "img-fluid",
        alt: "product"
      },
      void 0,
      false,
      {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 12,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/common/CardView.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "my-auto product-name-label", children: product.name }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 18,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "my-3" }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "price-label", children: buildPriceLabel(product.price) }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 22,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "small text-muted", children: product.followCount ? product.followCount + " " + uiConstants_default.MAIN_PAGE.FOLLOWERS : null }, void 0, false, {
        fileName: "app/components/common/CardView.jsx",
        lineNumber: 24,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/CardView.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/CardView.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};
var CardView_default = CardView;

// app/components/common/Slider.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Slider = ({ products, onClickCallback }) => {
  const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex === 0 ? products.length - 2 : prevIndex - 2
    );
  };
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex === products.length - 2 ? 0 : prevIndex + 2
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index * 2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slider d-flex justify-content-center w-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slider-controls", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "slider-button", onClick: handlePrev, children: "<" }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 27,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 26,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slider-inner d-flex", children: products.slice(currentIndex, currentIndex + 2).map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "col-6 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardView_default, { product, onClickCallback }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 34,
        columnNumber: 29
      }, this) }, index, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 33,
        columnNumber: 25
      }, this)) }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slider-controls", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "slider-button", onClick: handleNext, children: ">" }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/Slider.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slider-dots", children: products.slice(currentIndex, currentIndex + 2).map((_, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "span",
      {
        className: `slider-dot ${index * 2 === currentIndex ? "active" : ""}`,
        onClick: () => handleDotClick(index)
      },
      index,
      false,
      {
        fileName: "app/components/common/Slider.jsx",
        lineNumber: 46,
        columnNumber: 21
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/common/Slider.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/Slider.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
};
var Slider_default = Slider;

// app/components/productPage/listPage/HorizontalProductList.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var HorizontalProductList = ({ products }) => {
  const navigate = useNavigate();
  const onClickProduct = (product) => {
    navigate(`/products/${product.code}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "horizontal-products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Slider_default, { products, onClickCallback: (product) => {
    onClickProduct(product);
  } }, void 0, false, {
    fileName: "app/components/productPage/listPage/HorizontalProductList.jsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/productPage/listPage/HorizontalProductList.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};
var HorizontalProductList_default = HorizontalProductList;

// app/components/productPage/listPage/VerticalProductList.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// app/utils/models/productPage.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var ProductPage = ({
  pageNumber = "",
  productList = []
}) => {
  return {
    pageNumber,
    productList
  };
};

// app/components/productPage/listPage/VerticalProductList.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var VerticalProductList = ({ products }) => {
  const [nextPage, setNextPage] = (0, import_react5.useState)(products.nextUrl);
  const [cachedProducts, setCachedProducts] = (0, import_react5.useState)([]);
  const [currentPage, setCurrentPage] = (0, import_react5.useState)(1);
  const navigate = useNavigate();
  const [productPerPage, setProductPerPage] = (0, import_react5.useState)(products.products);
  (0, import_react4.useEffect)(() => {
    setCachedProducts([...cachedProducts, ProductPage({ pageNumber: currentPage, productList: productPerPage })]);
  }, []);
  const onClickProduct = (product) => {
    navigate(`/products/${product.code}`);
  };
  const onPreviousPageClick = () => {
    setCurrentPage(currentPage - 1);
    setProductPerPage(cachedProducts.find((productDetail) => productDetail.pageNumber === currentPage - 1).productList);
  };
  const onNextPageClick = () => {
    let cachedData = cachedProducts.find((productDetail) => productDetail.pageNumber === currentPage + 1);
    if (cachedData) {
      setCurrentPage(currentPage + 1);
      setProductPerPage(cachedData.productList);
    } else {
      productController_default.getProductsList(nextPage).then((result) => {
        setNextPage(result.nextPage);
        setProductPerPage(result.products);
        setCurrentPage(currentPage + 1);
        setCachedProducts([...cachedProducts, ProductPage({ pageNumber: currentPage + 1, productList: result.products })]);
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "vertical-products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "row col-6 m-auto", children: productPerPage.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardView_default, { product, onClickCallback: (product2) => {
      onClickProduct(product2);
    } }, void 0, false, {
      fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
      lineNumber: 48,
      columnNumber: 25
    }, this) }, index, false, {
      fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex justify-content-center m-auto pagination", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "slider-button", disabled: currentPage === 1, onClick: () => {
        onPreviousPageClick();
      }, children: "<" }, void 0, false, {
        fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "slider-button", onClick: () => {
        onNextPageClick();
      }, children: ">" }, void 0, false, {
        fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/productPage/listPage/VerticalProductList.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this);
};
var VerticalProductList_default = VerticalProductList;

// app/components/productPage/listPage/ProductList.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var ProductList = ({ products }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HorizontalProductList_default, { products: products.horizontalProducts }, void 0, false, {
      fileName: "app/components/productPage/listPage/ProductList.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VerticalProductList_default, { products }, void 0, false, {
      fileName: "app/components/productPage/listPage/ProductList.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/productPage/listPage/ProductList.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};
var ProductList_default = ProductList;

// app/routes/_index.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Index() {
  const products = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProductList_default, { products }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-3AZKUKWS.js.map
