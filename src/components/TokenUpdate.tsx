import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxToken } from '../slices/tokenSlice';
import { RootState } from '../store/store';
import { modalProperties } from '../types';

const TokenUpdate = ({onSetTokens}: modalProperties) => {
    const currentMaxToken = useSelector((state: RootState) => state.maxToken);
    const [inputValue, setInputValue] = useState<string>(currentMaxToken.toString());

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSave = () => {
        const newValue = parseInt(inputValue, 10);

        if (!isNaN(newValue) && newValue !== currentMaxToken) {
            dispatch(setMaxToken(newValue));
        }

        onSetTokens();
    };

    return (
        <div className='fixed top-0 left-0 bg-gray-800 bg-opacity-60 w-screen h-screen flex justify-center items-center'>
            <div className='bg-white rounded-xl overflow-hidden p-6'>
                <div className='mb-4'>
                    <label>
                        <p className='font-bold mb-2'>Set Max Token Value:</p>
                        <input className='w-full outline-none text-[#1E293B] border border-gray-400 rounded-md p-2' type="number" value={inputValue} onChange={handleChange} />
                    </label>
                </div>
                <button className='flex items-center px-5 gap-2 text-white bg-[#F97316] h-[39px] rounded-[6px]' onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default TokenUpdate;
