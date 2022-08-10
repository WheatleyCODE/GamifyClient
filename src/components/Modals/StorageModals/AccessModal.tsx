import React, { FC, useCallback, useState } from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { SelectItem, selectItems } from '../../../consts/accessSelectItems';
import { accessTypeNames } from '../../../consts/accessTypeNames';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { FolderService } from '../../../services/FolderService';
import { Select } from '../../UI/Select';
import { Confirm } from '../Confirm';

export const AccessModal: FC = () => {
  const { setShowAccessModalAC, replaceItemAC } = useActions();
  const { target } = useTypedSelector((state) => state.storage);

  const [value, setValue] = useState<SelectItem>({
    text: accessTypeNames[target.accessType],
    value: target.accessType,
  });

  const closeModal = useCallback(() => {
    setShowAccessModalAC(false);
  }, []);

  const changeAccess = useCallback(async () => {
    if (target.accessType === value.value) {
      setShowAccessModalAC(false);
      return;
    }

    if (target) {
      const res = await FolderService.changeAccessType(target._id, value.value);
      replaceItemAC(target._id, res.data);
      setShowAccessModalAC(false);
    }
  }, [target?._id, target.accessType, value.value]);

  const changeValue = useCallback((val: SelectItem) => {
    setValue(val);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Сохранить" onClose={closeModal} onUpProve={changeAccess}>
      <div className="access-modal">
        <h4 className="access-modal__title">Общий доступ</h4>
        <Select
          selectItems={selectItems}
          onChange={changeValue}
          Icon={BsShieldLock}
          value={value}
          placeholder="Настройки доступа"
        />
      </div>
    </Confirm>
  );
};
