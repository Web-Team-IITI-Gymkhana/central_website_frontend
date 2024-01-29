
import React from 'react'

const UserNameEmail = (props) => {
    const {data,handleChange} = props

    return (
        
        <div className="max-w-xs md:max-w-lg mx-auto">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-2xl font-bold mb-6">Club Information</h2>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clubName">
                Club Name
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="clubName"
                type="text"
                placeholder="Club Name..."
                value={data.clubName}
                onChange={handleChange}
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clubEmail">
                Club Email Id
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="clubEmail"
                type="email"
                placeholder="Email..."
                value={data.clubEmail}
                onChange={handleChange}
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber1">
                Phone Number 1
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phoneNumber1"
                type="text"
                placeholder="Phone Number 1..."
                value={data.phoneNumber1}
                onChange={handleChange}
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber2">
                Phone Number 2
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phoneNumber2"
                type="text"
                placeholder="Phone Number 2..."
                value={data.phoneNumber2}
                onChange={handleChange}
            />
        </div>
    </form>
</div>

    )
}

export default UserNameEmail

                        