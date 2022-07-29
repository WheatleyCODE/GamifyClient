import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageDrive = () => {
  const { items, target } = useTypedSelector((state) => state.storage);

  return (
    <div className="storage-drive">
      {/* <TransitionGroup>
        {items.map((item) => (
          <CSSTransition key={item._id} timeout={150} classNames="show">
            <StorageItem active={target?._id === item._id} id={item._id} type={item.type} name={item.name} />
          </CSSTransition>
        ))}
      </TransitionGroup> */}
      {items.map((item) => (
        <StorageItem
          active={target?._id === item._id}
          id={item._id}
          key={item._id}
          type={item.type}
          name={item.name}
        />
      ))}
    </div>
  );
};
