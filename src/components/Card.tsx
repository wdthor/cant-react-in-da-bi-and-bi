interface CardProps {
  img: string;
  rating: number;
  reviewCount: number;
  location: string;
  title: string;
  price: number;
  openSpots: number;
}

export function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}: CardProps) {
  let badgeText;

  if (openSpots === 0) {
    badgeText = "Sold Out";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="w-200">
      <div className="relative">
        <img className="rounded-8" src={img} alt="Random image" />
        {badgeText && (
          <span className="absolute left-5 top-5 inline-block upper text-center background-grey-100 px-8 py-2 min-w-75 rounded-3 text-0-8">
            {badgeText}
          </span>
        )}
      </div>
      <div className="pt-6">
        <div>
          <span className="text-yellow-700">★</span> {rating} ({reviewCount})
          {" • "}
          {location}
        </div>
        <p className="m-0 line-h-1-2">{title}</p>
        <div>
          <strong>From ${price}</strong> / person
        </div>
      </div>
    </div>
  );
}
