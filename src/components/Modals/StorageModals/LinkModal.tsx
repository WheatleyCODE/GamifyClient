import React, { FC, useCallback } from 'react';
import { useActions } from '../../../hooks/useAction';
import { useValidInput } from '../../../hooks/useValidInput';
import { Confirm } from '../Confirm';

export const LinkModal: FC = () => {
  const { setShowLinkModalAC } = useActions();

  const closeModal = useCallback(() => {
    setShowLinkModalAC(false);
  }, []);

  const getLink = useCallback(() => {
    setShowLinkModalAC(false);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Копировать ссылку" onClose={closeModal} onUpProve={getLink}>
      <div className="link-modal">
        <h4 className="link-modal__title">Получить ссылку</h4>
      </div>
    </Confirm>
  );
};
