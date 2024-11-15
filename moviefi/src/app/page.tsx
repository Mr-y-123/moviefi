"use client";
import Button from "@/components/Button";
import MovieCard from "@/components/MovieCard";
import Image from "next/image";

export default function Home() {
  const data = true;
  const page = false;

  const onClick = () => {
    console.log("clicked");
  };
  return data ? (
    <div className="min-h-screen  flex items-start justify-center p-[24px] sm:p-[60px] md:p-[120px]">
      <div className="grid grid-cols-12 gap-4 w-full">
        {/* My Movies Section */}
        <div className="col-span-12 flex items-center justify-between">
          <div
            className="border flex items-center gap-[12px] sm:gap-4 cursor-pointer"
            onClick={onClick}
          >
            <h2 className="text-white text-[32px] sm:text-[48px] font-[600] leading-[40px] sm:leading-[56px]">
              My Movies
            </h2>
            <Image
              src="/plus.svg"
              alt="Add Movie"
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] object-contain"
              layout="intrinsic"
              width={32}
              height={32}
            />
          </div>

          {/* Logout Section */}
          <div
            className="border flex items-center gap-4 justify-end cursor-pointer"
            onClick={onClick}
          >
            <p className="text-white text-[16px] hidden sm:block">Logout</p>
            <Image
              src="/logout.svg"
              alt="Logout"
              className="w-[32px] h-[32px] object-contain"
              layout="intrinsic"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Grid Items */}
        <div className="col-span-6 sm:col-span-4 md:col-span-3 border p-4">
          <MovieCard
            title="Movie Title"
            year={2023}
            imageUrl="https://res.cloudinary.com/dlkf4veff/image/upload/c_thumb,w_200,g_face/v1728393496/samples/animals/three-dogs.jpg"
          />
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 border p-4">
          <MovieCard
            title="Movie Title"
            year={2023}
            imageUrl="https://res.cloudinary.com/dlkf4veff/image/upload/c_thumb,w_200,g_face/v1728393496/samples/animals/three-dogs.jpg"
          />
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 border p-4">
          <MovieCard
            title="Movie Title"
            year={2023}
            imageUrl="https://res.cloudinary.com/dlkf4veff/image/upload/c_thumb,w_200,g_face/v1728393496/samples/animals/three-dogs.jpg"
          />
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-3 border p-4">
          <MovieCard
            title="Movie Title"
            year={2023}
            imageUrl="https://res.cloudinary.com/dlkf4veff/image/upload/c_thumb,w_200,g_face/v1728393496/samples/animals/three-dogs.jpg"
          />
        </div>

        {/* Full Width Section */}

        {page && (
          <div className="col-span-12 border p-4">
            <div>Prev</div>
            <div>Numner</div>
            <div>Next</div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-[591px] h-[152px] flex flex-col items-center justify-center space-y-[40px]">
        <h2
          className="text-white sm:text-[48px] font-[600] sm:leading-[80px] text-center align-center 
                      text-[32px]  leading-[40px]"
        >
          Your movie list is empty
        </h2>
        <Button
          type="submit"
          width="w-[380px] sm:w-[202px]"
          height="h-[56px] sm:h-[56px]"
          bgColor="bg-primary"
          className="font-[700] text-white text-[16px] py-[16px] px-[28px]  "
        >
          Add a new movie
        </Button>
      </div>
    </div>
  );
}
