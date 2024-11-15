// components/MovieCard.tsx
import Image from 'next/image';

type MovieCardProps = {
  title: string;
  year: number;
  imageUrl: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, year, imageUrl }) => {
  return (
    <div className="relative max-w-xs mx-auto bg-[#0E3749] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-72 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 text-white">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;