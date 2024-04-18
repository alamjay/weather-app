import * as React from "react";
import {FC, useState} from "react";

type props = {
    options: any
}

export const SearchInput: FC<props> = ({ options }: props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    const handleInputChange = (e: any) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter options based on search term
        const filtered = options.filter((option: any) =>
            option.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const handleOptionClick = (option: any) => {
        setSearchTerm(option);
        setFilteredOptions([]);
    };

    return (
        <div className="w-8/12 flex flex-col items-center justify-center">
            <input
                type="search"
                className="w-full border-2 border-blue-400 bg-blue-50 rounded p-2"
                placeholder="Search location"
                value={searchTerm}
                onChange={handleInputChange}
            />

            {filteredOptions.length > 0 && (
                <div className="w-[682px] h-[200px]">
                    <ul className="absolute z-10 w-[682px] bg-white border border-gray-300 rounded-md shadow-lg">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}