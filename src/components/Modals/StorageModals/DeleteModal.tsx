import React, { FC, useCallback } from 'react';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Confirm } from '../Confirm';

export const DeleteModal: FC = () => {
  const { setShowDeleteModalAC, deleteItemReq } = useActions();
  const { target } = useTypedSelector((state) => state.storage);

  const closeModal = useCallback(() => {
    setShowDeleteModalAC(false);
  }, []);

  const deleteItem = useCallback(async () => {
    deleteItemReq(target._id, target.type);
    closeModal();
  }, [target._id, target.type]);

  return (
    <Confirm closeText="Отмена" upProveText="Удалить" onClose={closeModal} onUpProve={deleteItem}>
      <div className="delete-modal">
        <h4 className="delete-modal__title">Подтверждение</h4>
        <div className="delete-modal__message">Вы действительно хотите удалить?</div>
        <div className="delete-modal__target-name">{target.name}</div>
      </div>
    </Confirm>
  );
};
