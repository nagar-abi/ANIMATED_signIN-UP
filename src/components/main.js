import React from 'react';
// import Landing from './Landing/Landing';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/footer';
import Signup from './SignUp/signUp';

export default function Index() {
	return (
		<div>
			<Header />
			{/* <Landing /> */}
			<Signup />
			<Footer />
		</div>
	);
}
