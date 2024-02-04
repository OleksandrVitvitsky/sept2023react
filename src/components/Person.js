const Person = ({element}) => {
    const {name, surname, age, info, photo} = element;
    return (
        <div>
            <h2> Person {name}  {surname}  (age - {age})</h2>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Person};