// // handlers/search.js
// import prisma from '../db';

// export const search = async (req, res) => {
//   try {
//     const { q } = req.query;

//     if (!q) {
//       return res.status(400).json({ error: 'Search query is required' });
//     }

//     // Perform search logic with the 'q' parameter
//     const searchResults = await prisma.post.findMany({
//       where: {
//         OR: [
//           { title: { contains: q, mode: 'insensitive' } },
//           { content: { contains: q, mode: 'insensitive' } },
//         ],
//       },
//     });

//     // Send back the search results
//     res.json({ results: searchResults });
//   } catch (error) {
//     console.error('Error during search:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
