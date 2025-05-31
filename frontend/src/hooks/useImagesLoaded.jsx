import { useState, useEffect } from "react";

const useImagesLoaded = (imageUrls = []) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setLoaded(true);
      return;
    }

    let isCancelled = false;
    let loadedCount = 0;

    const onLoad = () => {
      loadedCount += 1;
      if (!isCancelled && loadedCount === imageUrls.length) {
        setLoaded(true);
      }
    };

    setLoaded(false);

    const images = imageUrls.map((url) => {
      const img = new window.Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = url;
      return img;
    });

    return () => {
      isCancelled = true;
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls.join(",")]);

  return loaded;
};

export default useImagesLoaded;
