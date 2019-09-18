export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Information',
      wrapper: {
        // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '', // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Configuration',
      icon: 'fa fa-cogs',
      url: '/config',
      children: [
        {
          name: 'Bluetooth',
          url: '/config/bluetooth',
          icon: 'fa fa-bluetooth-b',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Settings',
          url: '/config/settings',
          icon: 'fa fa-cog',
        },
      ],
    },
    {
      name: 'Event Log',
      url: '/theme/typography',
      icon: 'fa fa-files-o',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Modules',
      url: '/modules',
      icon: 'icon-puzzle',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
      children: [
        {
          name: 'Temperature',
          url: '/modules/temperature',
          icon: 'fa fa-thermometer-three-quarters',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Doser',
          url: '/modules/collapses',
          icon: 'fa fa-eyedropper',
        },
      ],
    },
    {
      name: 'Statistics',
      url: '/buttons',
      icon: 'fa fa-bar-chart',
    },
    {
      name: 'Macros',
      url: '/charts',
      icon: 'fa fa-code',
    },
    {
      name: 'Reminders',
      url: '/icons',
      icon: 'fa fa-clock-o',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'fa fa-warning',
    },
    {
      name: 'Equipment',
      url: '/widgets',
      icon: 'fa fa-industry',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Outlets',
      url: '/outlets',
      icon: 'fa fa-plug',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Video',
      url: '/pages',
      icon: 'fa fa-video-camera',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
  ],
};
