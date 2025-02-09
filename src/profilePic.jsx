function ProfilePic(){
    const imgUrl = "./src/assets/photos/profile.webp"
    const handleClick = (e) => {
        e.target.style.display = "none" 
        // console.log(e)
    };
    
    return (
        <>
        <img onClick={handleClick} src={imgUrl} alt="profile pic" />
            <h4>hello form profilePic.jsx</h4>
        </>
    )
}
export default ProfilePic