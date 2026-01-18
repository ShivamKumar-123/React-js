import React from 'react'

// function Card(props) {
//     console.log(props.username)
// return (
//     <div className="relative h-[400px] w-[300px] rounded-md mt-4">
//     <img 
//     src="https://plus.unsplash.com/premium_photo-1755612126350-09e2773c5d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
//     alt="AirMax Pro" 
//     class="z-0 h-full w-full rounded-md object-cover" 
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//     <div className="absolute bottom-4 left-4 text-left">
//     <h1 className="text-lg font-semibold text-white">{props.username}</h1>
//     <p className="mt-2 text-sm text-gray-300">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//     </p>
//     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//         View Profile →
//     </button>
//     </div>
// </div>
// )
// }

function Card({username,btnText = "visit me"}) {
        console.log(username,btnText)
    return (
            <div className="relative h-[400px] w-[300px] rounded-md mt-4">
            <img 
                src="https://plus.unsplash.com/premium_photo-1755612126350-09e2773c5d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
                alt="AirMax Pro" 
                class="z-0 h-full w-full rounded-md object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {btnText} →
            </button>
            </div>
        </div>
    )
}



export default Card