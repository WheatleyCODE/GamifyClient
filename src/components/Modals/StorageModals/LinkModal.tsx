import React, { FC, useCallback, useRef, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FolderService } from '../../../services/FolderService';
import { AccessType } from '../../../types/storage';
import { Confirm } from '../Confirm';

export const LinkModal: FC = () => {
  const { setShowLinkModalAC, replaceItemAC } = useActions();
  const { target } = useTypedSelector((state) => state.storage);
  const [isCopy, setIsCopy] = useState(false);
  const ref = useRef<null | HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setShowLinkModalAC(false);
  }, []);

  const getLink = useCallback(async () => {
    const res = await FolderService.createAccesLink(target._id);

    if (target.accessType !== AccessType.ACCESS_LINK) {
      const ress = await FolderService.changeAccessType(target._id, AccessType.ACCESS_LINK);
      replaceItemAC(target._id, ress.data);
      return;
    }

    replaceItemAC(target._id, res.data);
  }, []);

  const copyLink = useCallback(() => {
    if (!ref.current) return;
    ref.current.select();
    document.execCommand('copy');
    setIsCopy(true);
  }, []);

  const selectLink = useCallback(() => {
    if (!ref.current) return;
    ref.current.select();
  }, []);

  return (
    <Confirm
      closeText="Отмена"
      upProveText={target.accesLink ? 'Копировать ссылку' : 'Получить ссылку'}
      onClose={closeModal}
      onUpProve={target.accesLink ? copyLink : getLink}
    >
      <div className="link-modal">
        <h4 className="link-modal__title">Ссылка доступа</h4>
        <input
          readOnly
          onClick={selectLink}
          value={target.accesLink || 'Ссылка не сгенерирована'}
          ref={ref}
          className="link-modal__access-link"
        />

        <CSSTransition mountOnEnter unmountOnExit in={isCopy} timeout={180} classNames="show">
          <div className="link-modal__copy-link">
            <AiOutlineCheckCircle /> Ссылка скопирована
          </div>
        </CSSTransition>
      </div>
    </Confirm>
  );
};
