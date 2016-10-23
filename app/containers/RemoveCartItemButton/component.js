import React from 'react';

const RemoveCartItemButton = ({ guid, onClick }) => (
    <button className="btn btn-outline-danger btn-sm" onClick={onClick.bind(null, guid)}>&times;</button>
);

export default RemoveCartItemButton;