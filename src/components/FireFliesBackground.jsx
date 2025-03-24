// Code to create a fireflies background for the website
"use client"

import React, { useEffect, useState } from 'react'

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {
        const addFirefly = () => {
            const newFirefly = createFirefly();
            setFireflies(currentFireflies => [...currentFireflies.slice(-14), newFirefly]);
        };

        const interval = setInterval(addFirefly, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
            {fireflies.map((firefly) => (
                <div
                    key={firefly.id}
                    className='absolute rounded-full w-[10px] h-[10px] bg-firefly-radial'
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FireFliesBackground;






// "use client"

// import React, { useEffect, useState } from 'react'

// const createAsteroid = () => ({
//     id: Math.random(),
//     top: `-${Math.random() * 10}%`,
//     left: `${Math.random() * 100}%`,
//     animationDuration: `${Math.random() * 3 + 2}s`,
//     animationDelay: `${Math.random() * 1.5}s`,
// })

// const AsteroidBackground = () => {
//     const [asteroids, setAsteroids] = useState([])

//     useEffect(() => {
//         const addAsteroidPeriodically = () => {
//             const newAsteroid = createAsteroid()
//             setAsteroids((currentAsteroids) => [...currentAsteroids.slice(-20), newAsteroid])
//         }

//         const interval = setInterval(addAsteroidPeriodically, 400)

//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//             {asteroids.map((asteroid) => (
//                 <div
//                     key={asteroid.id}
//                     className="absolute bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 rounded-full"
//                     style={{
//                         width: `${Math.random() * 15 + 5}px`,
//                         height: `${Math.random() * 15 + 5}px`,
//                         top: asteroid.top,
//                         left: asteroid.left,
//                         animation: `fall ${asteroid.animationDuration} linear ${asteroid.animationDelay} infinite`,
//                     }}
//                 ></div>
//             ))}
//         </div>
//     )
// }

// export default AsteroidBackground