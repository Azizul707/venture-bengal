/* eslint-disable react/no-unescaped-entities */

import { useParams } from "react-router-dom";
import useStories from "../../hooks/useStories";

const StoryDetails = () => {
    const titles = useParams();
    const [ story ] = useStories();
    const stories = story.filter( item => item.title === titles.title );
    

    return (
        <div className="">
            {
                stories.map(item => <div key={item._id}>
                    <div className="max-w-screen-xl mx-auto mt-10"><img className="h-[500px] w-full object-cover rounded-md" src={item.imageUrl} alt="" /></div>
                    <div className="max-w-screen-md mx-auto my-10 space-y-5">
                        <h1 className="text-5xl font-bold">{ item.title } Tours of Bangladesh</h1>
                        <p className="text-orange-500 font-semibold"><em>Location: { item.location } | Date: { item.date } | Author: { item.author }</em></p>
        
                        <p>Our journey into the heart of the Sundarbans was nothing short of enchanting. As our boat cut through the water with a soft hum, we found ourselves entering a labyrinth of mangrove forests where time seemed to stand still.</p>
        
                        <p>The air was thick with anticipation, and the scent of saltwater mingled with the earthy fragrance of the mangroves. We were venturing into a world untouched, a sanctuary where nature painted in hues of green, and every moment held the promise of something magical.</p>
        
                        <h2 className="text-2xl font-bold">The Boat Ride Through Timeless Waterways</h2>
        
                        <p>The boat glided gracefully through the narrow channels, and the play of sunlight created a chiaroscuro of shadows and light. The mangrove trees stood like silent sentinels, their roots intertwining in an elaborate dance. It was a symphony of nature, each note played by the rustling leaves and the gentle lapping of water against the boat's hull.</p>
        
                        <h2 className="text-2xl font-bold">Wildlife Extravaganza</h2>
        
                        <p>Our eyes were eager explorers, scanning the landscape for hidden treasures. Crocodiles sunbathed lazily on the riverbanks, and spotted deer ventured cautiously into clearings, casting watchful eyes on the boat. Above, exotic birds painted the sky with their vibrant wings, a living kaleidoscope against the green backdrop.</p>
        
                        <h2 className="text-2xl font-bold">Encounter with Majesty: The Bengal Tigers</h2>
        
                        <p>Yet, the Sundarbans had one more secret to share – the elusive Bengal tigers. Whispers in the wind had reached our ears, and then, as if granting our deepest wish, a majestic tiger emerged from the shadows. Time held its breath, and our hearts pounded in synchrony with the pulse of the jungle. It was a glimpse into the wild, a meeting with the monarchs of the mangroves.</p>
        
                        <h2 className="text-2xl font-bold">Cruising Along the Rivers: Surrendering to Serenity</h2>
        
                        <p>Cruising along the rivers, we surrendered to the serenity that enveloped us. The boat's engine hummed a lullaby, and the gentle ripples created a melody that echoed the heartbeat of the Sundarbans. Each bend in the river revealed a new vista, a canvas painted with the strokes of nature's brush.</p>
        
                        <h2 className="text-2xl font-bold">A Once-in-a-Lifetime Odyssey</h2>
        
                        <p>Our journey into the Sundarbans was a once-in-a-lifetime odyssey, a story written by the mangroves, whispered by the wildlife, and illustrated by the rivers. It was a chapter in our lives where time seemed to pause, and the magic of the Sundarbans became an indelible part of our story.</p>
        
                        <h2 className="text-2xl font-bold">Relive the Whispers</h2>
        
                        <p>And so, we invite you to join us in reliving these moments, to immerse yourself in the whispers of the Sundarbans. Nature's secrets await, woven into the fabric of an enchanted land where every rustle of leaves tells a story, and every ripple in the water echoes a tale of wonder.</p>
                    </div>
                </div>)
            }
       </div>
    );
};

export default StoryDetails;