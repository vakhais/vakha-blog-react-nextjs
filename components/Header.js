import Link from 'next/link';
import NavLink from './NavLink';

const linkStyle = {
    marginRight: '1rem'
};

const Header = () => {
    return (
        <header>
			<div className="header-top">
				<div className="container">
					<div className="col-md-9 col-sm-7 xs-view">
					<Link href="/"><h2 style={{ color : "#fff" }}>Vakha Blog</h2></Link>
					</div>
					<div className="col-md-3 col-sm-5 xs-view-right">
						<div className="search-section center-block">
							<form>
								<input type="text" className="form-control" id="exampleInputName2" placeholder="Search" />
								<button type="submit" className="btn btn-default btn-xs"><i className="fa fa-search"></i></button>
							</form>
						</div>
						<div className="author-form">
							<li className="dropdown">
								<form>
									<a href="#" className="dropdown-toggle author-icon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
										<i className="fa fa-user author-icon"></i>
									</a>
									<ul className="dropdown-menu">
										<ul className="nav nav-tabs" role="tablist">
											<li role="presentation" className="active">
												<a className="sign" href="#signin" aria-controls="signin" role="tab" data-toggle="tab">sign in</a>
											</li>
											<li role="presentation">
												<a className="sign" href="#signup" aria-controls="signup" role="tab" data-toggle="tab">sign up</a>
											</li>
										</ul>

										<div className="tab-content">
											<div role="tabpanel" className="tab-pane active" id="signin">
												<ul className="user-dropdown">
													<div className="login-area">
														<div className="form-group">
															<label htmlFor="exampleInputText1">Username</label>
															<input type="email" className="form-control" id="exampleInputEmail1" />
														</div>
														<div className="form-group">
															<label htmlFor="exampleInputPassword1">Password</label>
															<input type="password" className="form-control" id="exampleInputPassword1" />
														</div>
													</div>
													<div className="checkbox">
														<input id="option" type="checkbox" name="field" value="option" />
														<label htmlFor="option"><span><span></span></span>Keep me singed in</label>
														<a href="#" className="pull-right">Forgot?</a>
													</div>
													<div className="form-submit">
															<button type="submit" className="btn btn-success btn-block">Sign in</button>
													</div>
												</ul>
											</div>
											<div role="tabpanel" className="tab-pane" id="signup">
												<ul className="user-dropdown">
													<div className="login-area">
														<div className="form-group">
															<label htmlFor="exampleInputText1">Username</label>
															<input type="email" className="form-control" id="exampleInputEmail1" />
														</div>
														<div className="form-group">
															<label htmlFor="exampleInputEmail1">Email Address</label>
															<input type="email" className="form-control" id="exampleInputEmail1" />
														</div>
														<div className="form-group">
															<label htmlFor="exampleInputPassword1">Password</label>
															<input type="password" className="form-control" id="exampleInputPassword1" />
														</div>
														<div className="form-group">
															<label htmlFor="exampleInputPassword1">Comfirm Password</label>
															<input type="password" className="form-control" id="exampleInputPassword1" />
														</div>
													</div>
													<div className="checkbox">
														<input id="option1" type="checkbox" name="field" value="option1" />
														<label htmlFor="option1"><span><span></span></span>I accept Terms and Condition ?</label>
													</div>
													<div className="form-submit">
															<button type="submit" className="btn btn-success btn-block">Sign up</button>
													</div>
												</ul>
											</div>
										</div>
									</ul>
								</form>
							</li>
						</div>
					</div>
				</div>
			</div>
			
			<div className="header-nav">
				<nav className="navbar navbar-default">
					<div className="container">
						<p className="pull-left visible-xs">
							<button type="button" className="navbar-toggle" data-toggle="offcanvas">
								<i className="fa fa-long-arrow-right"></i>
								<i className="fa fa-long-arrow-left"></i>
							</button>
						</p>
						<div className="social-nav center-block visible-xs">
							<li><a href="#"><i className="fa fa-twitter twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-facebook facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus google-plus"></i></a></li>
						</div>
						<div className="navbar-header">
						  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						  </button>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-left">
								{/* <li><a href="index.html">home</a></li> */}
								<li><NavLink activeClassName="active" href="/about"><a>about</a></NavLink></li>
								<li><a href="contact.html">contact</a></li>
								<li><NavLink activeClassName="active" href="/postWrite"><a>Post Write</a></NavLink></li>
							</ul>
							<ul className="nav navbar-nav navbar-right hidden-xs">
								<li><a href="#"><i className="fa fa-twitter twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-facebook facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
    );
};

export default Header;