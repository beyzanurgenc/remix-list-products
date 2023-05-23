import { useLoaderData } from '@remix-run/react';
import ProductList from '~/components/productPage/listPage/ProductList';
import ProductController from '~/controllers/productController';

export default function Index() {

  const products = useLoaderData();

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export const loader = () => {
  return new Promise((resolve, reject) => {
    const productsPromise = ProductController.getProductsList("https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05");
    productsPromise.then((products) => {
      resolve(products);
    }).catch(() => {
      reject(null);
    });
  })
}