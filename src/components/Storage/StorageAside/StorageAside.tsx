import React, { FC, useCallback, useRef, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Button } from '../../UI/Button';
import { ContextMenu } from '../../UI/ContextMenu';
import { StorageContextMenu } from '../ContextMenus/StorageContextMenu';
import { StorageAsideMenu } from './StorageAsideMenu';
import { StorageSize } from './StorageSize';

export const StorageAside: FC = () => {
  const { diskSpace, usedSpace } = useTypedSelector((state) => state.storage);
  const [show, setShow] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const closeContextMenu = useCallback(() => {
    setShow(false);
  }, []);

  const openContextMenu = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShow(true);
  }, []);

  useClickOutside(ref, closeContextMenu);
  useClickOutside(ref, closeContextMenu, 'contextmenu');

  return (
    <div className="storage-aside">
      <div className="storage-aside__create">
        <Button onClick={openContextMenu} Icon={BsPlusLg} type="outline" radius="rounded" text="Создать" />
        <CSSTransition mountOnEnter unmountOnExit in={show} timeout={200} classNames="show-context-menu">
          <ContextMenu top="0" right="0">
            <div ref={ref}>
              <StorageContextMenu onClose={() => setShow(false)} />
            </div>
          </ContextMenu>
        </CSSTransition>
      </div>
      <StorageAsideMenu />
      <StorageSize diskSpace={diskSpace} usedSpace={usedSpace} />
    </div>
  );
};
