
import React from "react";

const events = [
    { title: "Tech Fest", description: "Showcase of innovative projects and competitions.", hoverText: "Join the biggest tech fest with AI, Robotics, and Coding events!", bgImage: "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=2048x2048&w=is&k=20&c=AnQo9q4GNFpisjRJKVnowsTWGyKUwdDwBIgZmxe-ET4=" },
    { title: "Cultural Night", description: "A celebration of music, dance, and drama.", hoverText: "Experience diverse cultural performances and artistic expression!", bgImage: "https://media.istockphoto.com/id/1486213129/photo/a-group-of-multicultural-peacefully-activists-are-sitting-with-posters-outside-while-holding.webp?a=1&b=1&s=612x612&w=0&k=20&c=fnZlvia9E4QCz387s5UknQMNON5zcQM-i2I6jH41GrU=" },
    { title: "Sports Meet", description: "Inter-college sports competitions.", hoverText: "Compete in various sports and showcase your athletic spirit!", bgImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZSUyMHNwb3J0JTIwbWVldHxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Art Exhibition", description: "Showcasing creative artworks from students.", hoverText: "Explore the artistic talent of students through paintings, sculptures, and digital art!", bgImage: "https://plus.unsplash.com/premium_photo-1683140790296-6815a1675b75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZSUyMGV2ZW50JTIwYXJ0JTIwZXhpYml0aW9ufGVufDB8fDB8fHww" },
    { title: "Debate Competition", description: "Battle of wits and arguments.", hoverText: "Engage in thought-provoking discussions and debates on trending topics!", bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZSUyMGRlYmF0ZSUyMGV4aWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Hackathon", description: "A 24-hour coding competition.", hoverText: "Test your coding skills in an intense hackathon with exciting challenges!", bgImage: "https://media.istockphoto.com/id/1496433480/photo/students-learning-computer-programming-vocational-education.jpg?s=1024x1024&w=is&k=20&c=HhaWfI-SEKjCj-YawXDc1qDDRPDTZ8LlMNQeMHnE0LE=" }
];

const EventCard = ({ title, hoverText, bgImage }) => {
    return (
        <div className={`relative p-6 rounded-lg shadow-lg group h-64 flex items-center justify-center text-center bg-cover bg-center `}
        style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0  rounded-lg group"></div>
            <h2 className="text-2xl font-semibold relative text-black z-10 group-hover:hidden p-2 bg-white/60">{title}</h2>
            <div className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold opacity-0 bg-white/60 group-hover:opacity-100 hover:backdrop-blur-[3px] transition-opacity duration-300 p-4">
                <p className="text-lg text-center">{hoverText}</p>
            </div>
        </div>
    );
};

const Events = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold text-center mb-8">College Event Theme</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>
        </div>
    );
};

export default Events;

