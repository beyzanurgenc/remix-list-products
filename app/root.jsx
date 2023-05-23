import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";
import GlobalLoading from "./components/common/GlobalLoading";
import styles from "./components/style/app.css";
import uiConstants from "./utils/constants/uiConstants";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: bootstrapCSS,
    },
  ];
};

export default function Root() {
  return (
    <html lang="en">
      <head>
        <title>Case Study</title>
        <Links />
        <Meta />
      </head>
      <body>
        <GlobalLoading>
          <Outlet />
        </GlobalLoading>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <title>{uiConstants.ERROR_PAGE.HEADER}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {uiConstants.ERROR_PAGE.USER_MESSAGE}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}