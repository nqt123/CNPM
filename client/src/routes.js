import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Baigiang from './components/Baigiang';
import Hoclieu from './components/Hoclieu';
import Kiemtra from './components/Kiemtra';
import React from 'react';
const routes=[
	{
		path:"/",
		exact:true,
		main:({location})=><Home location={location}/>
	},
	{
		path:"/bai-giang",
		exact:false,
		main:({location})=><Baigiang location={location}/>
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
		main:({history,location})=><SignIn history={history} location={location}/>
	},
	{
		path:"/dang-ki",
		exact:false,
		main:({history})=><SignUp history={history}/>
	}
];
export default routes;