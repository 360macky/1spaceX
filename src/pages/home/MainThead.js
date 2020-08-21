import React from 'react';

function MainThead(props) {
    if (props.results) {
        return (
            <thead style={{ backgroundColor: 'black' }}>
                <tr className="text-white">
                    <th scope="col" style={{ width: '20%' }}>
                        Capsule ID
                    </th>
                    <th scope="col" style={{ width: '40%' }}>
                        Details
                    </th>
                    <th scope="col" style={{ width: '10%' }}>
                        Landings
                    </th>
                    <th scope="col" style={{ width: '10%' }}>
                        State
                    </th>
                    <th scope="col" style={{ width: '30%' }}>
                        Type
                    </th>
                </tr>
            </thead>
        );
    } else {
        return null;
    }
}

export default MainThead;
