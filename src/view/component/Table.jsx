import React from "react"
import "./App.css"
const Table = () => {
    let hasil = ''
    let arr = [
        { Nama: "Budi", Pekerjaan: "Developer" },
        { Nama: "Ari", Pekerjaan: "Dokter" }
    ]
    return arr.map((val, index) => {
        return (
            <>
                    <tr>
                        <th>{index + 1}</th>
                        <th>{val.Nama}</th>
                        <th>{val.Pekerjaan}</th>
                    </tr>
            </>
        )
    })
}
const TabelFunction = () => {
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Pekerjaan</th>
                </tr>
            </thead>
            <tbody>
            {Table()}
            </tbody>
            </table>
        </div>
    )
}
export default TabelFunction