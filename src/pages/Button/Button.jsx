

const Button = ({ menuItems }) => {
    console.log(menuItems);
    return (
        <div className=" flex justify-center">
            {
                menuItems?.map(p => (
                    <button className="btn text-white p-1 px-2 mx-5" key={p.id}>
                        {p}
                    </button>
                ))
            }
            <button className="btn text-white p-1 px-2 mx-5" key={p.id}>
                All
            </button>
        </div>
    );
};

export default Button;