import React, { FC, useCallback, useState } from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { SelectItem, selectItems } from '../../../consts/accessSelectItems';
import { useActions } from '../../../hooks/useAction';
import { AccessType } from '../../../types/storage';
import { Select } from '../../UI/Select';
import { Confirm } from '../Confirm';

export const AccessModal: FC = () => {
  const { setShowAccessModalAC } = useActions();

  const [value, setValue] = useState<SelectItem>({
    text: 'Только я',
    value: AccessType.PRIVATE,
  });

  const closeModal = useCallback(() => {
    setShowAccessModalAC(false);
  }, []);

  const openAccess = useCallback(() => {
    setShowAccessModalAC(false);
  }, []);

  const changeValue = useCallback((val: SelectItem) => {
    setValue(val);
  }, []);

  return (
    <Confirm closeText="Отмена" upProveText="Сохранить" onClose={closeModal} onUpProve={openAccess}>
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
