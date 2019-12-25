import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Baigiang from './components/Baigiang';
import Hoclieu from './components/Hoclieu';
import Kiemtra from './components/Kiemtra';
import React from 'react';
import Dashboard from './components/admin/Dashboard';
import Thongtincanhan from './components/Thongtincanhan';
import Giaitri from './components/Giaitri';
const routes=[
	{
		path:"/",
		exact:true,
		main:({location,history})=><Home location={location} history={history}/>
	},
	{
		path:"/bai-giang",
		exact:false,
		main:({location,history})=><Baigiang location={location} history={history}/>
	},
	{
		path:"/hoc-lieu",
		exact:false,
		main:({location,history})=><Hoclieu location={location} history={history}/>
	},
	{
		path:"/kiem-tra",
		exact:false,
		main:({location,history})=><Kiemtra location={location} history={history}/>
	},
	{
		path:"/dang-nhap",
		exact:false,
		main:({history,location})=><SignIn history={history} location={location}/>
	},
	{
		path:"/dang-ki",
		exact:false,
		main:({history})=><SignUp history={history}/>
	},
	{
		path: "/admin",
		exact: false,
		main:() => <Dashboard />
	},
	{
		path:"/thong-tin-ca-nhan",
		exact:false,
		main:({history})=><Thongtincanhan history={history}/>
	},
	{
		path:'/giai-tri',
		exact:false,
		main:({history})=><Giaitri history={history}/>
	}
];
export default routes;