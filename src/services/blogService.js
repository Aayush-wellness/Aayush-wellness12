import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp
} from 'firebase/firestore';

// Use the single shared Firebase app and services
import { db } from '../firebase';

// Collection name
const BLOGS_COLLECTION = 'blogs';

// Blog service functions
export const blogService = {
  // Create a new blog
  async createBlog(blogData) {
    try {
      const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
        ...blogData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { id: docRef.id, ...blogData };
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  // Get all blogs
  async getAllBlogs() {
    try {
      console.log('BlogService: Starting to fetch blogs from Firestore...');
      console.log('Database instance:', db);
      console.log('Collection name:', BLOGS_COLLECTION);
      
      const q = query(
        collection(db, BLOGS_COLLECTION), 
        orderBy('createdAt', 'desc')
      );
      
      console.log('BlogService: Executing query...');
      const querySnapshot = await getDocs(q);
      console.log('BlogService: Query executed, docs count:', querySnapshot.size);
      
      const blogs = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('BlogService: Processing document:', doc.id, data);
        blogs.push({
          id: doc.id,
          ...data,
          // Convert Firestore timestamps to ISO strings
          createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        });
      });
      
      console.log('BlogService: Returning blogs:', blogs);
      return blogs;
    } catch (error) {
      console.error('BlogService: Error getting blogs:', error);
      throw error;
    }
  },

  // Get published blogs only
  async getPublishedBlogs() {
    try {
      const q = query(
        collection(db, BLOGS_COLLECTION),
        where('status', '==', 'published'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        });
      });
      return blogs;
    } catch (error) {
      console.error('Error getting published blogs:', error);
      throw error;
    }
  },

  // Get blog by slug
  async getBlogBySlug(slug) {
    try {
      const q = query(
        collection(db, BLOGS_COLLECTION),
        where('slug', '==', slug)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        };
      }
      return null;
    } catch (error) {
      console.error('Error getting blog by slug:', error);
      throw error;
    }
  },

  // Update a blog
  async updateBlog(blogId, blogData) {
    try {
      const blogRef = doc(db, BLOGS_COLLECTION, blogId);
      await updateDoc(blogRef, {
        ...blogData,
        updatedAt: serverTimestamp()
      });
      return { id: blogId, ...blogData };
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  // Delete a blog
  async deleteBlog(blogId) {
    try {
      await deleteDoc(doc(db, BLOGS_COLLECTION, blogId));
      return blogId;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },

  // Get blogs by category
  async getBlogsByCategory(category) {
    try {
      const q = query(
        collection(db, BLOGS_COLLECTION),
        where('category', '==', category),
        where('status', '==', 'published'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        });
      });
      return blogs;
    } catch (error) {
      console.error('Error getting blogs by category:', error);
      throw error;
    }
  },

  // Get featured blogs
  async getFeaturedBlogs() {
    try {
      const q = query(
        collection(db, BLOGS_COLLECTION),
        where('featured', '==', true),
        where('status', '==', 'published'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
          updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString()
        });
      });
      return blogs;
    } catch (error) {
      console.error('Error getting featured blogs:', error);
      throw error;
    }
  }
};
