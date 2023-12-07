import Swal from 'sweetalert2'

// eslint-disable-next-line react/prop-types
const ViewCoffee = ({ coffee }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id);
                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100">
                <figure><img src={photo} alt="coffee" /></figure>
                <div className="flex justify-between w-full p-4">
                    <div className="">
                        <h2 className="card-title">{name}</h2>
                        <p>chef: {chef}</p>
                        <p>supplier: {supplier}</p>
                        <p>taste: {taste}</p>
                        <p>category: {category}</p>
                    </div>

                    <div className="join join-vertical justify-between">
                        <button className="btn">view</button>
                        <button className="btn">edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;