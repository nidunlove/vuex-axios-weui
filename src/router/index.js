import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Frame from '@/components/Frame'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'

import SubFrame from '@/components/SubFrame'
import Weather from '@/components/Weather'
import HotJoke from '@/components/HotJoke'
import WeXinTest from '@/components/WeXinTest'


Vue.use(Router)

export default new Router({

  routes: [
    // { path: "*", component: Home },
    {
      path: '/',
      name: 'Frame',
      component: Frame,
      children: [　　　
      	{　　　　
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {　　　　
          path: '/AboutMe',
          name: 'AboutMe',
          component: AboutMe
        }
      ]
    },
    {
      path: '/SubFrame',
      name: 'SubFrame',
      component: SubFrame,
      children: [　　　
        {　　　　
          path: '/Weather',
          name: 'Weather',
          component: Weather
        },
        {　　　　
          path: '/HotJoke',
          name: 'HotJoke',
          component: HotJoke
        },
        {　　　　
          path: '/WeXinTest',
          name: 'WeXinTest',
          component: WeXinTest
        }　
      ]
    }
  ]
})
