import * as React from "react";
import {FC, useEffect, useRef, useState} from "react";

type props = {
    options: any;
    searchTerm: string;
    setSearchTerm: any;
    setSelectedLocation: any;
}

export const SearchInput: FC<props> = ({ options, searchTerm, setSearchTerm, setSelectedLocation }: props) => {

    const searchInputRef: any = useRef(null);

    const [location, setLocation] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<any[] | null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        if (options?.length > 0) {
            const filtered = options?.filter((option: any) =>
                option.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredOptions(filtered)
            // setIsDropdownVisible(true)
        }
    }, [options])

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                // setIsDropdownVisible(false)
                setFilteredOptions(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    const handleOptionClick = (option: any) => {
        // setSearchTerm(option);
        // setIsDropdownVisible(false);
        setLocation(option.name)
        setFilteredOptions(null)
        setSelectedLocation(option)
    };

    const handleInputChange = (e: any) => {
        const location = e.target.value;
        setLocation(location)
        setSearchTerm(location)
    };

    return (
        <div className="w-8/12 flex flex-col items-center justify-center" ref={searchInputRef}>
            <input
                type="search"
                className="w-full border-2 border-blue-400 bg-blue-50 rounded p-2"
                placeholder="Search location"
                value={location}
                onChange={handleInputChange}
            />

            {!!filteredOptions && (
                <div className="w-[682px] h-[200px]">
                    <ul className="absolute z-10 w-[682px] bg-white border border-gray-300 rounded-br-md rounded-bl-md shadow-lg">
                        {filteredOptions.map((option: any, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            >
                                {option.name}, {option.state}, {option.country}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}