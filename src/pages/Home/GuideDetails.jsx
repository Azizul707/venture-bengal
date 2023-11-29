/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useGuides from '../../hooks/useGuides';
import { useParams } from 'react-router-dom';

const GuideDetails = () => {
    const { id } = useParams();

    const [ guides ] = useGuides();

    const guideProfile = guides.filter( item => item._id === id );
    console.log( guideProfile );

    const [ reviews, setReviews ] = useState( [] );
    const [ userRating, setUserRating ] = useState( 0 );
    const [ userComment, setUserComment ] = useState( "" );

    const submitReview = () => {
        // Check if the user is logged in (replace with your actual authentication check)
        const isLoggedIn = true; // Replace with your authentication check

        if ( isLoggedIn ) {
            // Create a new review object
            const newReview = {
                rating: userRating,
                comment: userComment,
            };

            // Update the reviews state with the new review
            setReviews( [ ...reviews, newReview ] );

            // Clear the rating and comment inputs after submission
            setUserRating( 0 );
            setUserComment( "" );
        } else {
            // Alert the user to log in (you may want to redirect to a login page)
            alert( "Please log in to submit a review." );
        }
    };

    // photo,name,experience,languages,specialties,_id
    return (
        <div className='max-w-screen-md drop-shadow-md mx-auto my-10'>
            {
                guideProfile.map( userData => <div key={ userData._id }>
                    {/* User Profile Section */ }
                    <div className='bg-slate-200 '>
                        <div className="mb-20 p-2"><img className='w-96 rounded drop-shadow-md' src={ userData.photo } alt="Profile" /></div>
                        <div className="font-semibold space-y-5 shadow-md p-5">
                            <h1 className='text-2xl font-bold'>{ userData.name }</h1>
                            <p className='font-semibold'>Contact: { userData.name }@gmail.com</p>
                            <p>Education: { userData.languages }</p>
                            <p>Skills: { userData.specialties }</p>
                            <p>Work Experience: { userData.experience }</p>
                        </div>
                    </div>

                    {/* Review Section */ }
                    <div className='py-5 px-2 shadow-md p-5 mt-5 border'>
                        <h2 className='text-xl font-bold'>Reviews</h2>
                        { reviews.length === 0 ? (
                            <p>No reviews yet.</p>
                        ) : (
                            <ul>
                                { reviews.map( ( review, index ) => (
                                    <li key={ index }>
                                        <p className=''>Rating: { review.rating }</p>
                                        <p>Comment: { review.comment }</p>
                                    </li>
                                ) ) }
                            </ul>
                        ) }

                        {/* User Review Form */ }
                        <div className='flex gap-10 mt-10'>
                            
                            <label>
                                Rating:
                                <input className='border p-3 border-orange-600'
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={ userRating }
                                    onChange={ ( e ) => setUserRating( e.target.value ) }
                                />
                            </label>
                           
                                <textarea className='border border-orange-600'
                                    value={ userComment }
                                    onChange={ ( e ) => setUserComment( e.target.value ) } placeholder='Your Comment'
                                />
                            
                            <button className='bg-orange-600 p-2 text-white'    onClick={ submitReview }>Submit Review</button>
                        </div>
                    </div>
                </div> )
            }
        </div>
    );
};

export default GuideDetails;