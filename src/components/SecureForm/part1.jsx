import { useState } from "react";

const Part1 = ({ data, setData }) => {
    const [selectedOption, setSelectedOption] = useState("1");

    let deadline = ["Urgent","TWELVE_HOURS", "TWENTY_FOUR_HOURS", "TWO_DAYS", "THREE_DAYS", "FIVE_DAYS", "SEVEN_DAYS", "FOURTEEN_DAYS"];

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setData({ ...data, deadline: e.target.value }); // Update the state with the selected deadline
    };
    console.log(data)
    return (
        <>
            {/* deadline */}
            <h3>Deadline</h3>
            <div className="grid lg:w-[40rem] grid-cols-2 lg:grid-cols-4 gap-2 rounded-xl bg-gray-200 p-2 border border-sky-500">
                {deadline.map((option) => (
                    <div key={option}>
                        <input
                            type="radio"
                            name="deadline"
                            id={option}
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                            className="peer hidden"
                        />
                        <label
                            htmlFor={option}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
            {/* topic */}
            <h3 className="mt-2">Topic title</h3>
            <div>
                <input
                    className="grid lg:w-[40rem] w-full grid-cols-4 gap-2 rounded-xl border border-sky-500 bg-gray-200 p-2"
                    placeholder="Writer's choice"
                    type="text"
                    name="title"
                    value={data.title || ""}
                    onChange={handleChange}
                />
            </div>
            {/* custom description */}
            <h3 className="mt-2">description </h3>
            <div>
                <textarea
                    className="grid w-full lg:w-[40rem] grid-cols-4 gap-2 rounded-xl border border-sky-500 bg-gray-200 p-2"
                    name="description"
                    value={data.description || ""}
                    onChange={handleChange}
                ></textarea>
            </div>
            <h3 className="mt-2">Custom instructions</h3>
            <div>
                <textarea
                    className="grid w-full lg:w-[40rem] grid-cols-4 gap-2 rounded-xl border border-sky-500 bg-gray-200 p-2"
                    name="instructions"
                    value={data.instructions || ""}
                    onChange={handleChange}
                ></textarea>
            </div>
        </>
    )
}

export default Part1;
