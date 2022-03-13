## lazy load image

#### **`useIntersection.js`**
```
import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();

let observer;

function handleIntersections(entries) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb();
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: '100px',
      threshold: '0.15',
    });
  }
  return observer;
}

export function useIntersection(elem, callback) {
  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
}
```

#### **`PostImage.js`**
```
import { useEffect, useRef, useState } from "react";
import styles from "./postImage.module.scss";
import useIntersection from "./useIntersection";

type PostImageProps = {
  url: string
}

const PostImage = (props: PostImageProps) => {
  const { url } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleLoad = () => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    }
    img.src = url;
  }

  useEffect(() => {
    isInView && handleLoad()
  }, [isInView]);

  return (
    <div className={styles['post-image-wrap']} ref={imgRef}>
      {isInView && <div 
        className={styles['post-image-placeholder']}
        style={!loaded ? {} : {
          backgroundImage: `url(${url})`
        }}
      ></div>}
    </div>
  )
}

export default PostImage;
```

#### **`postImage.module.scss`**
```
.post-image-wrap {
  background-color: #f1f1f1;
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 4px;
}

.post-image-placeholder {
  position:  absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 4px;
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
}
```