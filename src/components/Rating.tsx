import { MDBIcon } from 'mdb-react-ui-kit';

type RatingProps = {
  rating: {
    count: number;
    rate: number;
  };
};

export function Rating({ rating }: RatingProps) {
  const decimal = rating.rate % 1;
  const rate = rating.rate - decimal;
  const arr = Array.from(Array(Math.round(rate))).map((_el, i) => (
    <MDBIcon key={i} fas icon="star" />
  ));

  return (
    <div className="ms-auto text-warning py-2">
      {arr} {decimal >= 0.5 && <MDBIcon fas icon="star-half" />} ({rating.count}
      )
    </div>
  );
}
