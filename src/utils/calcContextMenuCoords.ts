export type Coords = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export function calcContextMenuCoords(e: React.MouseEvent): Coords {
  const pageHeight = document.documentElement.scrollHeight;
  const normWidth = window.innerWidth / 4;
  const normHeight = window.innerHeight / 10;
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

  if (e.screenY > normHeight * 8) {
    newCoords.top = undefined;
    newCoords.bottom = window.innerHeight - e.clientY - window.pageYOffset;
  }

  return {
    top: newCoords.top ? `${newCoords.top}px` : undefined,
    left: newCoords.left ? `${newCoords.left}px` : undefined,
    right: newCoords.right ? `${newCoords.right}px` : undefined,
    bottom: newCoords.bottom ? `${newCoords.bottom}px` : undefined,
  };
}
