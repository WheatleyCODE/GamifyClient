import React, { FC, memo, useCallback } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { storageIcons } from '../../../consts/storageIcons';
import { useActions } from '../../../hooks/useAction';
import { PathRoutes } from '../../../types/routes';
import { ItemTypes } from '../../../types/storage';
import { clearParam } from '../../../utils/clearParam';

export type StorageItemProps = {
  type: ItemTypes;
  name: string;
  id: string;
  active: boolean;
};

export const StorageItem: FC<StorageItemProps> = memo(({ type, name, id, active }) => {
  const MemoIcon = memo(storageIcons[type]);
  const { setCurrentItemAC } = useActions();
  const navigate = useNavigate();

  const setTarget = useCallback(() => {
    if (!active) {
      setCurrentItemAC(id);
    }
  }, [id, active]);

  const openFolder = useCallback(() => {
    if (type === ItemTypes.FOLDER) {
      navigate(`${clearParam(PathRoutes.STORAGE_FOLDER)}/${id}`);
    }
  }, [type, id]);

  const MemeIcon = memo(AiOutlineLine);

  return (
    <div
      aria-hidden
      onDoubleClick={openFolder}
      onClick={setTarget}
      className={`storage-item ${active && 'active'}`}
    >
      <div className="storage-item__name">
        <MemoIcon className="icon" />
        {name}
      </div>
      <div className="storage-item__owner">Я</div>
      <div className="storage-item__date">24.05.22</div>
      <div className="storage-item__size">
        {type === ItemTypes.FOLDER || type === ItemTypes.ALBUM ? <MemeIcon className="line" /> : '5МБ'}
      </div>
    </div>
  );
});
