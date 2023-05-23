import { useNavigate } from '@remix-run/react';

const HistoyBackButton = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <button className="back-button" onClick={goBack}> &#8592; </button>
    );
}

export default HistoyBackButton;