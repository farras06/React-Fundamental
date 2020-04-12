import React from 'react'
import './style.css'

const TableProduct = () => {
    let arr = [
        { nama: 'Seto', pekerjaan: 'Developer' },
        { nama: 'Anton', pekerjaan: 'Designer' },
    ]

    const renderArr = () => {
        return arr.map((val,index) => {
            return (
                <tr>
                    <th>{index+1}</th>
                    <th>{val.nama}</th>
                    <th>{val.pekerjaan}</th>
                </tr>
            )
        })
    }

    return (
        <div align='center'>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {renderArr()}
                </tbody>
            </table>
        </div>
    )
}


export default TableProduct