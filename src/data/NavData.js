export const navItems = [
  {
    type: 'submenu',
    title: 'Dịch vụ',
    link: '/service',
    items: [
      { key: '1', label: 'Cắt tóc', link: '/service/cut' },
      { key: '2', label: 'Uốn tóc', link: '/service/perm' },
    ],
  },
  {
    type: 'submenu',
    title: 'Cửa hàng',
    link: '/product',
    items: [
      { key: '3', label: 'Sản phẩm', link: '/product' },
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
    link: '/course',
    items: [
      { key: '4', label: 'Học cắt tóc', link: '/course' },
    ],
  },
];