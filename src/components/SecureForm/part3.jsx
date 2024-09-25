import React, { useState, useEffect } from 'react';

const discipline =  [
    'ENGLISH_LITERATURE',
    'BUSINESS_MANAGEMENT',
    'HEALTH_SCIENCE_NURSING',
    'HISTORY',
    'PSYCHOLOGY_EDUCATION',
    'ART_MUSIC_FILM_STUDIES',
    'SOCIAL_POLITICAL_SCIENCE',
    'SOCIOLOGY',
    'PHILOSOPHY',
    'MARKETING',
    'RELIGIOUS_STUDIES',
    'ECONOMICS',
    'COMPUTER_SCIENCE_TECHNOLOGY',
    'OTHER'
  ];
  

const qualityLevels = [
    'HIGH_SCHOOL',
    'COLLEGE',
    'UNIVERSITY',
    "MASTERS",
    'PhD'
];

const format = [
    'MLA',
    'APA',
    'Chicago',
    'Havard',
    'Other'
];

const Part3 = ({ data, setData }) => {
    const [selecteddiscipline, setSelecteddiscipline] = useState(data.discipline || discipline[0]);
    const [selectedOption, setSelectedOption] = useState(data.qualityLevel || qualityLevels[0]);
    const [selectedFormat, setSelectedFormat] = useState(data.format || format[0]);
    const [value, setValue] = useState(data.sources || 1);

    useEffect(() => {
        setData({ ...data, discipline: selecteddiscipline, qualityLevel: selectedOption, format: selectedFormat, sources: value });
    }, [selecteddiscipline, selectedOption, selectedFormat, value]);

    const handleChange = (event) => {
        setSelecteddiscipline(event.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormatChange = (e) => {
        setSelectedFormat(e.target.value);
    };

    const decrement = () => {
        setValue(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    return (
        <>
            {/* section1 */}
            <div className="block w-11/12">
                <h3 className="text-gray-700 text-sm font-semibold mb-2">Discipline</h3>
                <select
                    className="border border-sky-500 rounded-full w-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                    value={selecteddiscipline}
                    onChange={handleChange}
                >
                    {discipline.map((discipline, index) => (
                        <option key={index} value={discipline}>
                            {discipline}
                        </option>
                    ))}
                </select>
            </div>

            {/* section 2 */}
            <h3 className="text-gray-700 text-sm font-semibold mt-4">Quality level</h3>
            <div className="grid w-[40rem] grid-cols-5 gap-2 rounded-xl bg-gray-200 p-2 border border-sky-500">
                {qualityLevels.map((option) => (
                    <div key={option}>
                        <input
                            type="radio"
                            name="qualityLevel"
                            id={option}
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                            className="peer hidden"
                        />
                        <label
                            htmlFor={option}
                            className="block cursor-pointer select-none rounded-xl text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>

            {/* section3 */}
            <h3 className="text-gray-700 text-sm font-semibold mt-4">Format</h3>
            <div className="grid w-[40rem] grid-cols-5 gap-2 rounded-xl bg-gray-200 p-2 border border-sky-500">
                {format.map((option) => (
                    <div key={option}>
                        <input
                            type="radio"
                            name="format"
                            id={option}
                            value={option}
                            checked={selectedFormat === option}
                            onChange={handleFormatChange}
                            className="peer hidden"
                        />
                        <label
                            htmlFor={option}
                            className="block cursor-pointer select-none rounded-xl text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>

            {/* section 4 */}
            <div className="custom-number-input w-8/12 mt-6">
                <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                    Sources to be cited
                </label>
                <div className='flex justify-between '>
                    <div className="flex flex-row h-10 w-full rounded-lg border border-sky-500 relative mt-1">
                        <button
                            onClick={decrement}
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                            type="number"
                            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                            name="custom-input-number"
                            value={value}
                            readOnly
                        />
                        <button
                            onClick={increment}
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
                        >
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Part3;
