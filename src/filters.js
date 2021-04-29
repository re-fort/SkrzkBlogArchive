// Vue Filter
Vue.filter('YYYYMM_JP', (ymd) => ymd ? ymd.substr(0, 4) + '年' + ymd.substr(4, 2) + '月' : '')
Vue.filter('YYYY', (ymd) => ymd ? ymd.substr(0, 4) : '')
Vue.filter('MM', (ymd) => ymd ? ymd.substr(4, 2) : '')
Vue.filter('DD', (ymd) => ymd ? ymd.substr(6, 2) : '')
