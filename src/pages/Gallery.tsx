
import { useState } from 'react';
import { GraduationCap, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      alt: "School Building",
      category: "Campus"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      alt: "Classroom",
      category: "Academics"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544531586-fbd96cedf4d8?w=800&h=600&fit=crop",
      alt: "Students in Library",
      category: "Academics"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&h=600&fit=crop",
      alt: "Science Laboratory",
      category: "Facilities"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Sports Activities",
      category: "Sports"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      alt: "Annual Function",
      category: "Events"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      alt: "Computer Lab",
      category: "Facilities"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      alt: "School Ground",
      category: "Campus"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      alt: "Art and Craft",
      category: "Activities"
    }
  ];

  const categories = ["All", "Campus", "Academics", "Facilities", "Sports", "Events", "Activities"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Satyam Public School</h1>
                <p className="text-sm text-gray-600">Gallery</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-blue-600 transition-colors">Notices</Link>
              <Link to="/admission" className="text-gray-700 hover:text-blue-600 transition-colors">Admission</Link>
              <Link to="/gallery" className="text-blue-600 font-semibold">Gallery</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">School Gallery</h2>
            <p className="text-xl text-gray-600">Explore our campus, facilities, and memorable moments</p>
          </div>

          {/* Virtual Tour Video */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Virtual School Tour</h3>
              <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                {!showVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <Button
                      onClick={() => setShowVideo(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center space-x-2"
                    >
                      <Play className="h-6 w-6" />
                      <span>Watch Virtual Tour</span>
                    </Button>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Virtual School Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <h4 className="text-lg font-semibold">{image.alt}</h4>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl max-h-full">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -top-12 right-0 text-white border-white hover:bg-white hover:text-black"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <img
                  src={selectedImage}
                  alt="Gallery Image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
