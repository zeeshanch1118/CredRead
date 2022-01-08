import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// CredRead
import Dashboard from "../pages/Dashboard/index";
import Candidates from "../pages/Candidates/index";
import Jobs from "../pages/Jobs/index";
import Settings from "../pages/Settings/index";


const authProtectedRoutes = [


	//CredRead
	{ path: "/dashboard", component: Dashboard },
	{ path: "/candidates", component: Candidates },
	{ path: "/jobs", component: Jobs },
	{ path: "/settings", component: Settings },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
