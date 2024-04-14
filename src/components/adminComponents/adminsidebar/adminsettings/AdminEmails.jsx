import React from 'react'

const AdminEmails = () => {
  return (
    

    <>
    <div className=" w-[84%] mx-auto mt-20 text-white font-semibold mb-20">
    <h1>
Sender address for messages from site:</h1>
   <input
     defaultValue={"no-reply@imagen.network"}
     type="text"
     className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
   />
        <h1 className='mt-4'>Email address for admin messages - not shown to users:</h1>
   <input
     defaultValue={"amirmughal22@gmail.com"}
     type="text"
     className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
   />

<div className="mt-6">
             <input type="checkbox" />
               <span className="ml-3">Email this address when a Post is posted</span>
             </div>
             <div className="mt-6">
             <input type="checkbox" checked/>
               <span className="ml-3"> Provide a page for users to send feedback</span>
             </div>

             <h1 className='mt-8'>Privacy note for email addresses - HTML allowed:</h1>
   <input
     defaultValue={"Privacy: Your email address will not be shared or sold to third parties."}
     type="text"
     className="w-full bg-black rounded-2xl mt-2 text-white px-2 py-2 border-2 border-gray-600 outline-2 outline-blue-600"
   />

<div className="mt-6">
             <input type="checkbox" />
               <span className="ml-3">Send email via SMTP instead of local mail</span>
             </div>
             <div className="mt-2">
             <button className='bg-[#635bff] mt-2 px-14 rounded-2xl py-3'>Save Options</button>
             <button className='bg-gray-500 mt-2 ml-2 px-12 rounded-2xl py-3'>Reset To Defaults</button>
             </div>



             
 </div>

 
 </>
  )
}

export default AdminEmails
