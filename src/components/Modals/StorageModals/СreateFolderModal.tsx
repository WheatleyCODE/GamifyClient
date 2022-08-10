import React, { FC, useCallback } from 'react';
import { GiOpenFolder } from 'react-icons/gi';
import { useParams } from 'react-router';
import { folderNameValidator } from '../../../helpers/validators';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useValidInput } from '../../../hooks/useValidInput';
import { Input } from '../../UI/Input';
import { Confirm } from '../Confirm';

export const CreateFolderModal: FC = () => {
  const { setShowCreateFolderAC, createFolderReq } = useActions();
  const { user } = useTypedSelector((state) => state.auth);
  const input = useValidInput([folderNameValidator]);
  const params = useParams();

  const closeModal = useCallback(() => {
    setShowCreateFolderAC(false);
  }, []);

  const createFolder = useCallback(() => {
    if (!input.value || input.isError) return;

    if (params.id) {
      createFolderReq(user.storage, input.value, params.id);
      setShowCreateFolderAC(false);
      return;
    }

    createFolderReq(user.storage, input.value);
    setShowCreateFolderAC(false);
  }, [input.value, input.isError, params.id, user.storage]);

  return (
    <Confirm closeText="Отмена" upProveText="Создать" onClose={closeModal} onUpProve={createFolder}>
      <div className="create-folder-modal">
        <h4 className="create-folder-modal__title">Cоздать папку</h4>
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
