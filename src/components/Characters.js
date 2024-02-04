const Characters = ({element}) => {
    const {id, name, status, species, gender, image}  = element;
    return (
        <div className={"character"}>
            <img src={image} alt={name}/>
            <div className={"character__info"}>
                <ul>
                    <li>id: {id}</li>
                    <li>name: {name}</li>
                    <li>status: {status}</li>
                    <li>species: {species}</li>
                    <li>gender: {gender}</li>
                </ul>
            </div>

        </div>
    );
};

export {Characters};