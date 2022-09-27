import React, { FC, memo, useCallback } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import { MdAddLink, MdOutlineOpenWith } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

export type FolderContextMenuProps = {
  link: string;
  onClose: () => void;
};

export const FolderContextMenu: FC<FolderContextMenuProps> = memo(({ link, onClose }) => {
  const { target } = useTypedSelector((state) => state.storage);
  const { setShowAccessModalAC, setShowLinkModalAC, setShowRenameModalAC, setShowDeleteModalAC } =
    useActions();
  const navigate = useNavigate();

  const openFolder = useCallback(() => {
    navigate(link);
    onClose();
  }, [link]);

  const openAccess = useCallback(() => {
    setShowAccessModalAC(true);
    onClose();
  }, []);

  const getLink = useCallback(() => {
    setShowLinkModalAC(true);
    onClose();
  }, []);

  const renameFolder = useCallback(() => {
    setShowRenameModalAC(true);
    onClose();
  }, []);

  const deleteFolder = () => {
    setShowDeleteModalAC(true);
    onClose();
  };

  return (
    <div className="folder-context-menu">
      <div aria-hidden onClick={openFolder} className="folder-context-menu__item">
        <MdOutlineOpenWith className="icon" /> Открыть
      </div>

      <hr className="folder-context-menu__hr" />

      <div aria-hidden onClick={openAccess} className="folder-context-menu__item">
        <AiOutlineUserAdd className="icon" /> Открыть доступ
      </div>

      <div aria-hidden onClick={getLink} className="folder-context-menu__item">
        <MdAddLink className="icon" /> Получить ссылку
      </div>

      <hr className="folder-context-menu__hr" />

      <div aria-hidden onClick={renameFolder} className="folder-context-menu__item">
        <BsPencil className="icon" /> Переименовать
      </div>

      <hr className="folder-context-menu__hr" />

      <div aria-hidden onClick={deleteFolder} className="folder-context-menu__item">
        <BiTrash className="icon" /> Удалить
      </div>
    </div>
  );
});
