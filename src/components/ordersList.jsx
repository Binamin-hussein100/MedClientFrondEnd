import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react";
import { EyeIcon } from "../utils/eyeIcon";
import { columns, orders } from "../utils/testing/data";

const statusColorMap = {
    Picked: "success",
    Not_picked: "danger",
    Draft: "warning",
  };

const OrdersList = () => {
  const renderCell = React.useCallback((order, columnKey) => {
    const cellValue = order[columnKey];

    switch (columnKey) {
      case "Format":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
        case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[order.status]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
      case "actions":
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

    <>
           <div className="grid grid-cols-1 gap-5 mt-6 my-1	 sm:grid-cols-2 lg:grid-cols-4">
                
                <div>
                    <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold p-6">All Orders</span>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-md">
                            <h1 className="text-4xl font-bold"> 9</h1>
                        </div>
                        </div>
                    
                    </div>
                    </div>

                    <div>
                    <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold p-6">Complete</span>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-md">
                            <h1 className="text-4xl font-bold"> 5</h1>
                        </div>
                        </div>
                    
                    </div>
                    </div>

                    <div>
                    <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold p-6">In progress</span>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-md">
                            <h1 className="text-4xl font-bold"> 2</h1>
                        </div>
                        </div>
                    
                    </div>
                    </div>

                    <div>
                    <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                        <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold p-6">Pending</span>
                        </div>
                        <div className="p-6 bg-gray-200 rounded-md">
                            <h1 className="text-4xl font-bold"> 2</h1>
                        </div>
                        </div>
                    
                    </div>
                    </div>
          </div>

          <div className="my-3.5">
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                    {column.name}
                </TableColumn>
                )}
            </TableHeader>
            <TableBody items={orders}>
                {(item) => (
                <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
                )}
            </TableBody>
    </Table>
          </div>
    </>
    
   
  );
}

export default OrdersList;








          {/* <div className="flex flex-col mt-6">
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

 */}









