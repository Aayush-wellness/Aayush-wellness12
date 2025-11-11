import React, { useEffect, useState } from 'react';
import Header from './Header';
import SkeletonLoader from './SkeletonLoader';
import NewFooter from './NewFooter';
import { FaLeaf, FaRecycle, FaChartLine } from 'react-icons/fa';
import './Sustnability.css';

function Sustnability() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div>
            <Header />
            
            {/* Banner Section */}
            <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden mt-16 md:mt-20">
                <div className="absolute inset-0  z-10 flex items-center justify-center">
                    <div className="text-center px-6 md:px-4 transform translate-y-[-20px] md:translate-y-[-40px]">
                        <h1 className="  font-bold text-white mb-4 md:mb-6 leading-tight">Our Sustainability Commitment</h1>
                        <p className="text-xl md:text-3xl text-white/90 max-w-2xl mx-auto font-light px-2">A Multifaceted Approach to Environmental Responsibility</p>
                    </div>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Sustainable environment"
                    className="w-full h-full object-cover object-center"
                    style={{
                        filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
                        transform: 'scale(1.1)'
                    }}
                />
            </div>

            

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 md:py-16">
                {/* Introduction Section */}
                <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                    <div className='md:w-1/2'>
                        <h3 className='text-3xl mb-6' style={{color: "#d1a272"}}>
                            Nurturing Health, Preserving Nature
                        </h3>
                        <div className='text-lg space-y-4'>
                            <p>
                                In today's world, sustainability is no longer optional—it's essential. At Aayush Wellness, we've made it our mission to integrate environmental responsibility into every aspect of our business.
                            </p>
                            <p>
                                Our approach is rooted in the belief that true wellness extends beyond personal health to encompass the health of our environment.
                            </p>
                        </div>
                    </div>
                    <div className='md:w-1/2 rounded-lg overflow-hidden'>
                        <img 
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/download_14.jpg?v=1757413559" 
                            alt="Sustainable practices" 
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Why It Matters Section */}
                <div className='mb-16'>
                    <h3 className='text-3xl mb-6 text-center'>
                        Environmental Sustainability and Aayush Wellness
                    </h3>
                    <div className='text-lg space-y-6'>
                        <p>
                            In the face of growing environmental challenges, the concept of sustainability has evolved from a mere buzzword to a critical imperative for industries worldwide. Environmental sustainability refers to the responsible management of resources and the environment to ensure that future generations can enjoy a healthy planet. As we grapple with the far-reaching impacts of climate change, pollution, and resource depletion, industries, especially those in health and wellness, are being called upon to lead the charge toward a more sustainable future.
                        </p>
                        <p>
                            For Aayush Wellness, environmental sustainability is not just a corporate responsibility; it's a fundamental pillar of our mission. We understand that the health of the planet is intrinsically linked to the health of its people. Therefore, our commitment to sustainability extends across every facet of our operations—from sourcing ingredients to packaging products and engaging with our communities.
                        </p>
                    </div>
                </div>

                {/* Our Commitment Section */}
                <div className='mb-16'>
                    <h3 className='text-3xl mb-6 text-center' style={{color: "#d1a272"}}>
                        The Importance of Environmental Sustainability
                    </h3>
                    <div className='text-lg space-y-6'>
                        <p>
                            The connection between environmental sustainability and public health is undeniable. Environmental degradation, including air and water pollution, deforestation, and climate change, has a direct and detrimental impact on human health. These environmental issues contribute to respiratory problems, cardiovascular diseases, waterborne illnesses, and malnutrition, among other health concerns. Moreover, the strain on natural resources threatens the very ecosystems that sustain life on Earth.
                        </p>
                        <p>
                            In the health and wellness industry, there is a unique responsibility to adopt sustainable practices. This industry is inherently connected to well-being, and by promoting sustainability, companies can protect the environment while ensuring that the products they offer are beneficial, safe, and sustainable. At Aayush Wellness, we are deeply aware of this responsibility and are committed to integrating sustainability into our core operations.
                        </p>
                    </div>
                </div>

                {/* Sustainable Sourcing Section */}
                <div className='mb-16'>
                    <h3 className='text-3xl mb-6 text-center' style={{color: "#d1a272"}}>
                        Aayush Wellness's Commitment to Sustainability
                    </h3>
                    <div className='text-lg space-y-6 mb-10'>
                        <p>
                            At Aayush Wellness, sustainability is a guiding principle that shapes our decisions and actions. Our commitment to reducing our environmental footprint is reflected in every step of our production process, from sourcing raw materials to delivering the final product to our customers. We are dedicated to creating a positive impact on the environment while continuing to provide high-quality wellness products.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                        <div className="p-4 md:p-6 border border-gray-200 rounded-lg">
                            <div className='text-3xl mb-4' style={{color: "#d1a272"}}>
                                <FaLeaf />
                            </div>
                            <h4 className='text-xl font-semibold mb-3'>Sustainable Sourcing</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Partnering with local farmers who practice environmentally responsible agriculture.
                            </p>
                        </div>
                        <div className="p-4 md:p-6 border border-gray-200 rounded-lg">
                            <div className='text-3xl mb-4' style={{color: "#d1a272"}}>
                                <FaRecycle />
                            </div>
                            <h4 className='text-xl font-semibold mb-3'>Eco-friendly Packaging</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Using recyclable, biodegradable materials to minimize our environmental impact and reduce waste.
                            </p>
                        </div>
                        <div className="p-4 md:p-6 border border-gray-200 rounded-lg">
                            <div className='text-3xl mb-4' style={{color: "#d1a272"}}>
                                <FaChartLine />
                            </div>
                            <h4 className='text-xl font-semibold mb-3'>Continuous Improvement</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Constantly seeking innovative ways to reduce our carbon footprint and enhance sustainability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sustainable Sourcing Details */}
                <div className='mb-16'>
                    <h3 className='text-3xl mb-6 text-center' style={{color: "#d1a272"}}>
                        Sustainable Sourcing of Ingredients
                    </h3>
                    <div className='flex flex-col md:flex-row gap-8 items-center'>
                        <div className='md:w-1/2'>
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Decouvrez_comment_reduire_votre_facture_d_eau_avec_ces_plantes_peu_gourmandes.jpg?v=1757415566" 
                                alt="Sustainable farming" 
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                        <div className='md:w-1/2 text-lg space-y-4'>
                            <p>
                                The foundation of our products lies in the quality and sustainability of the ingredients we use. Aayush Wellness is committed to sourcing ingredients that are grown and harvested using sustainable practices. This means prioritizing partnerships with local farmers who engage in environmentally responsible agriculture. By choosing sustainably sourced ingredients, we ensure that our products are not only effective but also contribute to the preservation of natural resources and the protection of biodiversity.
                            </p>
                            <p>
                                Our commitment to sustainable sourcing also extends to the ethical treatment of the communities we work with. We strive to support local economies by engaging with small-scale farmers and suppliers, ensuring that they receive fair compensation for their efforts. This approach not only promotes environmental sustainability but also fosters social equity and community well-being.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Eco-friendly Packaging Section */}
                <div className='mb-16 bg-gray-50 p-8 rounded-lg'>
                    <h3 className='text-3xl mb-6 text-center' style={{color: "#d1a272"}}>
                        Eco-friendly Packaging Initiatives
                    </h3>
                    <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
                        <div className='md:w-1/2'>
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/download_15.jpg?v=1757415567" 
                                alt="Eco-friendly packaging" 
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                        <div className='md:w-1/2 text-lg space-y-4'>
                            <p>
                                Packaging waste is one of the most significant environmental challenges facing the consumer goods industry. Traditional packaging materials, particularly plastics, contribute to pollution and environmental degradation. At Aayush Wellness, we are actively addressing this issue by adopting eco-friendly packaging solutions that minimize waste and reduce our environmental impact.
                            </p>
                            <p>
                                We have implemented the use of recyclable, biodegradable, and reduced-plastic packaging across our product lines. Our commitment to eco-friendly packaging is part of a broader effort to promote a circular economy, where materials are reused and recycled rather than ending up in landfills or oceans. By choosing sustainable packaging options, we aim to reduce our carbon footprint and encourage our customers to participate in environmentally responsible practices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Future of Sustainability Section */}
                <div className='mb-16'>
                    <h3 className='text-3xl mb-6 text-center' style={{color: "#d1a272"}}>
                        The Future of Sustainability at Aayush Wellness
                    </h3>
                    <div className='text-lg space-y-6 mb-10'>
                        <p>
                            Our commitment to sustainability is not static; it's a journey of continuous improvement and innovation. As we look to the future, Aayush Wellness is focused on expanding our sustainability initiatives and setting new benchmarks for environmental responsibility in the wellness industry.
                        </p>
                        <p>
                            We are actively researching and developing new ways to further reduce our environmental impact. This includes exploring innovative materials for packaging, enhancing our supply chain sustainability, and expanding our carbon offset programs. Our goal is to become a model for sustainability in the wellness industry, demonstrating that it is possible to provide high-quality products while also safeguarding the environment.
                        </p>
                    </div>
                    
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                        <div className='p-4 md:p-6 border border-gray-200 rounded-lg text-center'>
                            <h4 className='font-bold text-lg mb-2' style={{color: "#000000"}}>Innovation</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Researching new sustainable materials and processes
                            </p>
                        </div>
                        <div className='p-4 md:p-6 border border-gray-200 rounded-lg text-center'>
                            <h4 className='font-bold text-lg mb-2' style={{color: "#000000"}}>Transparency</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Clear reporting on our sustainability metrics
                            </p>
                        </div>
                        <div className='p-4 md:p-6 border border-gray-200 rounded-lg text-center'>
                            <h4 className='font-bold text-lg mb-2' style={{color: "#000000"}}>Collaboration</h4>
                            <p className='text-gray-700 text-sm md:text-base'>
                                Partnering with like-minded organizations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conclusion Section */}
                <div className='bg-gray-900 text-white p-8 md:p-12 rounded-lg'>
                    <h3 className=' mb-6 text-center' style={{color: "white"}} >
                        Conclusion
                    </h3>
                    <div className='text-lg space-y-6 max-w-4xl mx-auto' >
                        <p style={{color: "white"}}>
                            Environmental sustainability is at the core of Aayush Wellness's mission. We understand that the health of our customers is directly linked to the health of our planet, and we are committed to doing our part to protect and preserve the environment. Through sustainable sourcing, eco-friendly packaging, carbon reduction efforts, and community engagement, we are making strides towards a greener future.
                        </p>
                        <p style={{color: "white"}}>
                            As we continue to grow, Aayush Wellness will remain steadfast in our commitment to sustainability. We believe that by adopting sustainable practices, we can not only enhance the well-being of our customers but also contribute to the long-term health of our planet. We invite our customers and partners to join us on this journey towards a more sustainable and prosperous future.
                        </p>
                    </div>
                </div>
            </div>

            <NewFooter />
        </div>
    );
}

export default Sustnability;
