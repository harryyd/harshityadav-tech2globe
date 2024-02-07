/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Service = () => {
  return (
    <div>
     <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100" id="services">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-white">
                <img src="https://www.tech2globe.com/images/new-page-images/icons/international.png" className='w-[150px]' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-xl font-semibold leadi">Global Data Support</p>
				<p className="text-xs dark:text-gray-400">Leveraging data capabilities for effective business operations</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-white">
				<img src="https://www.tech2globe.com/images/new-page-images/icons/planning.png"/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-xl font-semibold leadi">Consulting Prowess</p>
				<p className="text-xs dark:text-gray-400">Aligning your costs with goals to target growth.</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-white">
                <img src="https://www.tech2globe.com/images/new-page-images/icons/growth.png "/> 
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-xl font-semibold leadi">Digital Transformation</p>
				<p className="text-xs dark:text-gray-400">From planning online setup to reaching your target market.</p>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Service
