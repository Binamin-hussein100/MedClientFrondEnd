import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const EachOrder = () =>{
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:3000/api/assignments/getAssignment/${id}`)
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }

                const data = await response.json()
                setOrder(data.assignment)

            } catch(error){
                console.error(error)
              }finally{
                setLoading(false);
              }
        }

        fetchOrder()
    },[])

    console.log(order)

    return(
        <>
           <div className="flex p-12">
                <div className="w-3/4 p-8 border border-sky-400 rounded-md">
                    {/* tttt */}
                <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                                Order: {order.id}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        {order.status} <span>Status statemnt</span>
                        </p>
                        <button className="btn">EDIT</button>
                    </div>
        
                    <div className="mt-6 px-16 border border-dotted border-gray-400 rounded-md bg-gray-100">
                    <dl className="grid grid-cols-2 gap-2 divide-y divide-gray-100">
                        {/* First row */}
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Creation Date</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.createdAt}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Urgency</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.deadline}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Title</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.title}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Description</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">{order.description}</dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Quality level</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.qualityLevel}
                        </dd>
                        </div>

                        {/* Second row */}
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Discipline</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.discipline}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Type of paper</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.typeOfPaper}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Number of Pages</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.pages}
                        </dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Format</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">{order.format}</dd>
                        </div>
                        <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                        <dt className="text-xs font-medium leading-5 text-gray-900">Sources to be cited</dt>
                        <dd className="mt-1 text-xs leading-5 text-gray-700 sm:col-span-2 sm:mt-0">
                            {order.sources}
                        </dd>
                        </div>
                    </dl>
                    </div>
                    {/* part 2 */}
                    
<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
<dt className="text-sm font-medium leading-6 text-gray-900">
Attachments
</dt>
<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
<ul
    role="list"
    className="divide-y divide-gray-100 rounded-md border border-gray-200"
>
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div className="flex w-0 flex-1 items-center">
        <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clipRule="evenodd"
        />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">
            resume_back_end_developer.pdf
        </span>
        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
        </div>
    </div>
    <div className="ml-4 flex-shrink-0">
        <a
        href="#"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        >
        Download
        </a>
    </div>
    </li>
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div className="flex w-0 flex-1 items-center">
        <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clipRule="evenodd"
        />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">
            coverletter_back_end_developer.pdf
        </span>
        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
        </div>
    </div>
    <div className="ml-4 flex-shrink-0">
        <a
        href="#"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        >
        Download
        </a>
    </div>
    </li>
</ul>
</dd>
</div> 

               

                </div>
                <div>
                    Blank
                </div>

           </div>
        </>

    )
}

export default EachOrder;




<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
<dt className="text-sm font-medium leading-6 text-gray-900">
Attachments
</dt>
<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
<ul
    role="list"
    className="divide-y divide-gray-100 rounded-md border border-gray-200"
>
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div className="flex w-0 flex-1 items-center">
        <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clipRule="evenodd"
        />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">
            resume_back_end_developer.pdf
        </span>
        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
        </div>
    </div>
    <div className="ml-4 flex-shrink-0">
        <a
        href="#"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        >
        Download
        </a>
    </div>
    </li>
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div className="flex w-0 flex-1 items-center">
        <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
            clipRule="evenodd"
        />
        </svg>
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">
            coverletter_back_end_developer.pdf
        </span>
        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
        </div>
    </div>
    <div className="ml-4 flex-shrink-0">
        <a
        href="#"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        >
        Download
        </a>
    </div>
    </li>
</ul>
</dd>
</div> 