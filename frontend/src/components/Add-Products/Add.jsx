/* mport React from 'react';
import data from '../../db.json'


const Add = () => {

    return (
        <div className="formulario">
            <h2 className="mb-3 text-center">Company</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={company.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Foundation</label>
                    <input type="number" name="foundation" value={company.foundation} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input type="url" name="website" value={company.website} onChange={handleInputChange} className="form-control" maxLength="100" required />
                </div>
                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-block btn-primary">
                            Update
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-block btn-success">
                            Register
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Add
 */