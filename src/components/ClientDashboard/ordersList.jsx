import { Button, Chip, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import { Link as NavLi, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { EyeIcon } from '../../utils/eyeIcon';
import Header from './header';
import Sidebar from './sidenav';
import DashboardStatsGrid from './stats';
import Empty from '../../utils/emptyState';

const statusColorMap = {
    Picked: 'success',
    Not_picked: 'danger',
    Draft: 'warning',
};

const OrdersList = () => {
  
    const navigate = useNavigate();
    const { user } = useAuth();
   

    const userAssignments = user.client.assignments

    console.log(user)

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
                                        {userAssignments && userAssignments.length >= 1 ? (
                                            userAssignments.map((order, i) => (
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
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                                                >
                                                   				<Empty/>

                                                </td>
                                            </tr>
                                        )}
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
