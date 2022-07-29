import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { StorageItem } from '../StorageItem/StorageItem';

export const StorageFolder = () => {
  const { fetchChildrens } = useActions();
  const { items, target, loading } = useTypedSelector((state) => state.storage);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      fetchChildrens(params.id);
    }
  }, [params.id]);

  return (
    <div className="storage-folder">
      <CSSTransition mountOnEnter unmountOnExit in={!loading} timeout={200} classNames="show">
        <h1>Hello</h1>
      </CSSTransition>

      {/* {!loading && (
        <TransitionGroup className="todo-list">
          {items.map((item) => (
            <CSSTransition key={item._id} timeout={500} classNames="show">
              <StorageItem
                active={target?._id === item._id}
                id={item._id}
                type={item.type}
                name={item.name}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )} */}
      {/* {items.map((item) => (
        <StorageItem
          key={item._id}
          active={target?._id === item._id}
          id={item._id}
          type={item.type}
          name={item.name}
        />
      ))} */}
    </div>
  );
};
