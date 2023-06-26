import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JXSComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JXSComponent> | JXSComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LaztPage2" */"../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LaztPage3" */"../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    to: "/lazyLayout",
    path: "/lazyLayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No-Lazy",
  },
];
