import CreateStash from './features/create-stash/CreateStash'
import OpenStash from './features/open-stash/OpenStash'

const App = () => {

    return (
        <div className="d-flex vw-100 vh-100 bg-dark align-items-center justify-content-center">
            <OpenStash />
        </div>
    );
};

export default App