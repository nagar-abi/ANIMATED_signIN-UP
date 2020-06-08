import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import './style.css';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		//minHeight: '100vh',
		// textAlign : 'left'
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
	// footer: {
	//   padding: theme.spacing(3, 2),
	//   marginTop: 'auto',
	//   // backgroundColor:
	//   //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
	// },
	typoBot: {
		marginBottom: theme.spacing(2),
	},
	// under:{
	//   marginBottom : theme.spacing(2),
	//   textDecorationStyle : "underline",
	// },
	typoTop: {
		marginTop: theme.spacing(2),
	},
	imageIdb: {
		maxWidth: 170,
		alignItems: 'left',
		marginLeft: theme.spacing(10),
		backgroundColor: 'white',
		borderRadius: '10px',
	},
	imageStore: {
		maxWidth: 200,
		alignItems: 'left',
	},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<CssBaseline />

				<footer className='footer footer2'>
					<Container>
						<Grid container Spacing={3}>
							<Grid item xs={12} md={4}>
								<div>
									<Typography className='theme-font' variant='body1'>
										AWESOME COMPANY{' '}
									</Typography>
									<Typography
										className='{classes.typoBot} theme-font '
										variant='body1'>
										<Link underline='none' color='inherit' href=''>
											XYZ COMPANY Pte Ltd, India
										</Link>
									</Typography>

									<Typography
										className='{classes.under} theme-font '
										variant='body1'>
										{' '}
										PARTNERS
									</Typography>

									<Typography className='{classes.typoTop} theme-font '>
										{' '}
										ANOTHER PARTNERS, ABROAD{' '}
									</Typography>
									<Typography className='theme-font'>
										{' '}
										WORLDS BEST COMPANY{' '}
									</Typography>
								</div>
							</Grid>

							<Grid item xs={12} md={4}>
								<div className='App'>
									<marquee>
										<div>
											<img
												className={classes.imageIdb}
												src='https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg'
											/>
											<img
												className={classes.imageIdb}
												src='https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png'
											/>
										</div>
									</marquee>
								</div>
							</Grid>

							<Grid item xs={12} md={4}>
								<div>
									<Typography className='theme-font' variant='body1'>
										<Link underline='none' color='inherit' href=''>
											About |
										</Link>
										<Link underline='none' color='inherit' href=''>
											{' '}
											carrers |
										</Link>
										<Link underline='none' color='inherit' href=''>
											{' '}
											Contact Us |
										</Link>
									</Typography>

									<Typography className='theme-font' variant='body1'>
										<Link underline='none' color='inherit' href=''>
											privacy Policy |
										</Link>
										<Link underline='none' color='inherit' href=''>
											{' '}
											Terms & conditions
										</Link>
									</Typography>
								</div>

								<div>
									<img
										src={'https://agidmc.com/images/googleplaystore.png'}
										className={classes.imageStore}
									/>

									<img
										src={'https://agidmc.com/images/appleplaystore.png'}
										className={classes.imageStore}
									/>
								</div>
							</Grid>
						</Grid>
					</Container>
				</footer>
			</div>
		</div>
	);
}
