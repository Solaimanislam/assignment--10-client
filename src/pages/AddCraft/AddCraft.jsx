import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';

const AddCraft = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const handleAddCraft = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const scName = form.scName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const status = form.status.value;
        const email = form.email.value;
        const uName = form.uName.value;
        const image = form.image.value;

        const newCraft = {name, scName, description, price, rating, customization, time, status, email, uName, image};

        console.log(newCraft);

        // send data to the server
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }


    return (
        <div className=" container mx-auto bg-purple-300 rounded-xl p-3">
            <h2 className="text-3xl font-bold text-center mb-8">Add Art & Craft</h2>

            <form onSubmit={handleAddCraft}>
                {/* form item & subcategory row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Item_name</span>
                        </div>
                        <input type="text" name="name" placeholder="item name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Subcategory_Name</span>
                        </div>
                        <select name="scName" className="p-3 rounded-lg input-bordered w-full">
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing"> Portrait Drawing</option>
                            <option value="WaterColor Painting">WaterColor Painting</option>
                            <option value="Oil Painting"> Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        {/* <input type="text" name="scName" placeholder="subcategory name" className="input input-bordered w-full" /> */}
                    </label>
                </div>
                {/* form description & price row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Short Description
                            </span>
                        </div>
                        <input type="text" name="description" placeholder="short description" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Price</span>
                        </div>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form rating & customization row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Rating</span>
                        </div>
                        <input type="text" name="rating" placeholder="item rating" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Customization</span>
                        </div>
                        <input type="text" name="customization" placeholder="customization Yes or No" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  processing_time & stockStatus row */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">Processing Time</span>
                        </div>
                        <input type="text" name="time" placeholder="processing_time" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text text-xl">Stock Status</span>
                        </div>
                        <input type="text" name="status" placeholder="stockStatus" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  User Email & User Name */}
                <div className="md:flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text text-xl">User Email</span>
                        </div>
                        <input type="email" name="email" disabled placeholder={user.email} className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:w-1/2 ml-4">
                        <div className="label">
                            <span className="label-text text-xl">User Name</span>
                        </div>
                        <input type="text" name="uName" disabled placeholder={user.displayName} className="input input-bordered w-full" />
                    </label>
                </div>
                {/* form  User Email & User Name */}
                <div className="">
                    <label className="form-control md:w-full">
                        <div className="label">
                            <span className="label-text text-xl">Image</span>
                        </div>
                        <input type="text" name="image" placeholder="image_url" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* button */}

                <label className="form-control md:w-full mt-5">
                    <input type="submit" value="ADD CRAFT" className="btn btn-outline btn-secondary" />
                </label>

            </form>
        </div>
    );
};

export default AddCraft;