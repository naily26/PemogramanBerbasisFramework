import React, { Component } from "react";
import Post from "../../component/BlogPost/PostMahasiswa";
import API from "../../services";
import './BlogMahasiswa.css';


class BlogMahasiswa extends Component{
    
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            // userId: 1,
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "", 
            hp: "",
            angkatan: 1, 
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        // fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
        //     .then(response => response.json())
        //     .then(jsonHasilAmbilDariAPI => {
        //         this.setState({
        //             listMahasiswa: jsonHasilAmbilDariAPI
        //         })
        //     })
        API.getNewBlog().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        // fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
        //     .then(res => {
        //         this.ambilDataDariServerAPI()
        //     }
        //     )
        API.deleteBlog(data)
        .then((response) => {
            this.ambilDataDariServerAPI();
        });
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        // fetch('http://localhost:3001/mahasiswa', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertMahasiswa)
        // })
        // .then((Response) => {
        //     this.ambilDataDariServerAPI();
        // })
        API.postNewBlog(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }
    
    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom ">
                    <div className="input-box">
                       <center><h4>Form Tambah Data</h4></center> 
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10 ">
                            <input type="number" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">angkatan</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">status</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa} /> */}
                            <select className="form-control" name="status" id="status" onChange={this.handleTambahArtikel}>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Lulus">Lulus</option>
                                    <option value="Lulus">Cuti</option>
                            </select>
                        </div>
                    </div>
                    
                        
                        <button type="submit" className="btn btn-primary right"  onClick={this.handleTombolSimpan}>Simpan</button>
                        
                    </div>
                </div>
                
                <div className="container mt-3">
                    <h2>Daftar Data Mahasiswa</h2>
                    <p>Berikut adalah daftar mahasiswa yang sudah diinputkan:</p>            
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Foto</th>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Hp</th>
                            <th>Angkatan</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.listMahasiswa.map( mahasiswa => {
                            return <Post key={mahasiswa.id} NIM={mahasiswa.NIM} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                        })
                    }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default BlogMahasiswa;