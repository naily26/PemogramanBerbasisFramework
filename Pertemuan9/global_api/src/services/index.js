const domainPath = 'http://loacalhost:3001';
const GetAPI = (path) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)
            .then(Response => Response.json())
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const getNewBlog = () => GetAPI('posts?_sort=id&_order=desc');

const API = {
    getNewBlog
}

export default API;