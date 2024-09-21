import React from 'react';

function Empty() {
  return (
    <div className="p-32   relative">
      {/* Component Start */}
      <div className="container flex flex-wrap justify-between items-center mx-auto bg-white rounded-md dark:bg-sky-200">
        <div className="text-center border-dashed border-2 border-dark dark:border-dark rounded-md w-full p-20">
          <i className="bx bxs-contact bx-lg mb-5 dark:text-white"></i>
          <p className="text-xl mb-2 uppercase font-bold dark:text-dark">No Orders</p>
          <span className="text-m  block mb-10 dark:text-dark">
            Get started by creating a new order
          </span>
          <button className="bg-blue-400 rounded-full px-5 py-3 text-dark hover:bg-blue-500 w-52">
            Create
          </button>
        </div>
      </div>
      {/* Component End */}

      
    </div>
  );
}

export default Empty;
