// // import CardDonut from "../../components/Cards/CardDonuts";
// // import CardLineChart from "../../components/Cards/CardLineChart";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CardFormPost from "../../components/Cards/CardFormPost";
// import HeaderStats from "../../components/HeaderStats.js/HeaderStasts";

// export default function addPost() {
//   const navigate = useNavigate();
//   const [token, setToken] = useState(null);
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     if (!sessionStorage.getItem("data")) {
//     } else {
//       const item = sessionStorage.getItem("data");
//       if (item) {
//         setToken(JSON.parse(item));
//       }
//     }
//   }, []);

//   // session timeout
//   const timeout = () => {
//     console.log("waktu jalan");
//     setTimeout(() => {
//       handleLogout();
//       console.log("waktu end");
//     }, token.expired);
//   };

//   // logout function
//   const handleLogout = () => {
//     sessionStorage.removeItem("data");
//   };

//   useEffect(() => {
//     if (token !== null) {
//       getProfile();
//       timeout();
//     }
//   }, [token]);

//   const getProfile = async () => {
//     await axios
//       .get(`${process.env.REACT_APP_BASE_URL}/hr/profile`, {
//         headers: { Authorization: `Bearer ${token.data}` },
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           setProfile(res.data.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };
//   return (
//     <>
//       <nav
//         className="flex px-5 py-3 text-gray-700 border mx-14 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-6"
//         aria-label="Breadcrumb"
//       >
//         <ol className="inline-flex items-center space-x-1 md:space-x-3">
//           <li className="inline-flex items-center">
//             <a
//               href="/admin"
//               className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//             >
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
//               </svg>
//               Home
//             </a>
//           </li>
//           <li>
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//               <a
//                 href="/admin/listPost"
//                 className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
//               >
//                 Profile Detail
//               </a>
//             </div>
//           </li>
//           <li aria-current="page">
//             <div className="flex items-center">
//               <svg
//                 className="w-6 h-6 text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//               <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
//                 Upload Lowongan Pekerjaan
//               </span>
//             </div>
//           </li>
//         </ol>
//       </nav>
//       <div className="flex flex-wrap">
//         <div className="w-full mb-12 px-12 xl:w-12/12 items-center mt-6">
//           <CardFormPost />
//         </div>
//         {/* <div className="w-full mb-12 px-4 xl:w-3/12">
//                     <CardLineChart />
//                 </div> */}
//       </div>
//     </>
//   );
// }
