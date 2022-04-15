import CreateStash from './features/create-stash/CreateStash'
import OpenStash from './features/open-stash/OpenStash'

const App = () => {

    return (
        <div className='vh-100'>
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <CreateStash />
            </div>
        </div>
    );
};

export default App