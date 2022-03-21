import React from "react";

const Post = (props) => {
    return (
        
        
            
            
            <tr>
                <td>
                <div className="gambar-artikel">
                    <img src="https://i.pinimg.com/736x/ef/71/09/ef710981296604dd53d4890601982b43.jpg" alt="Gambar Tumbnail Artikel" />
                </div>
                </td>
                <td>{props.NIM}</td>
                <td>{props.nama}</td>
                <td>{props.alamat}</td>
                <td>{props.hp}</td>
                <td>{props.angkatan}</td>
                <td>{props.status}</td>
                <td><button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button></td>
            </tr>
            
        
            )
}

export default Post;