const PaginationButtons = (
    {
        isPrevDisabled,
        isNextDisabled,
        onPreviousPageClickCallback,
        onNextPageClickCallback
    }) => {
    return (
        <div className="d-flex justify-content-center m-auto pagination">
            <button
                className="direction-button px-3"
                disabled={isPrevDisabled}
                onClick={onPreviousPageClickCallback}
            >
                &lt;
            </button>
            <button
                className="direction-button px-3"
                disabled={isNextDisabled}
                onClick={onNextPageClickCallback}
            >
                &gt;
            </button>
        </div>
    );
}

export default PaginationButtons;