interface CardProps {
  img: string;
  rating: string;
  reviewCount: number;
  country: string;
  title: string;
  price: number;
}

export function Card({ img, rating, reviewCount, country, title }: CardProps) {
  return (
    <div className="w-200">
      <div className="relative">
        <img className="rounded-8" src={img} alt="Random image" />
        <span className="absolute left-5 top-5 inline-block upper text-center background-grey-100 px-8 py-2 min-w-75 rounded-3 text-0-8">
          Sold Out
        </span>
      </div>
      <div className="pt-6">
        <div>
          <span className="text-yellow-700">★</span> {rating} ({reviewCount})
          {" • "}
          {country}
        </div>
        <p className="m-0 line-h-1-2">{title}</p>
        <div>
          <strong>From $136</strong> / person
        </div>
      </div>
    </div>
  );
}
