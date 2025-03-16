// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FiDownload, FiX, FiCalendar, FiClock, FiFileText, FiImage, FiExternalLink } from 'react-icons/fi';



// const BentoGrid = () => {
//     const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
//     const [selectedNotice, setSelectedNotice] = useState(null);
//     const galleryRef = useRef(null);

//     // Sample data (replace with your actual data)
//     const notices = [
//         { id: 1, title: 'Mid-term Examination Schedule', date: '2023-10-15', file: '/documents/midterm.pdf' },
//         { id: 2, title: 'New Research Opportunity', date: '2023-10-10', file: '/documents/research.pdf' },
//         { id: 3, title: 'Faculty Recruitment', date: '2023-10-05', file: '/documents/faculty.pdf' },
//         { id: 4, title: 'Workshop on Machine Learning', date: '2023-09-28', file: '/documents/workshop.pdf' },
//         { id: 5, title: 'Scholarship Applications Open', date: '2023-09-20', file: '/documents/scholarship.pdf' },
//     ];

//     const gallery = [
//         { id: 1, image: 'https://www.uitrgpv.ac.in/imagesN/gallery_img2.jpg', title: 'Campus Tour', description: 'A beautiful view of our main campus building' },
//         { id: 2, image: 'https://www.uitrgpv.ac.in/imagesN/news_img.jpg', title: 'Research Laboratory', description: 'Students working in advanced research lab' },
//         { id: 3, image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Graduation Day', description: 'Students celebrating their graduation' },
//         { id: 4, image: 'https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVybiUyMGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D', title: 'Modern Classroom', description: 'Technology-enabled learning spaces' },
//         { id: 5, image: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D', title: 'Library', description: 'Our extensive collection of books and resources' },
//         { id: 6, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnQlMjBldmVudHMuJTIwaW4lMjBjb29sZWdlfGVufDB8fDB8fHww', title: 'Guest Lecture', description: 'Industry experts sharing knowledge' },
//         { id: 7, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnQlMjBldmVudHMuJTIwaW4lMjBjb29sZWdlfGVufDB8fDB8fHww', title: 'Sports Event', description: 'Annual inter-departmental sports competition' },
//     ];

//     const upcomingEvents = [
//         { id: 1, title: 'Tech Symposium 2023', date: '2023-11-15', time: '10:00 AM' },
//         { id: 2, title: 'Industry Connect Program', date: '2023-11-20', time: '2:00 PM' },
//         { id: 3, title: 'Annual Alumni Meet', date: '2023-12-05', time: '6:00 PM' },
//     ];

//     // Important dates for the calendar
//     const importantDates = [
//         { id: 1, title: 'End Semester Examination', date: '2023-12-10' },
//         { id: 2, title: 'Winter Break Begins', date: '2023-12-20' },
//         { id: 3, title: 'New Semester Registration', date: '2024-01-05' },
//         { id: 4, title: 'Classes Begin', date: '2024-01-10' },
//     ];

//     // Handle notice click
//     const handleNoticeClick = (notice) => {
//         setSelectedNotice(notice);
//         setIsNoticeModalOpen(true);
//     };

//     // Infinite scroll effect for gallery
//     useEffect(() => {
//         if (galleryRef.current) {
//             const scrollAnimation = () => {
//                 if (galleryRef.current.scrollTop + galleryRef.current.clientHeight >= galleryRef.current.scrollHeight) {
//                     // Reset scroll position when reached the bottom
//                     galleryRef.current.scrollTop = 0;
//                 } else {
//                     galleryRef.current.scrollTop += 1;
//                 }
//             };

//             const interval = setInterval(scrollAnimation, 50);
//             return () => clearInterval(interval);
//         }
//     }, []);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-4xl font-bold text-center mb-10 text-indigo-900">Department of Computer Science</h1>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Notice Board */}
//                 <motion.div 
//                     className="col-span-1 row-span-1 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     whileHover={{ scale: 1.02 }}
//                     onClick={() => setIsNoticeModalOpen(true)}
//                 >
//                     <div className="flex items-center mb-4">
//                         <FiFileText className="text-2xl text-blue-600 mr-2" />
//                         <h2 className="text-2xl font-bold text-gray-800">Notice Board</h2>
//                     </div>
//                     <ul className="space-y-3">
//                         {notices.slice(0, 3).map((notice) => (
//                             <li key={notice.id} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 cursor-pointer">
//                                 <div>
//                                     <p className="font-medium text-gray-800">{notice.title}</p>
//                                     <p className="text-sm text-gray-500">{notice.date}</p>
//                                 </div>
//                                 <FiExternalLink className="text-blue-500" />
//                             </li>
//                         ))}
//                     </ul>
//                     <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">View All Notices</button>
//                 </motion.div>

//                 {/* Gallery */}
//                 <motion.div 
//                     className="col-span-1 row-span-2 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     whileHover={{ scale: 1.02 }}
//                 >
//                     <div className="flex items-center mb-4">
//                         <FiImage className="text-2xl text-purple-600 mr-2" />
//                         <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
//                     </div>
//                     <div 
//                         ref={galleryRef} 
//                         className="h-[650px] overflow-y-hidden relative"
//                     >
//                         <div className="space-y-4">
//                             {[...gallery, ...gallery].map((item, index) => (
//                                 <div key={${item.id}-${index}} className="relative group">
//                                     <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
//                                     <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
//                                         <h3 className="text-white font-bold">{item.title}</h3>
//                                         <p className="text-white text-sm">{item.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Upcoming Events */}
//                 <motion.div 
//                     className="col-span-1 bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     whileHover={{ scale: 1.02 }}
//                 >
//                     <div className="flex items-center mb-4">
//                         <FiClock className="text-2xl text-amber-600 mr-2" />
//                         <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
//                     </div>
//                     <ul className="space-y-3">
//                         {upcomingEvents.map((event) => (
//                             <li key={event.id} className="p-3 bg-white rounded-lg shadow-sm hover:bg-amber-50">
//                                 <p className="font-medium text-gray-800">{event.title}</p>
//                                 <div className="flex items-center text-sm text-gray-500">
//                                     <span>{event.date}</span>
//                                     <span className="mx-2">•</span>
//                                     <span>{event.time}</span>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </motion.div>

//                 {/* Calendar/Important Dates */}
//                 <motion.div 
//                     className="col-span-1 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     whileHover={{ scale: 1.02 }}
//                 >
//                     <div className="flex items-center mb-4">
//                         <FiCalendar className="text-2xl text-green-600 mr-2" />
//                         <h2 className="text-2xl font-bold text-gray-800">Academic Calendar</h2>
//                     </div>
//                     <ul className="space-y-3">
//                         {importantDates.map((date) => (
//                             <li key={date.id} className="p-3 bg-white rounded-lg shadow-sm hover:bg-green-50">
//                                 <p className="font-medium text-gray-800">{date.title}</p>
//                                 <p className="text-sm text-gray-500">{date.date}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </motion.div>
                
//                 {/* Department Stats */}
//                 <motion.div 
//                     className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     whileHover={{ scale: 1.02 }}
//                 >
//                     <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Highlights</h2>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-white p-4 rounded-xl shadow-sm text-center">
//                             <p className="text-3xl font-bold text-indigo-600">25+</p>
//                             <p className="text-gray-600">Faculty Members</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-xl shadow-sm text-center">
//                             <p className="text-3xl font-bold text-indigo-600">500+</p>
//                             <p className="text-gray-600">Students</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-xl shadow-sm text-center">
//                             <p className="text-3xl font-bold text-indigo-600">15+</p>
//                             <p className="text-gray-600">Research Labs</p>
//                         </div>
//                         <div className="bg-white p-4 rounded-xl shadow-sm text-center">
//                             <p className="text-3xl font-bold text-indigo-600">98%</p>
//                             <p className="text-gray-600">Placement Rate</p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Notice Modal */}
//             {isNoticeModalOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
//                     <motion.div 
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="bg-white rounded-2xl p-6 shadow-xl max-w-lg w-full"
//                     >
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-2xl font-bold text-gray-800">Notices</h2>
//                             <button 
//                                 onClick={() => setIsNoticeModalOpen(false)}
//                                 className="p-2 rounded-full hover:bg-gray-100"
//                             >
//                                 <FiX className="text-xl" />
//                             </button>
//                         </div>
//                         <div className="max-h-[60vh] overflow-y-auto">
//                             <ul className="space-y-4">
//                                 {notices.map((notice) => (
//                                     <li key={notice.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
//                                         <div className="flex justify-between items-center">
//                                             <div>
//                                                 <a href={notice.file} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
//                                                     {notice.title}
//                                                 </a>
//                                                 <p className="text-sm text-gray-500">{notice.date}</p>
//                                             </div>
//                                             <a 
//                                                 href={notice.file} 
//                                                 download 
//                                                 className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
//                                                 title="Download"
//                                             >
//                                                 <FiDownload />
//                                             </a>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </motion.div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BentoGrid;

