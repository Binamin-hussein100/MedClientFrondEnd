import { Button, Chip, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import { Link as NavLi, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { EyeIcon } from '../../utils/eyeIcon';
import Header from './header';
import Sidebar from './sidenav';
import DashboardStatsGrid from './stats';

const statusColorMap = {
	Picked: 'success',
	Not_picked: 'danger',
	Draft: 'warning',
};

const OrdersList = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const { userId, user } = useAuth();

	// const url = `http://localhost:3000/api/client/getClient/{userId}`;

	// useEffect(() => {
	// 	// Fetch orders if authenticated
	// 	const fetchUser = async () => {
	// 		try {
	// 			setLoading(true);
	// 			const response = await fetch(url, {
	// 				method: 'GET',
	// 				credentials: 'include',
	// 			});
	// 			if (!response.ok) {
	// 				throw new Error('Network response was not ok');
	// 			}
	// 			const data = await response.json();
	// 			setOrders(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	fetchUser();
	// }, [navigate]);

	const renderCell = React.useCallback((order, columnKey) => {
		const cellValue = order[columnKey];

		switch (columnKey) {
			case 'Format':
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">
							{cellValue}
						</p>
					</div>
				);
			case 'status':
				return (
					<Chip
						className="capitalize"
						color={statusColorMap[order.status]}
						size="sm"
						variant="flat"
					>
						{cellValue}
					</Chip>
				);
			case 'actions':
				return (
					<div className="relative flex items-center gap-2">
						<Tooltip content="Details">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EyeIcon />
							</span>
						</Tooltip>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);
	console.log(orders);
	return (
		<div className="flex border">
			<div className="">
				<Sidebar />
			</div>

			<div className="p-4 w-full">
				<Header />
				<DashboardStatsGrid />
				<div className="container px-4 sm:px-8">
					<div className="py-8">
						<div>
							<h2 className="text-2xl font-semibold leading-tight">
								Your Orders
							</h2>
						</div>

						{/* loop */}
						<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
							<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
								<table className="min-w-full leading-normal">
									<thead className="bg-sky-300">
										<tr>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												Title
											</th>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												Type of paper
											</th>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												Deadline
											</th>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												Status
											</th>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
										</tr>
									</thead>
									<tbody>
										{/* First Row */}
										{orders.map((order, i) => {
											return (
												<tr
													key={i}
													onClick={() =>
														navigate(
															`/order/${order.id}`
														)
													}
												>
													<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
														<div className="flex">
															<p className="text-gray-900 whitespace-no-wrap">
																{order.title}
															</p>
														</div>
													</td>
													<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
														<p className="text-gray-900 whitespace-no-wrap">
															{order.typeOfPaper}
														</p>
													</td>
													<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
														<p className="text-gray-900 whitespace-no-wrap">
															{order.deadline}
														</p>
													</td>
													<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
														<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
															<span
																aria-hidden
																className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
															></span>
															<span className="relative">
																{order.status}
															</span>
														</span>
													</td>
													<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
														<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
															<Button
																as={NavLi}
																to={`/order/${order.id}`}
																color="primary"
																variant="flat"
															>
																More Details
															</Button>
														</td>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrdersList;

{
	/* <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                  <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                   
                    <tbody className="bg-white divide-y divide-gray-200">
                      <div>
                        <tr className="transition-all hover:bg-gray-100 hover:shadow-lg flex justify-between">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                               
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Ahmed Kamel</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                            <div className="text-sm text-gray-500">Optimization</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                            >
                              Assigned
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                          </td>
                        </tr>
                      </div>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

 */
}
