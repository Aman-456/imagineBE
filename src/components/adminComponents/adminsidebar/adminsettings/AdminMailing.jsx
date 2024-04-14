import React from 'react'

const AdminMailing = () => {
  return (
    <div  className=" w-[84%] mx-auto mt-20 text-[#b0b7bb] font-semibold mb-20">
      <div className="mt-6 px-2">
                <input type="checkbox" />
                  <span className="ml-3"> Enable mass mailings to all users</span>
                </div>
                <h1 className='ml-2 mt-4'>Users will be able to unsubscribe on their account page.</h1>
                <div className="mt-2 ">
                <button className='bg-[#635bff] text-white mt-2 px-14 rounded-2xl py-3'>Save Options</button>
                <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
                </div>
    </div>
  )
}

export default AdminMailing
