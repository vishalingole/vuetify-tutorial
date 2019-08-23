
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import Profile from '@/components/profile/Profile'

function setupComponents(Vue){

    Vue.component('Header', Header)
    Vue.component('Sidebar', Sidebar)
    Vue.component('Footer', Footer)
    Vue.component('Profile', Profile)
}


export {
  setupComponents
}
