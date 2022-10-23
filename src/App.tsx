import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary, Landing } from 'components/pages';

export default function App() {
    return (
        <ErrorBoundary>
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}
