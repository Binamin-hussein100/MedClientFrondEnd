import React from 'react'
import { IoCalendarSharp , IoPieChart, IoPeople, IoListSharp  } from 'react-icons/io5'
import { useAuth } from '../../context/AuthContext';




export default function DashboardStatsGrid() {
	const { user } = useAuth();


	const userAssignments = user.client.assignments
	
	return (
		<div className="flex gap-8  ">

            <div className='w-1/2 rounded border border-sky-500 p-4 flex'>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoListSharp  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-5xl text-gray-700 font-semibold"> {userAssignments.length} </strong>
					</div>
				</div>
			</div>
			<div className='w-1/2 rounded border border-sky-500 p-4 flex'>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoCalendarSharp  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Orders In Progress</span>
					<div className="flex items-center">
						<strong className="text-5xl text-gray-700 font-semibold">{userAssignments.length < 1 ? 0 : userAssignments.length}</strong>
					</div>
				</div>
			</div>
			
			<div className='w-1/2 rounded border border-sky-500 p-4 flex'>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Done</span>
					<div className="flex items-center">
						<strong className="text-5xl text-gray-700 font-semibold">{userAssignments.length < 1 ? 0 : userAssignments.length}</strong>
					</div>
				</div>
			</div>
            <div  className='w-1/2 rounded border border-sky-500 p-4 flex'>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-5xl text-gray-700 font-semibold">$3423</strong>
					</div>
				</div>
			</div>
			
            
		</div>
	)
}

function div({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}