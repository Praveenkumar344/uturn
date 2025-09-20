import React, { useEffect, useState } from 'react';
function ShareButtons({ documentId }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = `${window.location.origin}/${documentId}`;
      setShareUrl(fullUrl);
    }
  }, [documentId]);

  return (
    <div className="flex flex-row max-w-max justify-center items-center md:space-x-3">
      {/* <img src="/assets/icons/share.png" className="w-7 h-7 md:w-10 md:h-10 mt-3 mr-2" /> */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        //className=''
      >
        <img src="/assets/icons/whatsapp.png" className="w-7 h-7 md:w-10 md:h-10 mt-3 mr-2" />
      </a>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/facebook.png" className="w-7 h-7 md:w-10 md:h-10 mt-3 mr-2" />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/linkedin.png" className="w-7 h-7 md:w-10 md:h-10 mt-3 mr-2" />
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/twitter.png" className="w-7 h-7 md:w-10 md:h-10 mt-3" />
      </a>
    </div>
  );
}

export default ShareButtons;
