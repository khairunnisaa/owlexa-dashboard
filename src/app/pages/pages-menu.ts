import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Owlexa Panel',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Artikel',
    icon: 'layout-outline',
    children: [
      {
        title: 'Text Editor',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Tabel Artikel',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Provider',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Input Data Provider',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Tabel Provider',
        link: '/pages/tables/smart-table',
      },
    ],
  },
];
