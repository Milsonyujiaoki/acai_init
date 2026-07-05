import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, X, Play, Pause } from 'lucide-react';
import { Button } from './components/ui/button';
import imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E0 from "figma:asset/bb960569a13fb80084c423bbca10aee880764ad8.png";
import imgImage20229 from "figma:asset/9f3f823856711a6cc473ce122e52b2ada545b47d.png";
import imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E2 from "figma:asset/c4ae53ed53b38e5e3240fc3554b10e152c63e010.png";
import imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E3 from "figma:asset/d16e5c3c9e0908fec2cffb3ba60ab19f4d478e54.png";
import imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E4 from "figma:asset/9519ebe200eba8bb2fa79f390b8944fca22b89b9.png";

const defaultImages = [
  imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E0,
  imgImage20229,
  imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E2,
  imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E3,
  imgAnanasAnchousivAdjustUntilItFeelsLikeYouChaos20De84E75E99D34E4595Fb631D89D7930E4
];

const transitionConfig = {
  duration: 1.5,
  ease: [0.25, 0.1, 0.25, 1] // cubic-bezier for ease-in-out-cubic
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [images, setImages] = useState<string[]>(defaultImages);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setScrollIndex((prev) => prev + 1);
      }, 4000); // 1.5s transition + 2.5s pause
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, images.length]);

  // Reset scroll position when we reach the end of the duplicated sequence
  useEffect(() => {
    if (scrollIndex === images.length) {
      const timer = setTimeout(() => {
        setScrollIndex(0);
      }, 1500); // Wait for transition to complete
      return () => clearTimeout(timer);
    }
  }, [scrollIndex]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    
    if (files.length === 0) return;
    
    // Limit to 5 images
    const selectedFiles = files.slice(0, 5);
    
    const newImages = selectedFiles.map(file => URL.createObjectURL(file));
    
    // Clean up old URLs if they were user uploaded
    images.forEach(img => {
      if (img.startsWith('blob:')) {
        URL.revokeObjectURL(img);
      }
    });
    
    setImages(newImages);
    setActiveIndex(0);
    setScrollIndex(0);
    setShowUpload(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetToDefault = () => {
    // Clean up user uploaded URLs
    images.forEach(img => {
      if (img.startsWith('blob:')) {
        URL.revokeObjectURL(img);
      }
    });
    
    setImages(defaultImages);
    setActiveIndex(0);
    setScrollIndex(0);
    setShowUpload(false);
  };

  // Create seamless infinite scroll by duplicating images
  const infiniteImages = [...images, ...images];

  return (
    <div className="bg-black relative w-screen h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute backdrop-blur-[27.15px] backdrop-filter bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-start left-0 rounded-[40px] top-0 h-full">
        <motion.div 
          className="flex h-full"
          animate={{ x: -scrollIndex * 100 + 'vw' }}
          transition={scrollIndex === 0 ? { duration: 0 } : transitionConfig}
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="bg-center bg-cover bg-no-repeat h-full shrink-0 w-screen"
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Thumbnail Container - Autolayout hugging content with 80vw max width */}
      <div 
        className="absolute backdrop-blur-[27.15px] backdrop-filter bg-[rgba(0,0,0,0.2)] box-border flex items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{
          gap: 'min(1.8vh, calc(80vw / 43.3))', // 15% of thumbnail height
          padding: 'min(1.8vh, calc(80vw / 43.3))', // 15% of thumbnail height
          borderRadius: 'min(2.16vh, calc(80vw / 36.11))', // 18% of thumbnail height
          maxWidth: '80vw'
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="bg-center bg-cover bg-no-repeat shrink-0"
            style={{ 
              backgroundImage: `url('${image}')`,
              height: 'min(12vh, calc(80vw / 6.5))', // Scale height to fit within 80vw constraint
              borderRadius: 'min(1.2vh, calc(80vw / 65))' // 10% of thumbnail height
            }}
            animate={{
              width: activeIndex === index 
                ? 'min(15.6vh, calc(80vw / 5))' // 1.3:1 aspect ratio, scaled
                : 'min(12vh, calc(80vw / 6.5))', // 1:1 aspect ratio, scaled
              aspectRatio: activeIndex === index ? '1.3' : '1'
            }}
            transition={transitionConfig}
          />
        ))}
      </div>

      {/* Background overlay matching original design */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat -z-10"
        style={{ backgroundImage: `url('${images[activeIndex]}')` }}
      />

      {/* Upload Controls */}
      <div className="absolute top-6 right-6 flex gap-3 z-50">
        <Button
          onClick={handlePlayPause}
          variant="secondary"
          size="sm"
          className="backdrop-blur-md bg-white/20 text-white border-white/20 hover:bg-white/30"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <Button
          onClick={() => setShowUpload(!showUpload)}
          variant="secondary"
          size="sm"
          className="backdrop-blur-md bg-white/20 text-white border-white/20 hover:bg-white/30"
        >
          <Upload className="h-4 w-4" />
        </Button>

        {showUpload && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute top-full right-0 mt-2 backdrop-blur-md bg-white/90 rounded-lg p-4 shadow-lg border border-white/20 min-w-[280px]"
          >
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Upload Images</h3>
              <p className="text-sm text-gray-600">Select up to 5 images for your carousel</p>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/90 file:cursor-pointer cursor-pointer"
              />
              
              <div className="flex gap-2">
                <Button
                  onClick={resetToDefault}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  Reset to Default
                </Button>
                <Button
                  onClick={() => setShowUpload(false)}
                  variant="ghost"
                  size="sm"
                  className="px-3"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}