import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ menu }) {
    return (
        <div className="ui container">
            <h2 className="ui header centered">
                <img className="ui image" src="https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png" alt="" />
                <div className="content">MenuList</div>
            </h2>
            <div className="ui two column stackable grid container">
                {menu.map(menuItem => {
                    return (
                        <MenuItem key={menuItem.id} menuItem={menuItem} />
                    );
                })}
            </div>
        </div>
    );
}

export default MenuList;