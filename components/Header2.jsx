import React from "react";

const Header2 = () => {

    const List = [
        {
            name: 'Bangalore'
        },
        {
            name: 'Calcutta'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Delhi'
        },
        {
            name: 'Hyderabad'
        }
    ]
    return (
        <div>
            <div className="flex px-10 py-3 bg-gray-100 justify-between">
                {
                    List.map((list, i) => {
                        return (
                            <span key={i}>{list.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Header2;
