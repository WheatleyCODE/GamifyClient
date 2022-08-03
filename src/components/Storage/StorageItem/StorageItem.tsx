import React, { FC, memo, useCallback, useRef, useState } from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { storageIcons } from '../../../consts/storageIcons';
import { useActions } from '../../../hooks/useAction';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { PathRoutes } from '../../../types/routes';
import { AccessType, ItemTypes } from '../../../types/storage';
import { calcContextMenuCoords, Coords } from '../../../utils/calcContextMenuCoords';
import { clearParam } from '../../../utils/clearParam';
import { delay } from '../../../utils/delay';
import { Portal } from '../../Portal/Portal';
import { ContextMenu } from '../../UI/ContextMenu';
import { FolderContextMenu } from '../ContextMenus/FolderContextMenu';

export type StorageItemProps = {
  type: ItemTypes;
  accessType: AccessType;
  creationDate: number;
  name: string;
  id: string;
  active: boolean;
};

export const StorageItem: FC<StorageItemProps> = memo((props) => {
  const { type, name, id, active, accessType, creationDate } = props;
  const MemoIcon = memo(storageIcons[type]);
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const { setCurrentItemAC } = useActions();
  const navigate = useNavigate();
  const link = `${clearParam(PathRoutes.STORAGE_FOLDER)}/${id}`;

  const setTarget = useCallback(() => {
    if (!active) {
      setCurrentItemAC(id);
    }
  }, [id, active]);

  const openFolder = useCallback(() => {
    if (type === ItemTypes.FOLDER) {
      navigate(link);
    }
  }, [type, link]);

  const MemeIcon = memo(AiOutlineLine);

  const onContext = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!active) setCurrentItemAC(id);

    // if (show) {
    //   setShow(false);
    //   await delay(200);
    // }

    const newSetCoords = calcContextMenuCoords(e);
    setCoords(newSetCoords);
    setShow(true);
  };

  const closeContextMenu = useCallback(() => {
    setShow(false);
  }, []);

  const closeContextMenuA = useCallback(
    (e: Event) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (e.target.dataset.context) {
        setShow(false);
        return;
      }

      setShow(active);
    },
    [active],
  );

  useClickOutside(ref, closeContextMenu);
  useClickOutside(ref, closeContextMenuA, 'contextmenu');

  return (
    <div
      aria-hidden
      onDoubleClick={openFolder}
      onClick={setTarget}
      onContextMenu={onContext}
      className={`storage-item ${active && 'active'}`}
    >
      <div className="storage-item__name">
        <MemoIcon className="icon" />
        {name}
      </div>
      <div className="storage-item__owner">{accessType}</div>
      <div className="storage-item__date">{new Date(creationDate).toLocaleDateString()}</div>
      <div className="storage-item__size">
        {type === ItemTypes.FOLDER || type === ItemTypes.ALBUM ? <MemeIcon className="line" /> : '5МБ'}
      </div>

      <Portal>
        <CSSTransition mountOnEnter unmountOnExit in={show} timeout={200} classNames="show-context-menu">
          <ContextMenu bottom={coords?.bottom} top={coords?.top} right={coords?.right} left={coords?.left}>
            <div ref={ref}>
              <FolderContextMenu onClose={closeContextMenu} link={link} />
            </div>
          </ContextMenu>
        </CSSTransition>
      </Portal>
    </div>
  );
});
