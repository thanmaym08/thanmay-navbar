import React from 'react';

const people = [
    {
        name: 'Mani Bharadwaj',
        role: 'Fullstack Developer',
        imageUrl: '/assets/mani.png', // Use path relative to the public folder
    },
    {
        name: 'Manjunath',
        role: 'Backend Developer',
        imageUrl: '/assets/manju.png',
    },
    {
        name: 'Thanmay',
        role: 'Frontend Developer',
        imageUrl: '/assets/thanu.png',
    },
    {
        name: 'Shashank',
        role: 'Backend Developer',
        imageUrl: '/assets/shank.png',
    },
    {
        name: 'Pavan Kumar',
        role: 'Frontend Developer',
        imageUrl: '/assets/pavan.png',
    },
];

export default function Team() {
    return (
        <div id="team" className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        "Meet our dedicated team of healthcare professionals committed to your well-being. Together, we bring expertise and compassion to every aspect of your health journey."
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img alt={person.name} src={person.imageUrl} className="h-16 w-16 rounded-full" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
