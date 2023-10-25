import useQuizStore from "../stores/useQuizStore";


const handleRestart = () => {
    useQuizStore.getState().restart();
};

export const Summary = () => {
    return (
        <>
            <button type="button" onClick={handleRestart}>
                Restart
            </button>
        </>
    )
};

