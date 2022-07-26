import React from 'react';
import { BsCaretDown } from 'react-icons/bs';

export const StorageSorter = () => {
  return (
    <div className="storage-sorter">
      <div className="storage-sorter__name">
        Название <BsCaretDown className="icon" />
      </div>
      <div className="storage-sorter__owner">
        Владелец <BsCaretDown className="icon" />
      </div>
      <div className="storage-sorter__date">
        Дата <BsCaretDown className="icon" />
      </div>
      <div className="storage-sorter__size">
        Размер <BsCaretDown className="icon" />
      </div>
    </div>
  );
};
