

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);
        // form.reset();
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div >
            <div className="bg-[#F4F3F0] p-24 ">
                <h1 className="text-5xl">Add New Coffee</h1>
                <p>
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddCoffee}>
                    <div className="md:flex mb-6 ">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Enter Your Full Name" name="name" className="input input-bordered rounded-none" />
                        </label>
                        <label className="form-control w-full md:ml-6">
                            <div className="label">
                                <span className="label-text">chef</span>
                            </div>
                            <input type="text" placeholder="Enter coffee Chef" name="chef" className="input input-bordered rounded-none" />
                        </label>
                    </div>

                    <div className="md:flex mb-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Suppiler</span>
                            </div>
                            <input type="text" placeholder="Enter coffee Suppiler" name="supplier" className="input input-bordered rounded-none" />
                        </label>
                        <label className="form-control w-full md:ml-6">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" placeholder="Enter coffee Teste" name="taste" className="input input-bordered rounded-none" />
                        </label>
                    </div>

                    <div className="md:flex mb-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Category" name="category" className="input input-bordered rounded-none" />
                        </label>
                        <label className="form-control w-full md:ml-6">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" placeholder="Enter Coffee Details" name="details" className="input input-bordered rounded-none" />
                        </label>
                    </div>
                    <div className="md:flex mb-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">photo URL</span>
                            </div>
                            <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered rounded-none" />
                        </label>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] border-[#331A15] border-2 hover:bg-[#d1a66f] rounded-none" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;