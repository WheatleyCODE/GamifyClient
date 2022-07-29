import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { ContextMenu } from '../components/UI/ContextMenu';
import { StorageAside } from '../components/Storage/StorageAside/StorageAside';
import { StorageHeader } from '../components/Storage/StorageHeader/StorageHeader';
import { StorageLast } from '../components/Storage/StorageLast/StorageLast';
import { StorageSorter } from '../components/Storage/StorageSections/StorageSorter';
import { useClickOutside } from '../hooks/useClickOutside';
import { delay } from '../utils/delay';
import { StorageContextMenu } from '../components/Storage/StorageContextMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { PathRoutes } from '../types/routes';
import { clearParam } from '../utils/clearParam';

export type Coords = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const StoragePage = () => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const { user } = useTypedSelector((state) => state.auth);
  const { fetchItems } = useActions();
  const location = useLocation();

  const showLast = !location.pathname.includes(clearParam(PathRoutes.STORAGE_FOLDER));

  useEffect(() => {
    if (location.pathname === PathRoutes.STORAGE_MY_DRIVE) {
      fetchItems(user.storage);
    }
  }, [location.pathname]);

  const onContext = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    if (show) {
      setShow(false);
      await delay(200);
    }

    const pageHeight = document.documentElement.scrollHeight;
    const normWidth = window.innerWidth / 4;
    const normHeight = window.innerHeight / 8;
    const { platform } = window.navigator;
    const newCoords = {} as { top?: number; right?: number; left?: number; bottom?: number };
    newCoords.top = e.clientY + window.pageYOffset;
    newCoords.left = e.clientX;

    if (e.screenX > normWidth * 3) {
      newCoords.right = 0;

      if (pageHeight > window.innerHeight && platform === 'Win32') {
        newCoords.right = -20;
      }

      newCoords.right += window.innerWidth - e.clientX;
      newCoords.left = undefined;
    }

    if (e.screenY > normHeight * 6) {
      newCoords.top = undefined;
      newCoords.bottom = window.innerHeight - e.clientY - window.pageYOffset;
    }

    const newSetCoords = {
      top: newCoords.top ? `${newCoords.top}px` : undefined,
      left: newCoords.left ? `${newCoords.left}px` : undefined,
      right: newCoords.right ? `${newCoords.right}px` : undefined,
      bottom: newCoords.bottom ? `${newCoords.bottom}px` : undefined,
    };

    setCoords(newSetCoords);
    setShow(true);
  };

  const closeContextMenu = useCallback(() => {
    setShow(false);
  }, []);

  useClickOutside(ref, closeContextMenu);

  return (
    <div onContextMenu={onContext} className="storage-page">
      <StorageHeader />
      {showLast && <StorageLast />}
      <StorageAside />
      <StorageSorter />
      <Outlet />
      <CSSTransition mountOnEnter unmountOnExit in={show} timeout={200} classNames="show-context-menu">
        <ContextMenu bottom={coords?.bottom} top={coords?.top} right={coords?.right} left={coords?.left}>
          <div ref={ref}>
            <StorageContextMenu />
          </div>
        </ContextMenu>
      </CSSTransition>
    </div>
  );
};

export default StoragePage;
