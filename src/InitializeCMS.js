import React, { useEffect } from 'react';

const InitializeCMS = () => {
  useEffect(() => {
    // Check if CMS blogs already exist
    const existingBlogs = localStorage.getItem('cmsBlogs');
    
    if (!existingBlogs) {
      // Initialize with sample blogs
      const sampleBlogs = [
        {
          id: '1',
          title: 'The Future of Ayurvedic Medicine in Modern Healthcare',
          content: `Ayurveda, the ancient Indian system of medicine, is experiencing a renaissance in modern healthcare. As we move into an era where holistic wellness is increasingly valued, Ayurvedic principles are being integrated with contemporary medical practices to create comprehensive treatment approaches.

The core philosophy of Ayurveda centers around the balance of three doshas: Vata, Pitta, and Kapha. These biological energies govern all physical and mental processes and provide a personalized approach to health and wellness.

Modern research is validating many traditional Ayurvedic remedies. Studies have shown that herbs like turmeric, ashwagandha, and triphala have significant therapeutic benefits. These findings are bridging the gap between ancient wisdom and modern science.

Healthcare practitioners are increasingly incorporating Ayurvedic principles into their practice. This includes:

1. Personalized nutrition based on dosha constitution
2. Stress management through yoga and meditation
3. Herbal supplements for preventive care
4. Lifestyle modifications for chronic disease management

The integration of Ayurveda with modern medicine offers a more comprehensive approach to healthcare that addresses not just symptoms but the root causes of illness. This personalized medicine approach is particularly effective for chronic conditions like diabetes, arthritis, and digestive disorders.

As we look to the future, the combination of traditional wisdom and modern technology promises to revolutionize healthcare delivery, making it more effective, personalized, and accessible to all.`,
          excerpt: 'Discover how ancient Ayurvedic wisdom is being integrated with modern healthcare to create personalized, holistic treatment approaches.',
          image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ayurveda-future.jpg?v=1751981382',
          author: 'Dr. Aayush Wellness Team',
          date: '2025-07-17',
          tags: ['Ayurveda', 'Modern Medicine', 'Holistic Health', 'Wellness'],
          category: 'Health & Wellness',
          slug: 'future-of-ayurvedic-medicine-modern-healthcare',
          featured: true,
          status: 'published',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Natural Stress Management: Ayurvedic Techniques for Modern Life',
          content: `In our fast-paced modern world, stress has become an unavoidable part of daily life. However, ancient Ayurvedic practices offer time-tested solutions for managing stress naturally and effectively.

Stress, according to Ayurveda, is primarily a Vata imbalance that affects both mind and body. When Vata is aggravated, it leads to anxiety, restlessness, and physical tension. Understanding this principle helps us address stress at its root.

Here are some powerful Ayurvedic techniques for stress management:

**Pranayama (Breathing Exercises)**
Controlled breathing is one of the most effective ways to calm the nervous system. Techniques like:
- Nadi Shodhana (Alternate Nostril Breathing)
- Bhramari (Bee Breath)
- Sheetali (Cooling Breath)

**Meditation and Mindfulness**
Regular meditation practice helps balance the mind and reduce cortisol levels. Even 10-15 minutes daily can make a significant difference.

**Ayurvedic Herbs**
Natural adaptogens like:
- Ashwagandha for anxiety reduction
- Brahmi for mental clarity
- Jatamansi for better sleep

**Lifestyle Modifications**
- Maintaining regular sleep schedules
- Following a Vata-pacifying diet
- Regular oil massage (Abhyanga)
- Spending time in nature

**Daily Routine (Dinacharya)**
Following a consistent daily routine helps stabilize Vata dosha and creates a sense of grounding and security.

By incorporating these ancient practices into modern life, we can effectively manage stress while maintaining our health and well-being naturally.`,
          excerpt: 'Learn powerful Ayurvedic techniques for managing stress naturally in our modern, fast-paced world.',
          image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/stress-management.jpg?v=1751981381',
          author: 'Dr. Wellness Expert',
          date: '2025-07-16',
          tags: ['Stress Management', 'Ayurveda', 'Mental Health', 'Natural Remedies'],
          category: 'Mental Wellness',
          slug: 'natural-stress-management-ayurvedic-techniques',
          featured: false,
          status: 'published',
          createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          updatedAt: new Date(Date.now() - 86400000).toISOString()
        }
      ];
      
      localStorage.setItem('cmsBlogs', JSON.stringify(sampleBlogs));
      console.log('CMS initialized with sample blogs');
    }
  }, []);

  return null; // This component doesn't render anything
};

export default InitializeCMS;
