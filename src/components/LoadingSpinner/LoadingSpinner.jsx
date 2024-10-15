import './_LoadingSpinner.scss';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner" aria-label="Loading content">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;