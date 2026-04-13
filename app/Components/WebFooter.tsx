import React from 'react'

const WebFooter = () => {
    return (
        <main className='flex flex-row justify-between text-gray-600 w-full p-10'>

            <div>
                <h1 className='text-yellow-300 text-2xl mb-2'>Culinary Shadow</h1>
                <p className='mb-2'>Tokyo | New York | Paris</p>
                <p>contact@culinaryshadow.com</p>
            </div>
            <div>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Career</p>
                <p>Press Kit</p>
            </div>

            <div className='flex items-end text-end'>
                <h3>© 2024 Culinary Shadow. All Rights<p>
                    Reserved.</p></h3>
            </div>
        </main>
    )
}

export default WebFooter