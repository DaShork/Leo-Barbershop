export const navItems = [
  {
    type: 'submenu',
    title: 'Dịch vụ',
    items: [
      { key: '1', label: 'Cắt tóc', link: '/cut' },
      { key: '2', label: 'Uốn tóc', link: '/perm' },
    ],
  },
  {
    type: 'submenu',
    title: 'Cửa hàng',
    items: [
      { key: '3', label: 'Sản phẩm', link: '/products' },
    ],
  },
  {
    type: 'item',
    title: 'Tin tức',
    link: '/news',
  },
  {
    type: 'submenu',
    title: 'Khóa học',
    items: [
      { key: '4', label: 'Học cắt tóc', link: '/course' },
    ],
  },
];