import Image from "next/image";

type RightImageHolderProps = {
  imageUrl: string; // Path to the image
  alt: string; // Alternate text for the image
};

export default function RightImageHolder({ imageUrl, alt }: RightImageHolderProps) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imageUrl}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out hover:scale-105"
        priority
      />
    </div>
  );
}
