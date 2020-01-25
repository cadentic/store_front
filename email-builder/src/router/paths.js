/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/email-builder',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/email-builder/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/email-builder//table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/email-builder//typography',
    view: 'Typography'
  },
  {
    path: '/email-builder//icons',
    view: 'Icons'
  },
  {
    path: '/email-builder//maps',
    view: 'Maps'
  },
  {
    path: '/email-builder//notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
