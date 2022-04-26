import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";


const getNewBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');
const postNewBlog = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);
const deleteBlog = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {
    getNewBlog,
    postNewBlog,
    deleteBlog
}

export default API;