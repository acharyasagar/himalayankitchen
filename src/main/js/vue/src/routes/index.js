import AboutUs from '../components/AboutUs'
import Menu from '../components/Menu'
import Lunch from '../components/Lunch'
import OrderOnline from '../components/OrderOnline'
import ContactAndReservations from '../components/ContactAndReservations'


export default [
  {
    path: '/',
    component: AboutUs
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    path: '/menu/:menuListItem',
    component: Menu
  },
  {
    path: '/lunch',
    component: Lunch
  },
  {
    path: '/order-online',
    component: OrderOnline
  },
  {
    path: '/contact-and-reservations',
    component: ContactAndReservations
  }
]