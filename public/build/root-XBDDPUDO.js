import {
  uiConstants_default
} from "/build/_shared/chunk-4NL4CUEC.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  useNavigation
} from "/build/_shared/chunk-NJHW5TWT.js";

// browser-route-module:root.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-255VSQKL.css";

// app/components/common/GlobalLoading.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var GlobalLoading = ({ children }) => {
  const { state } = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "spinner h-100 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { class: "spinner-border", role: "status", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { class: "visually-hidden", children: "Loading..." }, void 0, false, {
    fileName: "app/components/common/GlobalLoading.jsx",
    lineNumber: 13,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/components/common/GlobalLoading.jsx",
    lineNumber: 12,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/components/common/GlobalLoading.jsx",
    lineNumber: 10,
    columnNumber: 21
  }, this) : children }, void 0, false, {
    fileName: "app/components/common/GlobalLoading.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
};
var GlobalLoading_default = GlobalLoading;

// app/components/style/app.css
var app_default = "/build/_assets/app-MNL6L3OV.css";

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: app_default
    },
    {
      rel: "stylesheet",
      href: bootstrap_min_default
    }
  ];
};
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Case Study" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GlobalLoading_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: uiConstants_default.ERROR_PAGE.HEADER }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: uiConstants_default.ERROR_PAGE.USER_MESSAGE }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  Root as default,
  links
};
//# sourceMappingURL=/build/root-XBDDPUDO.js.map
