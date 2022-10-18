import React from 'react';
import { NavLink } from 'react-router-dom';
import './Slider.css'

const Slider = () => {
    return (
        <section className="section-slide">
		<div className="wrap-slick1"> 
			<div className="slick1">
				<div className="item-slick1">
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div>
								<span className="ltext-101 cl2 respon2">
									Women Collection 2018
								</span>
							</div>
								
							<div>
								<h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
									NEW SEASON
								</h2>
							</div>
								
							<div>
								<NavLink to='/product' className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									Shop Now
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Slider;