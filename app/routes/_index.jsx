import { useLoaderData } from '@remix-run/react';
import ProductList from '~/components/productPage/listPage/ProductList';
import ProductController from '~/controllers/productController';

const initialApiUrl = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05";

export default function Index() {

  const result = useLoaderData();

  return (
    <>
      <ProductList result={result} />
    </>
  );
}

export const loader = () => {
  return new Promise((resolve, reject) => {
    const productsPromise = ProductController.getProductsList(initialApiUrl);
    productsPromise.then((result) => {
      resolve(result);
    }).catch(() => {
      reject(null);
    });
  })
}