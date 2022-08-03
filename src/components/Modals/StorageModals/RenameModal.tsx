import React, { FC, useCallback } from 'react';
import { GiOpenFolder } from 'react-icons/gi';
import { folderNameValidator } from '../../../helpers/validators';
import { useActions } from '../../../hooks/useAction';
import { useValidInput } from '../../../hooks/useValidInput';
import { Input } from '../../UI/Input';
import { Confirm } from '../Confirm';

export const RenameModal: FC = () => {
  const input = useValidInput([folderNameValidator]);
  const { setShowRenameModalAC } = useActions();

  const closeModal = useCallback(() => {
    setShowRenameModalAC(false);
  }, []);

  const rename = useCallback(() => {
    setShowRenameModalAC(false);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Переименовать" onClose={closeModal} onUpProve={rename}>
      <div className="rename-modal">
        <h4 className="rename-modal__title">Переименовать</h4>
        <Input
          Icon={GiOpenFolder}
          value={input.value}
          placeholder="Имя папки"
          onChange={input.onChange}
          onBlur={input.onBlur}
          isError={input.isError}
          validError={input.validError}
        />
      </div>
    </Confirm>
  );
};
