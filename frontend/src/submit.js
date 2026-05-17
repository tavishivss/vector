// submit.js

import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import './submit.css';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState(null);
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        setStatus('loading');
        
        try {
            // Send pipeline data to backend
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes,
                    edges: edges
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to parse pipeline');
            }

            const data = await response.json();
            
            setStatus('success');
            setAlertData(data);
            setShowAlert(true);
            
            // Reset button status after showing alert
            setTimeout(() => setStatus('idle'), 2000);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            setStatus('error');
            setAlertData({
                error: true,
                message: error.message || 'Failed to connect to backend'
            });
            setShowAlert(true);
            
            // Reset button status
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const closeAlert = () => {
        setShowAlert(false);
        setAlertData(null);
    };

    const getButtonText = () => {
        switch (status) {
            case 'loading':
                return 'Analyzing Pipeline...';
            case 'success':
                return 'Analysis Complete!';
            case 'error':
                return 'Connection Failed';
            default:
                return 'Submit Pipeline';
        }
    };

    const getButtonIcon = () => {
        switch (status) {
            case 'loading':
                return <span className="spinner"></span>;
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            default:
                return '→';
        }
    };

    return (
        <>
            <div className="submit-container">
                <button 
                    type="submit" 
                    className={`submit-button ${status}`}
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                >
                    {getButtonText()}
                    <span className="submit-icon">{getButtonIcon()}</span>
                </button>
            </div>

            {/* Alert Modal */}
            {showAlert && alertData && (
                <div className="alert-overlay" onClick={closeAlert}>
                    <div className="alert-modal" onClick={(e) => e.stopPropagation()}>
                        {alertData.error ? (
                            <>
                                <div className="alert-header error">
                                    <span className="alert-icon">⚠️</span>
                                    <h2>Connection Error</h2>
                                </div>
                                <div className="alert-body">
                                    <p className="alert-message">{alertData.message}</p>
                                    <p className="alert-hint">
                                        Make sure the backend server is running on http://localhost:8000
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="alert-header">
                                    <span className="alert-icon">📊</span>
                                    <h2>Pipeline Analysis Results</h2>
                                </div>
                                <div className="alert-body">
                                    <div className="alert-stats">
                                        <div className="alert-stat">
                                            <span className="stat-label">Total Nodes</span>
                                            <span className="stat-value">{alertData.num_nodes}</span>
                                        </div>
                                        <div className="alert-stat">
                                            <span className="stat-label">Total Connections</span>
                                            <span className="stat-value">{alertData.num_edges}</span>
                                        </div>
                                        <div className="alert-stat">
                                            <span className="stat-label">Graph Type</span>
                                            <span className={`stat-badge ${alertData.is_dag ? 'success' : 'warning'}`}>
                                                {alertData.is_dag ? (
                                                    <>✓ Valid DAG</>
                                                ) : (
                                                    <>⚠ Contains Cycles</>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {alertData.is_dag ? (
                                        <div className="alert-message success">
                                            <p>
                                                <strong>✓ Pipeline is valid!</strong><br/>
                                                Your pipeline forms a Directed Acyclic Graph (DAG), 
                                                which means it has no circular dependencies and can be executed.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="alert-message warning">
                                            <p>
                                                <strong>⚠ Pipeline contains cycles!</strong><br/>
                                                Your pipeline has circular dependencies. This may cause 
                                                infinite loops during execution. Please review your connections.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        <div className="alert-footer">
                            <button className="alert-close-button" onClick={closeAlert}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
