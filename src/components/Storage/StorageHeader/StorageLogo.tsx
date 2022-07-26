import React from 'react';
import { GiOpenTreasureChest } from 'react-icons/gi';

export const StorageLogo = () => {
  return (
    <div className="storage-logo">
      <div className="storage-logo__icon">
        <GiOpenTreasureChest />
      </div>
      <span className="storage-logo__text">Хранилище</span>
    </div>
  );
};
