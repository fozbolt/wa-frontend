//axios nam omogucava da na jednom mjestu spremamo podatke o backendu -> imp. sve metode koje idu prema backendu
import axios from 'axios';

//metoda koja instancira varijablu s komunikaciju s odr. backendom
//vezan uz konkretni backent

let Service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {

  Comments: {
    async get(postId){
      let res = await Service.get(`/posts/${postId}/comments`)
      return res.data.map(doc => {
        return {
            id: doc._id,
            email: doc.email,
            comment: doc.comment,
            postId: doc.postId,
            posted_at: Number(doc.postedAt)
        };
     });   
  },

  async add(postId, comment) {
  await Service.post(`/posts/${postId}/comments/`, comment);
  },

  async delete(postId, commentId) {
    await Service.delete(`/posts/${postId}/comments/${commentId}`);
   },
  }, 

  add(post) {
      return Service.post('/posts', post);
  },

  async getOne(id) {
    let response = await Service.get(`/posts/${id}`);
    let doc = response.data;
    return {
      id: doc._id,
      url: doc.source,
      email: doc.createdBy,
      title: doc.title,
      posted_at: Number(doc.postedAt),
      // dodajemo da čita i `comments` te `_id` pretvara u `id`
      comments: (doc.comments || []).map((c) => {
      c.id = c._id;
      delete c._id;
      return c;
        }),
      };
    },

  async postOfTheDay(){
    let response = await Service.get('/post_of_the_day');
    return response.data.map(doc => {
      return {
        id: doc._id,  
        url: doc.source,
        email: doc.createdBy,
        title: doc.title,
        posted_at: Number(doc.postedAt)
      };
    });
  },

  async getAll(searchTerm) {
      let options = {};

      if (searchTerm) {
          options.params = {
              _any: searchTerm,
          };
      }

      let response = await Service.get('/posts', options);
      return response.data.map((doc) => {
          return {
              id: doc._id,
              url: doc.source,
              email: doc.createdBy,
              title: doc.title,
              posted_at: Number(doc.postedAt),
          };
      });
  },
};

export { Service, Posts }; // exportamo Service za ručne pozive ili Posts za metode.

  





// S T A R A    V E R Z I J A
// //vezani uz pojedine rute
// let Posts = {

//     //prima podatke koje treba poslati na bbackend
//     async create(data){
//         console.log('Spremam na backend:', data)
//         let serverData = {
//             createdBy: data.user ,
//             postedAt: data.posted_at,
//             source: data.url,
//             title: data.title
//         }     
//         await Service.post("/posts", serverData)  
        
//         .catch(e=> {
//             //jer mi ne returna(javi se error) makar objavi sliku, POST metoda se ne izvrši dobro ?
//                 //ovako bar izvrši return makar jos postoji error
//             console.error(e)
//           })
        
//         return
//     },

//     //service get zove instancu axiosa nad gornjim url i u nastavuku dodaje ovu rutu i vraca promise
//     async getAll(searchTerm){
//         //asinkrone radnje -> kazemo js da obradi ovo dole, pa onda await dio
//         let response = await Service.get(`/posts?title=${searchTerm}`)
//         let data = response.data
//         //mapiranje premještamo ovamo da se ne gomilaju na posts.vue
//         data = data.map(doc => {
//             return {id: doc.id,
//                     url: doc.source, 
//                     email: doc.createdBy, 
//                     title: doc.title, 
//                     posted_at: Number(doc.postedAt)};
//           });
//         return data
//     }
// }


//export { Service, Posts }