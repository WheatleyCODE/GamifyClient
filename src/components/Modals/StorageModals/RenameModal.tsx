import React, { FC, useCallback } from 'react';
import { GiOpenFolder } from 'react-icons/gi';
import { folderNameValidator } from '../../../helpers/validators';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useValidInput } from '../../../hooks/useValidInput';
import { FolderService } from '../../../services/FolderService';
import { Input } from '../../UI/Input';
import { Confirm } from '../Confirm';

export const RenameModal: FC = () => {
  const input = useValidInput([folderNameValidator]);
  const { setShowRenameModalAC, replaceItemAC } = useActions();
  const { target } = useTypedSelector((state) => state.storage);

  const closeModal = useCallback(() => {
    setShowRenameModalAC(false);
  }, []);

  const rename = useCallback(async () => {
    if (target && input.value && !input.isError) {
      const res = await FolderService.rename(target._id, input.value);
      replaceItemAC(target._id, res.data);
      setShowRenameModalAC(false);
    }
  }, [target?._id, input.value, input.isError]);

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
