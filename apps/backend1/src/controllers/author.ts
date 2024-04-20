// import prisma from '../db';

// export const getAuthors = async (req, res) => {
//   try {
//     const authorsWithPostCount = await prisma.user.findMany({
//       select: {
//         id: true,
//         username: true,
//         post: {
//           select: {
//             id: true,
//           },
//         },
//       },
//       orderBy: {
//         post: {
//           _count: 'desc',
//         },
//       },
//       where: {
//         post: {
//           some: {
//             id: {
//               not: null, // Adjust this condition based on your requirements
//             },
//           },
//         },
//       },
//     });

//     res.status(200).json({ success: true, authorsWithPostCount });
//   } catch (error) {
//     console.error('Error fetching authors:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// };
