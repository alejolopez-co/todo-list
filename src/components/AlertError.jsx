export const AlertError = ({messageError}) => {
    return (
        <div className="font-bold text-center text-red-900 mt-5">
            <p>{messageError}</p>
        </div>
    );
};