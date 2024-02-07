import React from 'react'

const Article = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100" id="about">
				<div className="container px-6 py-12 mx-auto">
					<div className="grid items-center gap-4 xl:grid-cols-5">
						<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
							<p className='border-b-2 border-violet-400 mb-[70px]'> About Us </p>
							<h2 className="text-4xl font-bold">Tech2Globe Your <span className="dark:text-violet-400">
								IT Consulting
							</span> Partner</h2>
							<p className="dark:text-gray-400">Tech2Globe is an IT solutions and consultancy firm that assists visionaries in being industry changemakers and defining business future. We collaborate as one team with our clients with the common goal of achieving amazing achievements, outperforming the competition, and redefining industries. To offer better, faster, and more enduring results, we combine our specialized, integrated knowledge with our services. With over 14 years of experience in various industry verticals, we uncover new sources to add value to your</p>
						</div>
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-4 md:grid-cols-2">
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md dark:bg-gray-900">

										<div className=" items-center ml-20">
											<img src="https://www.tech2globe.com/images/new-page-image/restaurant-menu-data-entry.webp" alt="" className="w-[122px]  h-[122px] bg-center bg-cover rounded-full dark:bg-gray-500" />
										</div>
										<p className="text-lg font-semibold mt-10">Restaurant Menu Data Entry</p>
										<p className="text-sm dark:text-gray-400" >They wanted to outsource their restaurant menu data entry work for one</p>

									</div>
									<div className="p-6 rounded shadow-md dark:bg-gray-900">

										<div className="flex ml-20 space-x-4">
											<img src="https://www.tech2globe.com/images/new-page-image/mobile-app-development.webp" alt="" className="w-[122px] h-22 bg-center bg-cover rounded-full dark:bg-gray-500" />
										</div>
										<p className="text-lg font-semibold mt-10">Mobile APP Development</p>
										<p className="text-sm dark:text-gray-400" >Our client required a mobile solution to complement its social design service</p>

									</div>
								</div>
								<div className="grid content-center gap-4">
									<div className="p-6 rounded shadow-md dark:bg-gray-900">
										<div className="flex ml-20 space-x-4">
											<img src="https://www.tech2globe.com/images/new-page-image/image-processing.webp" alt="" className="w-[122px] h-[122px] bg-center bg-cover rounded-full dark:bg-gray-500" />
										</div>
										<p className="text-lg font-semibold mt-10">Image Processing</p>
										<p className='text-sm dark:text-gray-400'>The image processing case study features a customer based in US owning a couple of studios.</p>
									</div>


									<div className="p-6 rounded shadow-md dark:bg-gray-900">
										<div className="flex ml-20 space-x-4">
											<img src="https://www.tech2globe.com/images/new-page-image/digital-merketing.webp" alt="" className="w-[122px] h-[122px] bg-center bg-cover rounded-full dark:bg-gray-500" />
										</div>
										<p className="text-lg font-semibold mt-10">Digital Marketing</p>
										<p className='text-sm dark:text-gray-400'>The biggest challenge for us is – the business niche is complete new for us and first</p>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Article


