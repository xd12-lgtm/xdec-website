import { HomeIcon, Package, Newspaper, Info } from "lucide-react";
import { Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import Media from "./pages/Media.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import About from "./pages/About.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <Package className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "Category Detail",
    to: "/products/:categoryId",
    icon: <Info className="h-4 w-4" />,
    page: <CategoryDetail />,
  },
  {
    title: "Product Detail",
    to: "/product/:id",
    icon: <Info className="h-4 w-4" />,
    page: <ProductDetail />,
  },
  {
    title: "Media Center",
    to: "/media",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Media />,
  },
  {
    title: "Media Category",
    to: "/media/:categoryId",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Media />,
  },
  {
    title: "News Detail",
    to: "/news/:newsId",
    icon: <Newspaper className="h-4 w-4" />,
    page: <NewsDetail />,
  },
  {
    title: "Catch All",
    to: "*",
    page: <Navigate to="/" replace />,
  },
];
