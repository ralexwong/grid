import React from 'react';

const data = [
    {
        name : 'Erik Feinman',
        sold : 245
    },
    {
        name : 'Kim Brown',
        sold : 212
    },
    {
        name : 'Toby Ramsey',
        sold : 198
    }
]

const Realtors = () => {
    return <div className='realtors'>
        <h3 class="heading-3">Top 3 Realtors</h3>
            {data.map((realtor, i) => {
                return <div key={i} class="realtors__list">
                    <img src={`img/realtor-${i+1}.jpeg`} alt={`Realtor ${i+1}`} class="realtors__img" />
                    <div class="realtors__details">
                        <h4 class="heading-4 heading-4--light">{realtor.name}</h4>
                        <p class="realtors__sold">{realtor.sold} houses sold</p>
                    </div>
                </div>
            })}
            
    </div>
}

export default Realtors