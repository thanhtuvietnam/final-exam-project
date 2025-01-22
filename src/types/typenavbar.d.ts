// types/navbarTypes.d.ts

import { IconType } from 'react-icons';
import React, { Dispatch, SetStateAction } from 'react';

/**
 * Direction type for animations or layout
 */
export type DirType = 'r' | 'l' | string | null;

/**
 * Position interface for dynamic styling
 */
export interface Position {
  left: number;
  opacity: number;
  width: number;
}

/**
 * Basic Menu Item interface
 */
export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  icon?: IconType;
  category?: string;
  slug?: string;
  page?: number;
  param?: string;
}

/**
 * Extended Menu Item with Submenus
 */
export interface TabItem extends MenuItem {
  subMenus?: MenuItem[];
}

/**
 * State interface for managing Tab and Submenu states
 */
export interface TabState {
  dir: DirType;
  selected: string | null;
  subMenuActiveId: string | null;
}

/**
 * Props for Tab Component
 */
export interface TabProps {
  handleSetTabState: (val: string | null) => void;
  setPosition: (position: Position) => void;
  setTabState: Dispatch<SetStateAction<TabState>>;
  tab: TabItem;
  tabState: TabState;
}

/**
 * Props for Submenu Lists Component
 */
export interface SubmenuListsProps {
  handleSetTabState: (state: string | null) => void;
  refLi: React.RefObject<HTMLLIElement | null>;
  dir: DirType;
  setSubMenuActiveId: Dispatch<SetStateAction<string | null>>;
  subMenuActiveId: string | null;
  tab: {
    subMenus: MenuItem[];
  };
}

/**
 * Props for Sidebar Content Component
 */
export interface SidebarContentProps {
  clickEffect: string | null;
  setClickEffect: React.Dispatch<React.SetStateAction<string | null>>;
  clickSubMenuEffect: string | null;
  setClickSubMenuEffect: React.Dispatch<React.SetStateAction<string | null>>;
}
// import React, { Dispatch, SetStateAction } from 'react';
// import { IconType } from 'react-icons';
//
// type DirType = 'r' | 'l' | string | null;
//
// export type Position = {
//   left: number;
//   opacity: number;
//   width: number;
// };
//
// export interface MenuItem {
//   id: string;
//   label: string;
//   path?: string;
//   icon?: IconType;
// }
//
// export interface TabItem extends MenuItem {
//   subMenus?: MenuItem[];
// }
//
// export interface TabState {
//   dir: DirType;
//   selected: string | null;
//   clickEffect: string | null;
//   subMenuActiveId: string | null;
// }
//
// export interface TabProps {
//   handleSetTabState: (val: string | null) => void;
//   setPosition: (position: Position) => void;
//   setTabState: Dispatch<SetStateAction<TabState>>;
//   tab: TabItem;
//   tabState: TabState;
// }
//
// export interface SubmenuListsProps {
//   handleSetTabState: (state: string | null) => void;
//   refLi: React.RefObject<HTMLLIElement | null>;
//   dir: DirType;
//   setSubMenuActiveId: Dispatch<SetStateAction<string | null>>;
//   subMenuActiveId: string | null;
//   tab: {
//     subMenus: MenuItem[];
//   };
// }
// export interface SidebarContentProps {
//   clickEffect: string | null;
//   setClickEffect: React.Dispatch<React.SetStateAction<string | null>>;
//   clickSubMenuEffect: string | null;
//   setClickSubMenuEffect: React.Dispatch<React.SetStateAction<string | null>>;
// }
