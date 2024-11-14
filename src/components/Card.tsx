interface CardProps {
  id: number;
  title: string;
  price: number;
  coverImg: (imgId: number) => string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
}

export function Card(item: CardProps) {
  let badgeText;

  if (item.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (item.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="w-200">
      <div className="relative">
        <img
          className="rounded-8"
          src={item.coverImg(item.id + item.price)}
          alt="Random image"
        />
        {!!badgeText && (
          <span className="absolute left-5 top-5 inline-block px-8 py-2 min-w-75 upper text-center badge-bg-color badge-color rounded-3 text-0-8">
            {badgeText}
          </span>
        )}
      </div>
      <div className="pt-6">
        <div>
          <span className="star-color">★</span> {item.stats.rating} (
          {item.stats.reviewCount}){" • "}
          {item.location}
        </div>
        <p className="m-0 line-h-1-2">{item.title}</p>
        <div>
          <strong>From ${item.price}</strong> / person
        </div>
      </div>
    </div>
  );
}
