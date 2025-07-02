"use client";
import React, { useState, useRef } from "react";
import esewa from "@/assets/esewa.jpg";
import bank from "@/assets/bank.jpg";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { MdDownload } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCopied, setIsCopied] = useState(false);
  
  // Create refs for the image elements to access their src
  const esewaRef = useRef(null);
  const bankRef = useRef(null);

  const images = [
    { id: 1, title: "Esewa", category: "Wallet", src: esewa, ref: esewaRef },
    { id: 2, title: "Nabil Bank", category: "Bank", src: bank, ref: bankRef },
  ];

  // Filter images based on selected category
  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
    document.body.style.overflow = "auto";
    setIsCopied(false); // Reset copied state
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setIsCopied(false); // Reset copied state when changing images
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setIsCopied(false); // Reset copied state when changing images
  };

  // Download the QR code image
  const handleDownload = (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      
      // Set the href to the image source
      link.href = selectedImage.src.src;
      
      // Set the download attribute with a filename
      link.download = `${selectedImage.title.toLowerCase().replace(/\s+/g, '-')}-qrcode.jpg`;
      
      // Append to the document and trigger download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  // Share the QR code image
  const handleShare = async (e) => {
    e.stopPropagation();
    if (!selectedImage) return;
    
    try {
      // Fetch the image as a blob
      const response = await fetch(selectedImage.src.src);
      const blob = await response.blob();
      const file = new File([blob], `${selectedImage.title}-qrcode.jpg`, { type: blob.type });
      
      // Use the Web Share API if available
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `${selectedImage.title} QR Code`,
          text: `Scan this ${selectedImage.title} QR code to make a payment`,
          files: [file],
        });
      } else {
        // Fallback: Copy image to clipboard
        const item = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([item]);
        setIsCopied(true);
        
        // Reset the copied state after 3 seconds
        setTimeout(() => setIsCopied(false), 3000);
      }
    } catch (error) {
      console.error('Error sharing image:', error);
      
      // Fallback: Copy the image URL
      try {
        await navigator.clipboard.writeText(selectedImage.src.src);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      } catch (err) {
        alert('Sharing failed. Please try downloading instead.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 pt-25 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Please Scan Me
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a payment method and scan the QR code to complete your transaction
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["All", "Wallet", "Bank"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 font-medium shadow-sm ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square w-full bg-gray-50 flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                    ref={image.ref}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <span className="text-blue-200 text-sm">{image.category}</span>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg bg-black/50 px-4 py-2 rounded-lg">
                  View Full Size
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Popup Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 transition-opacity duration-300 opacity-100"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <GrClose className="h-6 w-6 text-gray-800"/>
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="p-8 flex items-center justify-center bg-gray-50">
                  <div className="relative w-full aspect-square max-w-md">
                    {selectedImage && (
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedImage?.title}
                      </h2>
                      <span className="text-blue-600 font-medium">
                        {selectedImage?.category}
                      </span>
                    </div>
                    <span className="text-gray-500">ID: {selectedImage?.id}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <button 
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <MdDownload className="h-5 w-5"/>
                      Download
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors relative"
                    >
                      <IoShareSocialSharp className="h-5 w-5"/>
                      Share
                      {isCopied && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                          Copied to clipboard!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                onClick={goToPrev}
              >
                <GrCaretPrevious className="h-6 w-6 text-gray-800"/>
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                onClick={goToNext}
              >
                <GrCaretNext className="h-6 w-6 text-gray-800"/>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;