import React, { FC, useCallback } from 'react';
import { GiFullFolder } from 'react-icons/gi';
import { folderNameValidator } from '../../helpers/validators';
import { useActions } from '../../hooks/useAction';
import { useValidInput } from '../../hooks/useValidInput';
import { Input } from '../UI/Input';
import { Confirm } from './Confirm';

export const LinkModal: FC = () => {
  const input = useValidInput([folderNameValidator]);
  const { setShowLinkModalAC } = useActions();

  const closeModal = useCallback(() => {
    setShowLinkModalAC(false);
  }, []);

  const getLink = useCallback(() => {
    console.log('value');
    setShowLinkModalAC(false);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Копировать ссылку" onClose={closeModal} onUpProve={getLink}>
      <div className="create-folder-modal">
        <h4 className="create-folder-modal__title">Получить ссылку</h4>
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
