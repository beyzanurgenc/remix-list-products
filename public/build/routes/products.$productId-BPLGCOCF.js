import {
  buildPriceLabel,
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
  useLoaderData
} from "/build/_shared/chunk-SX4H5FZ7.js";

// browser-route-module:routes/products.$productId.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/products.$productId.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/productPage/detailPage/ProductDetail.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProductDetail = ({ product }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "img-fluid", src: product.imageUrl, alt: "product" }, void 0, false, {
      fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
      lineNumber: 12,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
      lineNumber: 11,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-description px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "category-name text-bold", children: product.mkName }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 17,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "product-title text-bold my-3", children: product.productName }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 20,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "badge-section my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "badge-label mb-0", children: product.badge }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 24,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 23,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary mb-1", children: product.rating }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 28,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "buttons d-flex my-5", children: product.storageOptions.map((option) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#" + option, className: "shadow btn m-0 me-2", children: option }, void 0, false, {
            fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
            lineNumber: 32,
            columnNumber: 45
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
          lineNumber: 29,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "price-area my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "price-label mb-1", children: buildPriceLabel(product.price) }, void 0, false, {
        fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
        lineNumber: 37,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "shipping-label", children: product.freeShipping ? uiConstants_default.MAIN_PAGE.FREE_SHIPPING : uiConstants_default.MAIN_PAGE.PAID_SHIPPING }, void 0, false, {
        fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary", children: product.lastUpdate ? uiConstants_default.MAIN_PAGE.UPDATE + product.lastUpdate : "" }, void 0, false, {
        fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/productPage/detailPage/ProductDetail.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};
var ProductDetail_default = ProductDetail;

// app/routes/products.$productId.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Product() {
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductDetail_default, { product: loaderData }, void 0, false, {
    fileName: "app/routes/products.$productId.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/products.$productId.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Product as default
};
//# sourceMappingURL=/build/routes/products.$productId-BPLGCOCF.js.map
