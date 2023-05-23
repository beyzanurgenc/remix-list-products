import { useNavigation } from "@remix-run/react";

const GlobalLoading = ({ children }) => {
    const { state } = useNavigation();

    return (
        <>
            {
                state === "loading" ?
                    <div className="spinner h-100 d-flex align-items-center justify-content-center">

                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : children
            }
        </>

    );
}

export default GlobalLoading;