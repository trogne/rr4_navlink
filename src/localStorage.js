export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState); //turn it into a state object
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state); //only works if the state is serializable, but this is the recommendation in redux
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};