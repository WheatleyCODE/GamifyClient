import { AiFillFile } from 'react-icons/ai';
import { GiAudioCassette, GiBoombox, GiDesert, GiOpenFolder, GiVhs, GiWaxTablet } from 'react-icons/gi';
import { ItemTypes } from '../types/storage';

export const storageIcons = {
  [ItemTypes.ALBUM]: GiBoombox,
  [ItemTypes.FILE]: AiFillFile,
  [ItemTypes.FOLDER]: GiOpenFolder,
  [ItemTypes.IMAGE]: GiDesert,
  [ItemTypes.NOTE]: GiWaxTablet,
  [ItemTypes.TRACK]: GiAudioCassette,
  [ItemTypes.VIDEO]: GiVhs,
};
