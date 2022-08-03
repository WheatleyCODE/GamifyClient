import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { ContextMenu } from '../components/UI/ContextMenu';
import { StorageAside } from '../components/Storage/StorageAside/StorageAside';
import { StorageHeader } from '../components/Storage/StorageHeader/StorageHeader';
import { StorageLast } from '../components/Storage/StorageLast/StorageLast';
import { StorageSorter } from '../components/Storage/StorageSections/StorageSorter/StorageSorter';
import { useClickOutside } from '../hooks/useClickOutside';
import { delay } from '../utils/delay';
import { StorageContextMenu } from '../components/Storage/ContextMenus/StorageContextMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { PathRoutes } from '../types/routes';
import { clearParam } from '../utils/clearParam';
import { Portal } from '../components/Portal/Portal';
import { CreateFolderModal } from '../components/Modals/СreateFolderModal';
import { calcContextMenuCoords, Coords } from '../utils/calcContextMenuCoords';
import { AccessModal } from '../components/Modals/AccessModal';
import { LinkModal } from '../components/Modals/LinkModal';
import { RenameModal } from '../components/Modals/RenameModal';

const StoragePage = () => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const { user } = useTypedSelector((state) => state.auth);
  const { showCreateFolder, showAccessModal, showLinkModal, showRenameModal } = useTypedSelector(
    (state) => state.storage,
  );
  const { fetchItemsReq } = useActions();
  const location = useLocation();

  const showLast = !location.pathname.includes(clearParam(PathRoutes.STORAGE_FOLDER));

  useEffect(() => {
    if (location.pathname === PathRoutes.STORAGE_MY_DRIVE) {
      fetchItemsReq(user.storage);
    }
  }, [location.pathname]);

  const onContext = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLDivElement)) return;
    if (!e.target.dataset.context) return;

    const newSetCoords = calcContextMenuCoords(e);

    setCoords(newSetCoords);
    setShow(true);
  };

  const closeContextMenu = useCallback(() => {
    setShow(false);
  }, []);

  const closeContextMenuOne = useCallback((e: Event) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (!e.target.dataset.context) setShow(false);
  }, []);

  useClickOutside(ref, closeContextMenu);
  useClickOutside(ref, closeContextMenuOne, 'contextmenu');

  return (
    <div onContextMenu={onContext} className="storage-page">
      <StorageHeader />
      {showLast && <StorageLast />}
      <StorageAside />
      <StorageSorter />
      <Outlet />

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={show} timeout={200} classNames="show-context-menu">
          <ContextMenu bottom={coords?.bottom} top={coords?.top} right={coords?.right} left={coords?.left}>
            <div ref={ref}>
              <StorageContextMenu onClose={() => setShow(false)} />
            </div>
          </ContextMenu>
        </CSSTransition>
      </Portal>

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={showCreateFolder} timeout={200} classNames="show">
          <CreateFolderModal />
        </CSSTransition>
      </Portal>

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={showAccessModal} timeout={200} classNames="show">
          <AccessModal />
        </CSSTransition>
      </Portal>

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={showLinkModal} timeout={200} classNames="show">
          <LinkModal />
        </CSSTransition>
      </Portal>

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={showRenameModal} timeout={200} classNames="show">
          <RenameModal />
        </CSSTransition>
      </Portal>
    </div>
  );
};

export default StoragePage;
