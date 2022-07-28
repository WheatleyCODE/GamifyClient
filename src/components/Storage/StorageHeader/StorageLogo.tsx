import React, { FC, memo } from 'react';
import { GiOpenTreasureChest } from 'react-icons/gi';

export const StorageLogo: FC = memo(() => {
  const MemoIcon = memo(GiOpenTreasureChest);

  return (
    <div className="storage-logo">
      <div className="storage-logo__icon">
        <MemoIcon />
      </div>
      <span className="storage-logo__text">Хранилище</span>
    </div>
  );
});
