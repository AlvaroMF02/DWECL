import React, { useState } from 'react';
import { Button } from 'reactstrap';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip
  } from 'recharts';

function Grafica({datos}) {

    const data = [
        {nombre:"Fototipo 1", Porcentaje:0},
        {nombre:"Fototipo 2", Porcentaje:5},
        {nombre:"Fototipo 3", Porcentaje:5},
        {nombre:"Fototipo 4", Porcentaje:20},
        {nombre:"Fototipo 5", Porcentaje:50},
        {nombre:"Fototipo 6", Porcentaje:20},
    ]


    return (
        <ResponsiveContainer width="100%" aspect={4}>
            <BarChart data={data} width={500} height={300}>
            <CartesianGrid strokeDasharray="4 1 2"/>
            <XAxis dataKey="nombre"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="Porcentaje" fill='#6b48ff'/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Grafica;