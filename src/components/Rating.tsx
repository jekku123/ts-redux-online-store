import { MDBIcon } from 'mdb-react-ui-kit';

type RatingProps = {
    rating: {
        count: number;
        rate: number;
    };
};

export function Rating({ rating }: RatingProps) {
    const arr = Array.from(Array(Math.round(rating.rate))).map((_el, i) => (
        <MDBIcon key={i} fas icon='star' />
    ));

    return (
        <div className='ms-auto text-warning py-2'>
            {arr} ({rating.count})
        </div>
    );
}
