import React from "react";
// Component menggunakan function

const Header = (props) =>{
    return(
        <div>
            <h3>Component dari class header</h3>
            {/* <h3>Component ini dibuat menggunakan Function bukan Class</h3>
            <p>Nilai ini ditampilkan dari props: {props.judul}</p>
            <p>Nama saya: {props.nama} </p> */}
        </div>
    );
}
export default Header;
