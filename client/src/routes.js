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
		main:()=><Home />
	},
	{
		path:"/bai-giang",
		exact:false,
		main:()=><Baigiang/>
	},
	{
		path:"/hoc-lieu",
		exact:false,
		main:()=><Hoclieu />
	},
	{
		path:"/kiem-tra",
		exact:false,
		main:()=><Kiemtra />
	},
	{
		path:"/dang-nhap",
		exact:false,
		main:()=><SignIn />
	},
	{
		path:"/dang-ki",
		exact:false,
		main:()=><SignUp />
	},
	{
		path: "/admin",
		exact: false,
		main:() => <Dashboard />
	}
];
export default routes;