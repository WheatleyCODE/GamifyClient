import React, { FC, useCallback } from 'react';
import { GiFullFolder } from 'react-icons/gi';
import { folderNameValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useValidInput } from '../../hooks/useValidInput';
import { Input } from '../UI/Input';
import { Confirm } from './Confirm';

export const RenameModal: FC = () => {
  const input = useValidInput([folderNameValidator]);
  const { setShowRenameModalAC } = useActions();

  const closeModal = useCallback(() => {
    setShowRenameModalAC(false);
  }, []);

  const rename = useCallback(() => {
    console.log('value');
    setShowRenameModalAC(false);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Переименовать" onClose={closeModal} onUpProve={rename}>
      <div className="create-folder-modal">
        <h4 className="create-folder-modal__title">Переименовать</h4>
        <Input
          Icon={GiFullFolder}
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
