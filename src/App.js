import {simpsons} from "./Collections/depository_Simpson";
import {Person} from "./components/Person";
import {rickAndMorty} from "./Collections/depository_Rick_Morty";
import {Characters} from "./components/Characters";

const App = () => {

    return (
        <div>
            <div>
                {simpsons.map( item => <Person element = {item}/>)};
            </div>
            <div id={"main_container_characters"}>
                <div id={"character__container"}>
                    {rickAndMorty.map(
                        item => <Characters element={item}/>)
                    }
                </div>
            </div>
        </div>

        // властивості id,name,status,species,gender,image

    );
};

export {App};