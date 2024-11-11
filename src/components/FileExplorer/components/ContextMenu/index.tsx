import { useCallback, useEffect, useRef } from "react";
import {
  CONTEXT_MENU_OPTIONS,
  ACTION_TYPE_CUT,
  ACTION_TYPE_DELETE,
  ACTION_TYPE_RENAME,
} from "../../../../constants/contextMenu";
import { ContextMenuState } from "../../../../interfaces";

import "./ContextMenu.css";

interface ContextMenuProps {
  contextMenu: ContextMenuState;
  closeContextMenu: () => void;
}

const ContextMenu = ({ contextMenu, closeContextMenu }: ContextMenuProps) => {
  const { selectedFileName } = contextMenu;

  const contextContainRef = useRef<HTMLUListElement>(null);

  const handleContextMenuOptionClick = (
    e: React.MouseEvent<HTMLUListElement>
  ) => {
    const actionType = (e.target as HTMLElement).dataset.action;

    const actions = {
      [ACTION_TYPE_CUT]: () => {
        console.log(`CUT - ${selectedFileName}`);
      },
      [ACTION_TYPE_DELETE]: () => {
        console.log(`DELETE - ${selectedFileName}`);
      },
      [ACTION_TYPE_RENAME]: () => {
        console.log(`RENAME - ${selectedFileName}`);
      },
    };

    if (actionType && actions[actionType]) {
      actions[actionType]();
    }
    closeContextMenu();
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        contextContainRef.current &&
        !contextContainRef.current.contains(e.target as Node)
      ) {
        closeContextMenu();
      }
    },
    [closeContextMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ul
      ref={contextContainRef}
      className="contextMenu"
      style={{
        left: contextMenu?.contextMenuLeft,
        top: contextMenu?.contextMenuTop,
      }}
      onClick={handleContextMenuOptionClick}
    >
      {CONTEXT_MENU_OPTIONS.map((option) => {
        return (
          <li key={option.action} data-action={option.action}>
            {option.label}
          </li>
        );
      })}
    </ul>
  );
};

export default ContextMenu;
