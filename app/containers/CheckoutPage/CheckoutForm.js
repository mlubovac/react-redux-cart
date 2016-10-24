import React, { Component } from 'react';

class CheckoutForm extends Component {

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Full name</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" value={""} name="fullName" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Address</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="search" value={""} name="address" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">City</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="email" value={""} name="city" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">State</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="url" value={""} name="state" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Zip Code</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="tel" value={""} name="zipCode" />
                    </div>
                </div>
            </form>            
        )
    }
}

export default CheckoutForm;