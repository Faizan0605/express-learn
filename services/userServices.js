const GetUserMsg = () => {
    return "Fetching all users"
}
const PostUserMsg = () => {
    return 'Adding a new user'
}

const getUserId = (req) => {
    return req.params.id
}


module.exports = {
    GetUserMsg,
    PostUserMsg,
    getUserId
}