import React, { FC, memo } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { GiOpenFolder } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { PathRoutes } from '../../../../types/routes';
import { clearParam } from '../../../../utils/clearParam';

export type StoragePathItemProps = {
  id: string;
  name: string;
};

export const StoragePathItem: FC<StoragePathItemProps> = memo(({ id, name }) => {
  const ChevronIcon = memo(BiChevronRight);
  const FolderIcon = memo(GiOpenFolder);

  return (
    <Link className="storage-path-item" to={`${clearParam(PathRoutes.STORAGE_FOLDER)}/${id}`}>
      <ChevronIcon className="icon" />

      <div className="storage-path-item__folder">
        <FolderIcon className="icon" />
        {name}
      </div>
    </Link>
  );
});
