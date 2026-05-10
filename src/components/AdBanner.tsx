'use client';

import { useEffect, useRef, useState } from 'react';

interface AdBannerProps {
  id: string;
  format?: string;
  width?: string;
  height?: string;
}

export default function AdBanner({ id, format, width, height }: AdBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isNative = format === 'native';

  const adScript = isNative ? `
    <html>
      <body style="margin:0; padding:0; overflow:hidden;">
        <script async="async" data-cfasync="false" src="https://developdomicile.com/${id}/invoke.js"></script>
        <div id="container-${id}"></div>
      </body>
    </html>
  ` : `
    <html>
      <body style="margin:0; padding:0; overflow:hidden;">
        <script type="text/javascript">
          atOptions = {
            'key' : '${id}',
            'format' : '${format || 'iframe'}',
            'height' : ${parseInt(height || '0')},
            'width' : ${parseInt(width || '0')},
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://developdomicile.com/${id}/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div 
      className="ad-container" 
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        minHeight: height ? `${height}px` : '50px',
        position: 'relative',
        margin: '1rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <span className="ad-label">AD</span>
      <iframe
        srcDoc={adScript}
        width={width || '100%'}
        height={height || '100%'}
        style={{ border: 'none', overflow: 'hidden' }}
        title={`ad-${id}`}
      />
    </div>
  );
}
