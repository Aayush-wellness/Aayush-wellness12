import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp,
  limit,
  writeBatch
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'blogs';

export const blogService = {

  // Create a new blog
  async createBlog(blogData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...blogData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  // Get all blogs
  async getAllBlogs() {
    try {
      console.log('blogService: Fetching all blogs from collection:', COLLECTION_NAME);
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      console.log('blogService: Query snapshot empty:', querySnapshot.empty);
      console.log('blogService: Number of documents:', querySnapshot.size);
      
      const blogs = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('blogService: Processing document with ID:', doc.id);
        console.log('blogService: Document data:', data);
        
        const blog = {
          id: doc.id,
          ...data,
          // Convert Firestore timestamps to readable dates
          createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        };
        
        console.log('blogService: Processed blog object:', blog);
        blogs.push(blog);
      });
      
      console.log('blogService: Final blogs array:', blogs);
      console.log('blogService: Blog IDs:', blogs.map(b => ({ title: b.title, id: b.id })));
      
      return blogs;
    } catch (error) {
      console.error('Error getting blogs:', error);
      throw error;
    }
  },

  // Update a blog
  async updateBlog(blogId, blogData) {
    try {
      console.log('blogService: Updating blog with ID:', blogId);
      console.log('blogService: Blog data:', blogData);
      
      if (!blogId || typeof blogId !== 'string' || blogId.trim() === '') {
        throw new Error('Valid Blog ID is required for update');
      }
      
      // Validate that the blogId is a proper Firestore document ID
      if (blogId.includes('/') || blogId.includes(' ')) {
        throw new Error('Invalid blog ID format');
      }
      
      const blogRef = doc(db, COLLECTION_NAME, blogId.trim());
      await updateDoc(blogRef, {
        ...blogData,
        updatedAt: serverTimestamp()
      });
      
      console.log('blogService: Blog updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating blog:', error);
      console.error('Blog ID:', blogId);
      console.error('Blog data:', blogData);
      throw error;
    }
  },

  // Delete a blog
  async deleteBlog(blogId) {
    try {
      console.log('blogService: Deleting blog with ID:', blogId);
      
      if (!blogId || typeof blogId !== 'string' || blogId.trim() === '') {
        throw new Error('Valid Blog ID is required for deletion');
      }
      
      // Validate that the blogId is a proper Firestore document ID
      if (blogId.includes('/') || blogId.includes(' ')) {
        throw new Error('Invalid blog ID format');
      }
      
      await deleteDoc(doc(db, COLLECTION_NAME, blogId.trim()));
      console.log('blogService: Blog deleted successfully');
      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      console.error('Blog ID:', blogId);
      throw error;
    }
  },

  // Maintenance functions

  // Clean up any problematic blog entries that may be causing issues
  async clearProblematicBlogs() {
    try {
      console.log('Attempting to clean up problematic blogs...');
      
      // Get all blog documents from Firestore
      const snapshot = await getDocs(collection(db, COLLECTION_NAME));
      let cleanedCount = 0;
      
      // We'll use batch writes for efficiency
      const batchSize = 100;
      let batchCount = 0;
      let batch = writeBatch(db);
      
      snapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data();
        
        // Check if this might be a problematic document
        // (missing important fields or has inconsistent ID)
        if (!data.title || !data.content || (data.id && data.id !== docSnapshot.id)) {
          console.log('Found potentially problematic blog document:', docSnapshot.id);
          
          // Add delete operation to batch
          batch.delete(docSnapshot.ref);
          batchCount++;
          cleanedCount++;
          
          // Commit when batch size is reached
          if (batchCount >= batchSize) {
            batch.commit();
            batch = writeBatch(db);
            batchCount = 0;
          }
        }
      });
      
      // Commit any remaining operations
      if (batchCount > 0) {
        await batch.commit();
      }
      
      console.log(`Cleaned up ${cleanedCount} problematic blog documents`);
      return { cleanedCount };
    } catch (error) {
      console.error('Error cleaning up problematic blogs:', error);
      throw error;
    }
  }
};
