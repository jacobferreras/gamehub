import { useState, useEffect } from "react";

const useImagesLoaded = (imageUrls = []) => {
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    setLoadedCount(0);
    if (imageUrls.length === 0) return;

    let isCancelled = false;

    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        if (!isCancelled) setLoadedCount((c) => c + 1);
      };
      img.src = url;
    });

    return () => {
      isCancelled = true;
    };
  }, [imageUrls.join(",")]);

  return loadedCount === imageUrls.length && imageUrls.length > 0;
};

export default useImagesLoaded;
