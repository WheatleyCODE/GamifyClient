import React, { FC } from 'react';
import {
  GiOpenFolder,
  GiAudioCassette,
  GiVhs,
  GiBoombox,
  GiWaxTablet,
  GiCloudUpload,
  GiDesert,
} from 'react-icons/gi';
import { useActions } from '../../../hooks/useAction';

export type StorageContextMenuProps = {
  onClose: () => void;
};

export const StorageContextMenu: FC<StorageContextMenuProps> = ({ onClose }) => {
  const { setShowCreateFolderAC } = useActions();

  const showCreateFolderModal = () => {
    onClose();
    setShowCreateFolderAC(true);
  };

  return (
    <div className="storage-context-menu">
      <div aria-hidden onClick={showCreateFolderModal} className="storage-context-menu__item">
        <GiOpenFolder className="icon" /> Создать папку
      </div>
      <div className="storage-context-menu__item">
        <GiWaxTablet className="icon" /> Создать заметку
      </div>
      <div className="storage-context-menu__item">
        <GiBoombox className="icon" /> Создать альбом
      </div>
      <hr className="storage-context-menu__hr" />
      <div className="storage-context-menu__item">
        <GiAudioCassette className="icon" /> Загрузить трек
      </div>
      <div className="storage-context-menu__item">
        <GiDesert className="icon" /> Загрузить картинку
      </div>
      <div className="storage-context-menu__item">
        <GiVhs className="icon" /> Загрузить видео
      </div>
      <div className="storage-context-menu__item">
        <GiCloudUpload className="icon" /> Загрузить файлы
      </div>
    </div>
  );
};
