/* eslint-disable react/prop-types */

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const BookingForm = ( { titles } ) => {
    

    const { spotPhoto, tripTitle, price, } = titles;
    const axiosSecure = useAxiosSecure();

    const [ guides, setGuides ] = useState( null );

    const {refetch, isPending, data: users = [] } = useQuery( {
        queryKey: [ 'users' ],
        queryFn: async () => {
            const res = await axiosSecure.get( '/users' );
            return res.data;
        },
    } );

    useEffect( () => {
        const userGuide = users.filter( item => item.role === "guide" );
        setGuides( userGuide )
    }, [] );


    const { user } = useAuth();

    const [ tourDate, setTourDate ] = useState( new Date() );

    const [ selectedGuide, setSelectedGuide ] = useState( '' );

    const handleGuideChange = ( e ) => {
        setSelectedGuide( e.target.value );
    };
    const handleBooking = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const touristName = form.touristName.value;
        const date = tourDate;
        const email = user?.email;
        

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
                    contact: guides.email,
                    touristName:touristName,
                    status:"In Review"
                } )
                    
                    .then( res => {
                        refetch();

                        Swal.fire( `${ tripTitle }`, "Successfully Booked" );
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
                        <input type="text" placeholder="name" name='touristName' className="input input-bordered" defaultValue={ user?.displayName } readOnly />
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
                                <option key={ index } value={ name?.name.split(" ")[0] }>{ name?.name }</option>
                            ) ) }
                        </select>
                    </div>


                    <label>


                    </label>
                    <br />
                    <div className="form-control mt-6">
                        <button  type='submit' className="btn bg-orange-600 hover:bg-blue-600 text-white">Booking Now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
