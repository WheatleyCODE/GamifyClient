import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { StorageLastItem } from './StorageLastItem';

export const StorageLast: FC = memo(() => {
  const arr = Array(7).fill(null);
  const [items, setItems] = useState(arr);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((e) => {
      const width = e[0].target.clientWidth;
      const els = Math.floor(width / 190);

      if (items.length !== els) {
        const copy = [...arr];
        copy.splice(els, items.length - els);
        setItems(copy);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className="storage-last">
      {items.map(() => (
        <StorageLastItem />
      ))}
    </div>
  );
});
