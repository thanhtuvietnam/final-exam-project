import { nanoid } from 'nanoid';
import { TabItem } from '@/types/typenavbar';

import { icons } from './icons';
import { menuItems } from './data';

//NOTE: api
export const API_URL = 'https://ophim1.com/v1/api';
export const IMG_URL = 'https://img.ophim.live/uploads/movies';

//NOTE: navbar and sidebar
export const socialLinks: TabItem[] = [
  {
    id: nanoid(5),
    icon: icons.FiFacebook,
    label: 'Facebook',
    path: 'https://www.facebook.com',
  },
  {
    id: nanoid(5),
    icon: icons.RiYoutubeLine,
    label: 'YouTube',
    path: 'https://www.youtube.com',
  },
  {
    id: nanoid(5),
    icon: icons.RiTwitterXFill,
    label: 'X',
    path: 'https://www.twitter.com',
  },
  {
    id: nanoid(5),
    icon: icons.FaInstagram,
    label: 'Instagram',
    path: 'https://www.instagram.com',
  },
  {
    id: nanoid(5),
    icon: icons.FaLinkedin,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com',
  },
];

export const ProfileItems: TabItem[] = [
  {
    id: nanoid(5),
    icon: icons.BiDotsVertical,
    label: 'Setting',
    path: 'user/setting',
  },
  {
    id: nanoid(5),
    icon: icons.FaRegCircleUser,
    label: 'Profile',
    path: 'user/profile',
  },
  { id: nanoid(5), icon: icons.TbLogout2, label: 'Logout' },
];

const theLoaiSubMenus = menuItems
  .filter((item) => item.category === 'the-loai')
  .map((item) => ({
    id: item.id,
    label: item.label,
    path: `/the-loai/${item.param}`,
  }));

const quocGiaSubMenus = menuItems
  .filter((item) => item.category === 'quoc-gia')
  .map((item) => ({
    id: item.id,
    label: item.label,
    path: `/quoc-gia/${item.param}`,
  }));

export const tabs: TabItem[] = [
  { id: nanoid(5), icon: icons.FaHome, label: 'TRANG CHỦ', path: '/' },
  {
    id: nanoid(5),
    icon: icons.BiSolidCameraMovie,
    label: 'PHIM BỘ',
    path: '/danh-sach/phim-bo',
  },
  {
    id: nanoid(5),
    icon: icons.BiFilm,
    label: 'PHIM LẺ',
    path: '/danh-sach/phim-le',
  },
  {
    id: nanoid(5),
    icon: icons.TbDeviceTvOld,
    label: 'TV SHOWS',
    path: '/danh-sach/tv-shows',
  },
  {
    id: nanoid(5),
    icon: icons.FaChildren,
    label: 'PHIM HOẠT HÌNH',
    path: '/danh-sach/hoat-hinh',
  },
  {
    id: nanoid(5),
    icon: icons.TbCategoryPlus,
    label: 'THỂ LOẠI',
    path: '/the-loai',
    subMenus: theLoaiSubMenus,
  },
  {
    id: nanoid(5),
    icon: icons.FaGlobe,
    label: 'QUỐC GIA',
    path: '/quoc-gia',
    subMenus: quocGiaSubMenus,
  },
  // {
  //   id: nanoid(5),
  //   icon: icons.TbCategoryPlus,
  //   label: 'THỂ LOẠI',
  //   path: '/the-loai',
  //   subMenus: menuItems
  //     .filter((item) => item.category === 'the-loai')
  //     .map((item) => ({
  //       id: item.id,
  //       label: item.label,
  //       path: `/the-loai/${item.param}`,
  //     })),
  // },
  // {
  //   id: nanoid(5),
  //   icon: icons.FaGlobe,
  //   label: 'QUỐC GIA',
  //   path: '/quoc-gia',
  //   subMenus: menuItems
  //     .filter((item) => item.category === 'quoc-gia')
  //     .map((item) => ({
  //       id: item.id,
  //       label: item.label,
  //       path: `/quoc-gia/${item.param}`,
  //     })),
  // },
];
