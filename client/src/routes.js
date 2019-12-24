import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Baigiang from './components/Baigiang';
import Hoclieu from './components/Hoclieu';
import Kiemtra from './components/Kiemtra';
import React from 'react';
import Dashboard from './components/admin/Dashboard';
const routes=[
	{
		path:"/",
		exact:true,
		main:({location,history})=><Home location={location} history={history}/>
	},
	{
		path:"/bai-giang",
		exact:false,
		main:({location})=><Baigiang location={location}/>
	},
	{
		path:"/hoc-lieu",
		exact:false,
		main:({location})=><Hoclieu location={location}/>
	},
	{
		path:"/kiem-tra",
		exact:false,
		main:({location})=><Kiemtra location={location}/>
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
	}
];
export default routes;