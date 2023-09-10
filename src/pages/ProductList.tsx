import { MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { ProductCard } from '../components/ProductCard';
import { useGetProductsQuery } from '../services/products/productApi';

export default function ProductList() {
  const { data, isLoading, error } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <MDBTypography tag="h3" className="text-center p-3">
        Loading...
      </MDBTypography>
    );
  }

  if (error) {
    return (
      <MDBTypography tag="h3" className="text-center p-3">
        There was an error :(
      </MDBTypography>
    );
  }

  return (
    <MDBContainer>
      <MDBTypography tag="h2" className="text-center p-3">
        Products
      </MDBTypography>
      <MDBRow className="row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {data?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
