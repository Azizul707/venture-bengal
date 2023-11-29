/* eslint-disable react/prop-types */
import Masonry from "react-responsive-masonry"


const ImageGallery = ( { items } ) => {

    const {imageFour, imageOne, imageTwo, imageThree, spotPhoto} = items

    const images = [imageFour,imageOne,imageTwo, imageThree, spotPhoto,imageOne]
    
    return (
        <div className="my-10">
            <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img className="rounded"
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
        </div>
    );
};

export default ImageGallery;