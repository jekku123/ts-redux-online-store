import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../redux/services/products/productApi';

const List = () => {
    const { data, isLoading, error } = useGetProductsQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return (
            <MDBTypography tag='h3' className='text-center p-3'>
                Loading...
            </MDBTypography>
        );
    }

    if (error) {
        return (
            <MDBTypography tag='h3' className='text-center p-3'>
                There was an error :(
            </MDBTypography>
        );
    }

    return (
        <MDBContainer>
            <MDBTypography tag='h2' className='text-center p-3'>
                List of products
            </MDBTypography>
            <div className='d-flex flex-wrap justify-content-center'>
                {data?.map((product) => (
                    <div key={product.id} className='p-3'>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </MDBContainer>
    );
};

export default List;
