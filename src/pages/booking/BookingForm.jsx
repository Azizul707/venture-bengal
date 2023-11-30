/* eslint-disable react/prop-types */

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useGuides from '../../hooks/useGuides';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userAxiosSecure from '../../hooks/userAxiosSecure';

const BookingForm = ( { titles } ) => {
    const { spotPhoto, tripTitle, price, } = titles;
    const [ guides ] = useGuides();

    const { user } = useAuth();
    const axiosSecure = userAxiosSecure();

    const [ tourDate, setTourDate ] = useState( new Date() );

    const [ selectedGuide, setSelectedGuide ] = useState( '' );

    const handleGuideChange = ( e ) => {
        setSelectedGuide( e.target.value );
    };
    const handleBooking = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const date = tourDate;
        const email = user?.email;

        const bookingInfo = {
            tripTitle,
            date,
            email,
            spotPhoto,
            price,
            selectedGuide,
            
        }
        

        Swal.fire( {
            title: "Do you Book the Package?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Book",

        } ).then( ( result ) => {



            if ( result.isConfirmed ) {

                axiosSecure.post( '/bookings', {
                    tripTitle:tripTitle,
                    date:date,
                    email:email,
                    spotPhoto:spotPhoto,
                    price:price,
                    selectedGuide: selectedGuide,
                    status:"In Review"
                } )
                    .then( res => {

                        Swal.fire( "Booked!", `${ tripTitle }`, "success" );
                    } )

            } else if ( result.isDenied ) {
                Swal.fire( "Changes are not Booked", `${ tripTitle }`, "info" );
            }
        } );


    };

    return (
        <div className=''>
            <h2 className='text-center text-3xl font-bold border-b'>Booked Your Tour Destination! </h2>
            <form onSubmit={ handleBooking }>
                <div className="card-body px-2 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of the Package:</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" defaultValue={ tripTitle } readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Name:</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" defaultValue={ user?.displayName } readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" defaultValue={ user?.email } readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" defaultValue={ user?.photoURL } readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Date:</span>
                        </label>
                        <DatePicker selected={ tourDate } className='input input-bordered' onChange={ ( date ) => setTourDate( date ) } />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Guide Name:</span>
                        </label>
                        <select value={ selectedGuide } onChange={ handleGuideChange } >
                            <option defaultValue="defaultValue">Select a guide</option>
                            { guides?.map( ( name, index ) => (
                                <option key={ index } value={ name?.name }>{ name?.name }</option>
                            ) ) }
                        </select>
                    </div>


                    <label>


                    </label>
                    <br />
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-orange-600 hover:bg-blue-600 text-white">Booking Now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
