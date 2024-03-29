const searchInput = document.querySelector("#searchInput");
const box = document.querySelector("#box")
const inputImage = document.querySelector("#inputImage");
const name = document.querySelector(".name");
const photo = document.querySelector("#photo");
const location = document.querySelector(".location");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const bio = document.querySelector(".bio");
const stars = document.querySelector(".stars");
const Tstars = document.querySelector(".Tstars");
const blog = document.querySelector(".blog");
const htmlUrl = document.querySelector(".gitUrl");


const client_id = "Iv1.e2d89256ac13d5a2";
const client_secret = "38270cbb1588a0abddf29e90afbd45cbf0e76ca1";

                const fetchUsers = async (user)=>{
                    const api_call = await fetch (`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
                // const queUrl = await fetch (`https://api.github.com/users/${user}/repos`);
                    
                    const data = await api_call.json();
                    //const datas = await queUrl.json();
                    return {data};
                    // return ;
                };

                    const showData = () =>{
                        fetchUsers(searchInput.value).then((res)=>{
                            console.log(res);
                            name.innerHTML = `${res.data.name}`;
                            photo.setAttribute("src", `https://github.com/${res.data.login}.png?size=150`)
                            location.innerHTML = `Location: ${res.data.location}`;
                            repos.innerHTML = `Total Repos: ${res.data.public_repos}`;
                            followers.innerHTML = `Followers: ${res.data.followers}`;
                            following.innerHTML = `Following: ${res.data.following}`;
                            bio.innerHTML = `Bio: ${res.data.bio}`;
                            blog.innerHTML = `Blog: ${res.data.blog}`;
                            
                            htmlUrl.innerHTML = `Github Link: ${res.data.html_url}`;
                            
                        })
                    }

    const techUsers = async (user)=>{
        const queUrl = await fetch (`https://api.github.com/users/${user}/repos`);
        const data = await queUrl.json();
        return {data:data};

    };


                    const viewData = () =>{
                        techUsers(searchInput.value).then((res)=>{
                        
                            var starCount = 0;
                            
                            for (let i = 0; i < res.data.length; i++){
                            starCount +=  res.data[i].stargazers_count;
                            }
                        
                            Tstars.innerHTML = `Total Star: ${starCount}`;

                        })
                        
                        }


inputImage.addEventListener("click", ()=>{
box.style.display = "none";

showData();
viewData();


})

