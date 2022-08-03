import React, { FC, useCallback } from 'react';
import { GiFullFolder } from 'react-icons/gi';
import { folderNameValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useValidInput } from '../../hooks/useValidInput';
import { Input } from '../UI/Input';
import { Confirm } from './Confirm';

export const AccessModal: FC = () => {
  const input = useValidInput([folderNameValidator]);
  const { setShowAccessModalAC } = useActions();

  const closeModal = useCallback(() => {
    setShowAccessModalAC(false);
  }, []);

  const openAccess = useCallback(() => {
    console.log('value');
    setShowAccessModalAC(false);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Открыть доступ" onClose={closeModal} onUpProve={openAccess}>
      <div className="create-folder-modal">
        <h4 className="create-folder-modal__title">Открыть доступ</h4>
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
