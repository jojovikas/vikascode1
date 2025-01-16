import React, { useState, useEffect } from "react";

const DoctorHead = () => {
  // List of images
  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/037/814/719/small_2x/ai-generated-autumn-leaves-in-the-forest-nature-background-photo.jpg",
    "https://img.freepik.com/free-vector/copy-space-bokeh-spring-lights-background_52683-55649.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/red-and-blue-pillars-wallpaper-abstract-background-free-image.jpeg?w=600&quality=80",
    "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg",
    "https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=612x612&w=0&k=20&c=mMG_-IOsy9IOupqSDvEbeqduD-LGZ3bBp1fZ5pXoIwA=",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Functions to handle manual slideshow navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-10">
      <div className="w-[95%] mx-auto bg-slate-500 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Column 1: Image Slideshow */}
        <div className="relative m-4 ">
          <div className="overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
            onClick={nextSlide}
          >
            ❯
          </button>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer border-2 ${
                  currentIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-center justify-center">
          <h2 className="text-white">Second Column</h2>
        </div>
      </div>
    </section>
  );
};

export default DoctorHead;
