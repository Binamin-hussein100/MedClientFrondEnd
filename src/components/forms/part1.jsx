import { useState } from "react";

const Part1 = ({ data, setData }) => {
    const [selectedOption, setSelectedOption] = useState("1");

    let deadline = ["12 hrs", "24 hrs", "2 Days", "3 Days", "5 Days", "7 Days", "14 Days"];

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
            <div className="grid w-[40rem] grid-cols-4 gap-2 rounded-xl bg-gray-200 p-2 border border-sky-500">
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
                    className="grid w-[40rem] grid-cols-4 gap-2 rounded-xl border border-sky-500 bg-gray-200 p-2"
                    placeholder="Writer's choice"
                    type="text"
                    name="topic"
                    value={data.topic || ""}
                    onChange={handleChange}
                />
            </div>
            {/* custom instructions */}
            <h3 className="mt-2">Instructions</h3>
            <div>
                <textarea
                    className="grid w-[40rem] grid-cols-4 gap-2 rounded-xl border border-sky-500 bg-gray-200 p-2"
                    name="instructions"
                    value={data.instructions || ""}
                    onChange={handleChange}
                ></textarea>
            </div>
        </>
    )
}

export default Part1;
