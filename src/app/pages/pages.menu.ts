export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Reporting',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Review',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100
          }
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Bookings',
            icon: 'ion-edit',
            selected: false,
            expanded: false
          }
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Leads',
            icon: 'ion-edit',
            selected: false,
            expanded: false
          }
        },
      },
      {
        path: 'new',
        data: {
          menu: {
            title: 'My Leads',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100
          }
        },
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Service Providers',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'View Service Providers',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Add Service Provider',
              }
            }
          },
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Advertising',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Paid Advertising',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Featured Top Positions',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'Featured Providers',
                    url: '#'
                  }
                }
              }
            ]
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Deals and Promotion',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Listing Promotion',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'Check out page promotion',
                    url: '#'
                  }
                }
              }
            ]
          },
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'Custom Services',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'List',
              }
            }
          }
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Front-End Control',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Search Suggestions',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Search bar prototype',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Popular Services',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Inbox',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Contact us',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Become a partner',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Admin',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Movesouq Login Management',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'User',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'Add new user',
                    url: '#'
                  }
                }
              }
            ]
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Supplier Login Management',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'User',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'Add new user',
                    url: '#'
                  }
                }
              }
            ]
          },
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Manage Credit',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Add Credit',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Account Details',
              }
            }
          },
        ]
      }
    ]
  }
];
