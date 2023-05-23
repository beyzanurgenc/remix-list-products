import { useLoaderData } from '@remix-run/react';
import ProductDetail from '~/components/productPage/detailPage/ProductDetail';
import ProductController from '~/controllers/productController';

export default function Product() {

  const loaderData = useLoaderData();

  return (
    <>
      <ProductDetail product={loaderData} />
    </>
  );
}

export const loader = ({ params }) => {
  return new Promise((resolve, reject) => {
    const productsPromise = ProductController.getProductById(params.productId);
    productsPromise.then((product) => {
      resolve(product.result);
    }).catch(() => {
      reject(null);
    });
  })
}