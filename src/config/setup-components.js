
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

function setupComponents(Vue){

    Vue.component('Header', Header)
    Vue.component('Sidebar', Sidebar)
    Vue.component('Footer', Footer)
}


export {
  setupComponents
}
