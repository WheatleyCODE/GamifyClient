import React, { FC, memo } from 'react';
import { BsCaretDown } from 'react-icons/bs';

export type StorageSorterItemProps = {
  toggle: boolean;
  onClick: () => void;
  text: string;
};

export const StorageSorterItem: FC<StorageSorterItemProps> = memo(({ toggle, onClick, text }) => {
  return (
    <div aria-hidden onClick={onClick} className="storage-sorter-item">
      {text}
      <BsCaretDown className={`icon ${toggle ? 'up' : 'down'}`} />
    </div>
  );
});
