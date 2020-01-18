import pay from '@/api/pay'
export default {
	state: {
	},
	mutations: {
	},
	actions: {
	  WXPAY(context,data){
		  return pay.wxpay(data);
	  }
	},
	getters: {
		 
	}
	
}